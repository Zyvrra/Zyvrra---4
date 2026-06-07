export type UserRole = "buyer" | "seller" | "creator";

export type User = {
  id: string;
  email: string;
  role: UserRole;
};

let currentUser: User | null = null;

/**
 * LOGIN USER (MVP)
 */
export function login(email: string, role: UserRole): User {
  const user: User = {
    id: `user_${email.replace(/[^a-zA-Z0-9]/g, "")}`,
    email,
    role,
  };

  currentUser = user;

  if (typeof window !== "undefined") {
    localStorage.setItem("zyvrra_user", JSON.stringify(user));
  }

  return user;
}

/**
 * GET CURRENT USER
 */
export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return currentUser;

  const stored = localStorage.getItem("zyvrra_user");

  if (!stored) return null;

  currentUser = JSON.parse(stored);
  return currentUser;
}

/**
 * LOGOUT
 */
export function logout() {
  currentUser = null;

  if (typeof window !== "undefined") {
    localStorage.removeItem("zyvrra_user");
  }
}
