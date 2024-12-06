"use client";

import React from "react";
import { MdNotes } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { useDraggable } from "@dnd-kit/core";

import { Separator } from "@/components/ui/separator";

interface DraggableItemProps {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  id,
  icon: Icon,
  label,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="flex flex-col justify-center items-center border border-black p-2 cursor-pointer bg-white"
    >
      <Icon className="mb-1" size={30} />
      <span>{label}</span>
    </div>
  );
};

const LeftToolBar: React.FC = () => {
  return (
    <div className="flex">
      {/* Toolbar Container */}
      <div className="w-[70px] p-3 bg-[#ecedef] flex flex-col justify-start items-center gap-3">
        <DraggableItem id="card" icon={CgNotes} label="Card" />
        <DraggableItem id="notes" icon={MdNotes} label="Notes" />
      </div>

      {/* Vertical Separator */}
      <Separator
        orientation="vertical"
        className="w-[1px] bg-gray-300 h-screen"
      />
    </div>
  );
};

export default LeftToolBar;
