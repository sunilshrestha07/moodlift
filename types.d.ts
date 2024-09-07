import NextAuth from "next-auth"
type svgProp = {
    class?: string;
    strokeColor?: string;
    strokeWidth?: string;
    bgColor?: string;
};



declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}