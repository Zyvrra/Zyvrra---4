export type UserRole = "buyer" | "seller" | "creator";

export function getUserRole(): UserRole | null {
  if (typeof window === "undefined") return null;

  const role = localStorage.getItem("zyvrra_role") as UserRole | null;

  return role;
}

export function isAuthenticated(): boolean {
  return getUserRole() !== null;
}

export function requireRole(role: UserRole): boolean {
  if (typeof window === "undefined") return false;

  const userRole = getUserRole();

  return userRole === role;
}

export function logout() {
  if (typeof window === "undefined") return;

  localStorage.removeItem("zyvrra_role");
}
