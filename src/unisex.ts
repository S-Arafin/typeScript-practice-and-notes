// union & intersection
type UserRole = "admin" | "user" | "guest";

interface User {
  id: number;
  name: string;
  role: UserRole;
  logins: number;
}

interface AdminUser {
  permissions: string[];
}

// intersection type
type SuperAdminUser = User & AdminUser;

const getDashboard = (user: User | SuperAdminUser) => {
  switch (user.role) {
    case "admin":
      if ("permissions" in user) {
        return {
          dashboard: "super admin dashboard",
          permissions: (user as SuperAdminUser).permissions,
          logins: user.logins,
        };
      }
      return {
        dashboard: "admin dashboard",
        logins: user.logins,
      };
    case "user":
      return {
        dashboard: "user dashboard",
        logins: user.logins,
      };
    case "guest":
      return {
        dashboard: "guest dashboard",
        readOnly: true,
      };
    default:
      // This should be unreachable if the type system is used correctly
      const exhaustiveCheck: never = user.role;
      return exhaustiveCheck;
  }
};

const admin: SuperAdminUser = {
  id: 1,
  name: "Admin User",
  role: "admin",
  permissions: ["create", "read", "update", "delete"],
  logins: 5,
};

const regularUser: User = {
  id: 2,
  name: "Regular User",
  role: "user",
  logins: 2,
};

const guestUser: User = {
    id: 3,
    name: "Guest User",
    role: "guest",
    logins: 1,
};

console.log(getDashboard(admin));
console.log(getDashboard(regularUser));
console.log(getDashboard(guestUser));