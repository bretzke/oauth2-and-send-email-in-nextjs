import { createTransport } from "nodemailer";
import { render } from "@react-email/render";
import type { ReactElement } from "react";

export const sendEmail = async (
	to: string,
	subject: string,
	html: ReactElement,
	text?: string,
): Promise<void> => {
	const transporter = createTransport({
		host: process.env.EMAIL_SERVER_HOST,
		port: Number(process.env.EMAIL_SERVER_PORT),
		secure: true,
		auth: {
			user: process.env.EMAIL_SERVER_FROM_ADDRESS,
			pass: process.env.EMAIL_SERVER_PASSWORD,
		},
	});

	const jsxToHtml = await getHtml(html);

	const response = await transporter.sendMail({
		from: {
			address: process.env.EMAIL_SERVER_FROM_ADDRESS || "",
			name: process.env.EMAIL_SERVER_FROM_NAME || "",
		},
		to,
		subject,
		html: jsxToHtml,
		text,
	});

	const failed = response.rejected.concat(response.pending).filter(Boolean);

	if (failed.length) {
		throw new Error(`Email(s) (${failed.join(", ")}) could not be sent.`);
	}
};

const getHtml = async (element: ReactElement): Promise<string> => {
	const html = await render(element);
	return html;
};
