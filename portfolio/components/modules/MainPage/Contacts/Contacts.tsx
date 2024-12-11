import styles from "../../../../styles/contacts/index.module.scss";
import BlockTitle from "../../../elements/BlockTitle/BlockTitle";

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <BlockTitle text={"contacts"}/>
            <div className={`container ${styles.contacts__container}`}>
                <div className={styles.description}>
                    <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me</p>
                </div>
                <div className={styles.message}>
                    <span>Message me here</span>
                    <div className={styles.contactGithub}>
                        <img src="../../../public/img/Github.svg" alt=""/>
                        <p>NikitaVlas</p>
                    </div>

                    <img src="../../../public/img/Linkedin.svg" alt=""/>
                    <img src="../../../public/img/Email.svg" alt=""/>
                    <img src="../../../public/img/Telegram.svg" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Contacts;