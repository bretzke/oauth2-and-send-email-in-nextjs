"use server";
import { encryptPassword } from "@/lib/bcrypt";
import { sendEmail } from "@/lib/nodemailer";
import { prisma } from "@/lib/prisma";
import WelcomeEmail from "@/lib/react-email/transactional/emails/WelcomeEmail";

export interface RegisterUserData {
	name: string;
	email: string;
	password: string;
}

export async function registerNewUser({
	name,
	email,
	password,
}: RegisterUserData) {
	const userExists = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	if (userExists) {
		throw new Error("User already exists!");
	}
	const hashedPassword = await encryptPassword(password);

	await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});

	const html = WelcomeEmail({ userFirstname: name.split(" ")[0] });
	await sendEmail(email, "Welcome!", html);
}
