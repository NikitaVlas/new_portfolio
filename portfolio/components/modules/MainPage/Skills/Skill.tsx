

type SKillProps = {
    skill: string
    title: string
}

const Skill = ({skill, title}: SKillProps) => {
    return (
        <div >
            <h3>{title}</h3>
            <p>{skill}</p>
        </div>
    );
};

export default Skill;