import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setIsClicked(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {
          <input
            name="title"
            onChange={handleChange}
            onClick={handleClick}
            value={note.title}
            placeholder={isClicked ? "Title" : "Take a note..."}
          />
        }

        {isClicked && (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
        )}

        <Zoom in={isClicked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
