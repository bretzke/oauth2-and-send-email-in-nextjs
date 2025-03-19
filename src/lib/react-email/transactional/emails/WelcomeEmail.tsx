import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Preview,
	Section,
	Heading,
	Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
	userFirstname: string;
}

const Logo = () => <Heading style={logoStyle}>{"<Bretzke>"}</Heading>;

export const WelcomeEmail = ({ userFirstname }: WelcomeEmailProps) => (
	<Html>
		<Head />
		<Body style={main}>
			<Preview>Welcome to bretzke.dev!</Preview>
			<Container style={container}>
				<Logo />
				<Text style={paragraph}>Hi {userFirstname},</Text>
				<Text style={paragraph}>
					Welcome to bretzke.dev! Here, you’ll find my projects, experience, and
					everything that drives me as a developer.
				</Text>
				<Section style={btnContainer}>
					<Button style={button} href="https://bretzke.dev">
						Check it out!
					</Button>
				</Section>
				<Text style={paragraph}>
					Best regards,
					<br />
					The <b>bretzke.dev</b> team.
				</Text>
				<Hr style={hr} />
				<Text style={footer}>{"{Something in the footer}"}</Text>
			</Container>
		</Body>
	</Html>
);

WelcomeEmail.PreviewProps = {
	userFirstname: "Alan",
} as WelcomeEmailProps;

export default WelcomeEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
};

const btnContainer = {
	textAlign: "center" as const,
};

const button = {
	backgroundColor: "#292524",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "16px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	padding: "12px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#8898aa",
	fontSize: "12px",
};

const logoStyle = {
	textAlign: "center" as const,
	fontSize: "2em",
	fontWeight: "bold",
};
