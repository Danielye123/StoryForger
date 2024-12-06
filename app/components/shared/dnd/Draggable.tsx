/* eslint-disable prettier/prettier */
// Draggable.jsx
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    border: "1px solid gray",
    padding: "8px",
    backgroundColor: "white",
    cursor: "grab",
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}
