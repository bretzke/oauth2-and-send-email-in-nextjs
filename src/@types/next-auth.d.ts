import type { DefaultUser, Account, DefaultJWT } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: CustomUser;
	}
}

export interface CustomUser extends DefaultUser {
	id: string;
	name: string;
	email: string;
	image?: string;
}

export interface CustomJWT extends DefaultJWT {
	id: string;
	email: string;
	name: string;
	image?: string;
}

export interface CustomAccount extends Account {
	provider: "google" | "credentials";
}
