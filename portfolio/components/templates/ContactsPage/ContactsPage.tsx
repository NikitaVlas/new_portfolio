import BlockTitle from "../../elements/BlockTitle/BlockTitle.tsx";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";

const ContactsPage = () => {
    const form = useRef<ElementRef<"form">>(null);

    const serviceId = import.meta.env.VITE_APP_SERVICE_ID!;
    const templateId = import.meta.env.VITE_APP_TEMPLATE_ID!;
    const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY!;

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <div>
            <BlockTitle text={"contacts"} span={"/"} img={false}/>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder={"name"} name={"name"} required/>
                <input type="email" placeholder={"email"} name={"email"} required/>
                <input type="text" placeholder={"subject"} name={"subject"} required/>
                <textarea name={"message"} id="" cols="30" rows="10" required></textarea>
                <input type="submit" value="Send"/>
            </form>
            <BlockTitle text={"all-media"} span={"#"} img={false}/>
        </div>
    );
};

export default ContactsPage;