export interface User {
  username: string;
  password: string;
}

export const users: User[] = [
  { username: "john", password: "1234" },
  { username: "jane", password: "abcd" },
];

export const TOKEN_KEY = "mock-token";

// Simulate API login
export function login(username: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        localStorage.setItem(TOKEN_KEY, "mock-token");
        resolve("mock-token");
      } else {
        reject("Invalid credentials");
      }
    }, 500);
  });
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem(TOKEN_KEY);
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
}
