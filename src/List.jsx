import React, { useState } from "react";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const List = (props) => {
  const [line, setLine] = useState(false);
  const lineThrough = () => {
    setLine(true);
  };
  return (
    <>
      <div className="todo_style">
        <span onClick={lineThrough}>
          <Button>
            <DownloadDoneRoundedIcon />
          </Button>
        </span>
        <Button
          className="btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <DeleteOutlineIcon className="btn" />
        </Button>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
    </>
  );
};
export default List;
