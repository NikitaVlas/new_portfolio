import BlockTitle from "../../elements/BlockTitle/BlockTitle.tsx";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";
import Button from "../../elements/Button/Button.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";

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
            <FormStyled ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder={"name"} name={"name"} required/>
                <input type="email" placeholder={"email"} name={"email"} required/>
                <input type="text" placeholder={"subject"} name={"subject"} required/>
                <textarea name={"message"} placeholder={"message"} id="" cols="30" rows="10" required></textarea>
                <Button title="Send"/>
            </FormStyled>
            <BlockTitle text={"all-media"} span={"#"} img={false}/>
            <div>

            </div>
        </div>
    );
};

export const FormStyled = styled.form `
    input {
        background-color: ${theme.colors.backgroundColorPrimary};
        border: 1px solid ${theme.colors.secondary};
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
    }

    textarea {
        background-color: ${theme.colors.backgroundColorPrimary};
        border: 1px solid ${theme.colors.secondary};
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
        resize: none;
    }

    input:focus, textarea:focus {
        border-color: ${theme.hoverColor.hover};
        outline: none;
        box-shadow: 0 0 3px  ${theme.hoverColor.hover};
    }

    input:hover, textarea:hover {
        border-color:${theme.hoverColor.noHover};
    }

    input:focus, textarea:focus {
        border-color:${theme.hoverColor.noHover};
        background-color: ${theme.colors.backgroundColorSecondary};
        transition: all 0.3s ease;
    }

    input, textarea {
        transition: border-color 0.3s, box-shadow 0.3s;
    }
`

export default ContactsPage;