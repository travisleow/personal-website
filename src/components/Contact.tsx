import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import { sendEmail } from "@/utils/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="text-center mb-20 scroll-mt-28 w-[min(100%,38rem)] sm:mb-28"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Contact me directly at{" "}
                <a className="underline" href="mailto:travis05leow@gmail.com">
                    travis05leow@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                    }

                    toast.success("Message sent successfully!");
                }}
                className="flex flex-col mt-10 dark:text-black/80"
            >
                <input
                    type="email"
                    name="senderEmail"
                    className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder="Your Email"
                    required
                    maxLength={500}
                />
                <textarea
                    name="message"
                    className="h-52 my-3 rounded-lg border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder="Your Message"
                    required
                    maxLength={500}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}

export default Contact;
