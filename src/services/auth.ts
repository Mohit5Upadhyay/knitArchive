

// src/services/auth.ts
import { account, databases } from '../appwrite/appwrite';
import { conf } from '../config/conf';
import { UserRole } from '../types';

// Types
interface UserData {
  name: string;
  email: string;
  role: UserRole;
  course: string;
  semester: number;
  session: string;
  branch: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthResponse {
  user: UserData;
  session: any;
}

// Validation functions
const isValidKnitEmail = (email: string): boolean => {
  return /^[a-zA-Z0-9._%+-]+@knit\.ac\.in$/.test(email);
};

const isStrongPassword = (password: string): boolean => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password)
  );
};

const isValidSession = (session: string): boolean => {
  return /^\d{4}-\d{2}$/.test(session);
};

export async function registerUser(
  email: string,
  password: string,
  name: string,
  course: string,
  branch: string,
  semester: number,
  role: UserRole,
  session: string
): Promise<AuthResponse> {
  // Validate inputs
  if (!isValidKnitEmail(email)) {
    throw new Error('Please use your KNIT email address (@knit.ac.in)');
  }

  if (!isStrongPassword(password)) {
    throw new Error(
      'Password must be at least 8 characters and contain uppercase, lowercase and numbers'
    );
  }

  if (!isValidSession(session)) {
    throw new Error('Invalid session format (YYYY-YY)');
  }

  const allowedRoles = Object.values(UserRole);
  if (!allowedRoles.includes(role)) {
    throw new Error('Invalid user role selected');
  }

  try {
    const user = await account.create('unique()', email, password, name);

    const userData: UserData = {
      name,
      email,
      role,
      course,
      semester: Number(semester),
      session,
      branch,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteUserCollectionId,
      user.$id,
      userData
    );

    const newSession = await account.createEmailPasswordSession(email, password);

    return { user: userData, session: newSession };
  } catch (error: any) {
    console.error('Registration error:', error);
    if (error?.code === 409) {
      throw new Error('Email is already registered');
    }
    throw new Error('Registration failed. Please try again.');
  }
}

export async function loginUser(
  email: string,
  password: string
): Promise<AuthResponse> {
  if (!isValidKnitEmail(email)) {
    throw new Error('Please use your KNIT email address (@knit.ac.in)');
  }

  try {
    let session;
    try {
      session = await account.getSession('current');
    } catch (error: any) {
      if (error?.code !== 404) {
        throw error;
      }
      session = await account.createEmailPasswordSession(email, password);
    }

    const user = await getCurrentUser();

    return { user, session };
  } catch (error: any) {
    if (error?.code === 401) {
      throw new Error('Invalid email or password');
    }
    throw new Error('Login failed. Please try again.');
  }
}

export async function logoutUser(): Promise<boolean> {
  try {
    await account.deleteSession('current');
    return true;
  } catch (error: any) {
    if (error?.code === 401) {
      return true; // Already logged out
    }
    throw new Error('Logout failed. Please try again.');
  }
}

export async function checkAuth(): Promise<AuthResponse | null> {
  try {
    const session = await account.getSession('current');
    // console.log("session: ", session);
    if (!session) return null;

    const user = await getCurrentUser();
    return { user, session };
  } catch (error: any) {
    if (error?.code === 401) return null;
    console.error('Auth check error:', error);
    return null;
  }
}

export async function resetPassword(email: string): Promise<{ success: boolean; message: string }> {
  if (!isValidKnitEmail(email)) {
    throw new Error('Please use your KNIT email address');
  }

  try {
    await account.createRecovery(email, `${conf.appwriteEndpoint}/reset-success`);
    return {
      success: true,
      message: 'Password reset email sent successfully',
    };
  } catch (error) {
    console.error('Password reset error:', error);
    throw {
      success: false,
      message: 'Failed to send password reset email',
    };
  }
}

export async function updatePassword(password: string, oldPassword: string): Promise<any> {
  if (!isStrongPassword(password)) {
    throw new Error(
      'New password must be at least 8 characters and contain uppercase, lowercase and numbers'
    );
  }

  try {
    return await account.updatePassword(password, oldPassword);
  } catch (error) {
    console.error('Password update error:', error);
    throw new Error('Failed to update password');
  }
}

export async function getCurrentUser(): Promise<UserData> {
  try {
    const user = await account.get();
    return await databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteUserCollectionId,
      user.$id
    ) as unknown as UserData;
  } catch (error) {
    console.error('Get user error:', error);
    throw new Error('Failed to get current user');
  }
}