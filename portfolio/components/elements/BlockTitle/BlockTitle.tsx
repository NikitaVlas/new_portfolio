

type BlockTitleProps = {
    text: string
}
const BlockTitle = ({text}: BlockTitleProps) => {
    return (
        <div >
            <h1 ><span >#</span>{text}</h1>
            <img src="../../../public/img/Line.svg" alt=""/>
        </div>
    );
};

export default BlockTitle;