import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import type { CustomAccount, CustomUser } from "@/@types/next-auth";

interface SignInParams {
	user: CustomUser;
	account: CustomAccount;
}

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const user = await prisma.user.findFirst({
					where: {
						email: credentials?.email,
					},
				});

				if (!user) {
					throw new Error("Invalid login credentials");
				}

				const isValidPassword = bcrypt.compare(
					credentials?.password as string,
					user.password,
				);

				if (!isValidPassword) {
					throw new Error("Invalid login credentials");
				}

				return {
					id: String(user.id),
					name: user.name,
					email: user.email,
					image: user.avatar_url,
				};
			},
		}),
	],
	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24, // 1 day
	},
	callbacks: {
		async signIn({ user, account }: SignInParams) {
			if (account.provider === "google") {
				const existingUser = await prisma.user.findFirst({
					where: { email: user.email },
				});

				if (!existingUser) {
					await prisma.user.create({
						data: {
							name: user.name,
							email: user.email,
							avatar_url: user.image,
							password: "",
							is_active: true,
						},
					});
				}
			}

			return true;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
