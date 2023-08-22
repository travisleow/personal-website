import React from "react";
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Message from portfolio site weeeee</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white border-black/5 my-10 px-10 py-4 rounded-md">
                            <Heading className="leading">
                                Message from portfolio site wow
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>Sender&apos;s email: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export default ContactFormEmail;
