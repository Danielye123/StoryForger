/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  children: React.ReactNode;
}

export function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style: React.CSSProperties = {
    border: "2px dashed gray",
    padding: "20px",
    backgroundColor: isOver ? "#daf5da" : "white",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
