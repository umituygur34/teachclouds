export { auth as middleware } from "@/auth";

export const config = {
  matchers: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
