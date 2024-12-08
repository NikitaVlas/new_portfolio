import styles from "../../../../styles/main-page/index.module.scss"

const Quote = () => {
    return (
        <section className={styles.quote}>
            <div className={`container ${styles.quote__container}`}>
                <div>
                    With great power comes great electricity bill
                </div>
            </div>
        </section>
    );
};

export default Quote;