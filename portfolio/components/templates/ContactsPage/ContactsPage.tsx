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
            <ContactMessage>
                <div className="contactMethod">
                    <img src="../../../public/img/Github.svg" alt=""/>
                    <a>NikitaVlas</a>
                </div>
                <div className="contactMethod">
                    <img src="../../../public/img/Linkedin.svg" alt=""/>
                    <a>nikita-vlasov</a>
                </div>
                <div className="contactMethod">
                    <img src="../../../public/img/Email.svg" alt=""/>
                    <a>nikistosov@gmail.com</a>
                </div>
                <div className="contactMethod">
                    <img src="../../../public/img/Telegram.svg" alt=""/>
                    <a>@sibjpeg</a>
                </div>
            </ContactMessage>
        </div>
    );
};

export const FormStyled = styled.form`
    input {
        color: ${theme.colors.primary};
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
        color: ${theme.colors.primary};
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

export const ContactMessage = styled.div `
    display: flex;

    a {
        color: ${theme.colors.secondary};
        margin-left: 5px;
    }
    
    .contactMethod {
        display: flex;
        align-items: center;
        margin-right: 26px;
    }

`

export default ContactsPage;