import Button from "./Button";
function Form(props){
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const titleValue = e.target.querySelector('input[placeholder="Title"]').value;
            const contentValue = e.target.querySelector('input[placeholder="Content"]').value;
            props.onSubmit(titleValue, contentValue)
        }}>
            <input type="text" placeholder='Title' />
            <input type="text" placeholder='Content' />
            <Button submit={true}>Add</Button>
        </form>
    )
}
export default Form;