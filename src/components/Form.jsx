import { useState } from "react";
import Button from "./Button";

function Form(props) {
  let [title, setTitle] = useState();
  let [content, setContent] = useState();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit({
          title,
          content,
        });
      }}
    >
      <input onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Title" id="title" />
      <input onChange={(e)=>{setContent(e.target.value)}} type="text" placeholder="Content" id="content" />
      <Button submit={true}>Add</Button>
      <Button submit={true} onClick={props.onClick}>Cancel</Button>
    </form>
  );
}
export default Form;
