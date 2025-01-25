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
                    <a href="https://github.com/NikitaVlas"><img src="../../../public/img/Github.svg"
                                                                 alt=""/></a>
                    <a href="https://github.com/NikitaVlas">NikitaVlas</a>
                </div>
                <div className="contactMethod">
                    <a href="https://www.linkedin.com/in/nikita-vlasov-13ba3b1ab/"><img
                        src="../../../public/img/Linkedin.svg" alt=""/></a>
                    <a href="https://www.linkedin.com/in/nikita-vlasov-13ba3b1ab/">nikita-vlasov</a>
                </div>
                <div className="contactMethod">
                    <a href={"mailto:nikistosov@gmail.com"}><img src="../../../public/img/Email.svg" alt=""/></a>
                    <a href={"mailto:nikistosov@gmail.com"}>nikistosov@gmail.com</a>
                </div>
                <div className="contactMethod"><a href={"https://t.me/sibjpeg"} target="_blank"
                                                  rel="noopener noreferrer"><img
                    src="../../../public/img/Telegram.svg" alt=""/></a>
                    <a href={"https://t.me/sibjpeg"} target="_blank" rel="noopener noreferrer">@sibjpeg</a>
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