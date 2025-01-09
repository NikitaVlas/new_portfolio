import BlockTitle from "../../elements/BlockTitle/BlockTitle.tsx";

const ContactsPage = () => {
    return (
        <div>
            <BlockTitle text={"contacts"}/>
            <form action="">
                <input type="text"/>
                <input type="email"/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
            <BlockTitle text={"all-media"}/>
        </div>
    );
};

export default ContactsPage;