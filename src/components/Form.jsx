import Button from "./Button";
function Form(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.querySelector(
          'input[placeholder="Title"]'
        ).value;
        const content = e.target.querySelector(
          'input[placeholder="Content"]'
        ).value;
        props.onSubmit({
          title,
          content,
        });
      }}
    >
      <input type="text" placeholder="Title" id="title" />
      <input type="text" placeholder="Content" id="content" />
      <Button submit={true}>Add</Button>
      <Button submit={true} onClick={props.onClick}>Cancel</Button>
    </form>
  );
}
export default Form;
