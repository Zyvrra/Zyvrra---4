\"use client\";

export type UserRole = \"buyer\" | \"seller\" | \"creator\";

export type User = {
  id: string;
  email: string;
  role: UserRole;
  displayName: string;
  avatar?: string;
  createdAt: number;
};

let currentUser: User | null = null;

function initializeUser(): User | null {
  if (typeof window === \"undefined\") return currentUser;
  if (!currentUser) {
    const stored = localStorage.getItem(\"zyvrra_user\");
    if (stored) {
      try {
        currentUser = JSON.parse(stored);
      } catch (e) {
        localStorage.removeItem(\"zyvrra_user\");
      }
    }
  }
  return currentUser;
}

export function login(email: string, displayName: string, role: UserRole): User {
  const user: User = {
    id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    email,
    displayName: displayName || email.split(\"@\")[0],
    role,
    createdAt: Date.now(),
  };
  currentUser = user;
  if (typeof window !== \"undefined\") {
    localStorage.setItem(\"zyvrra_user\", JSON.stringify(user));
    localStorage.setItem(\"zyvrra_role\", role);
  }
  return user;
}

export function getCurrentUser(): User | null {
  return initializeUser();
}

export function isAuthenticated(): boolean {
  return initializeUser() !== null;
}

export function getUserRole(): UserRole | null {
  const user = initializeUser();
  return user?.role || null;
}

export function logout() {
  currentUser = null;
  if (typeof window !== \"undefined\") {
    localStorage.removeItem(\"zyvrra_user\");
    localStorage.removeItem(\"zyvrra_role\");
  }
}
