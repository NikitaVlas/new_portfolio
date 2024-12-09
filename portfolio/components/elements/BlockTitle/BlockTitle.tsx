import styles from "../../../styles/block-title/index.module.scss"

type BlockTitleProps = {
    text: string
}
const BlockTitle = ({text}: BlockTitleProps) => {
    return (
        <div className={styles.blockTitle}>
            <h1 className={styles.title}><span className={styles.span}>#</span>{text}</h1>
            <img src="../../../public/img/Line.svg" alt=""/>
        </div>
    );
};

export default BlockTitle;