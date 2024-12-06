"use client";
import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import NavBar from "../components/shared/NavBar";
import LeftToolBar from "../components/shared/LeftToolBar";
import { Droppable } from "../components/shared/dnd/Droppable";

interface DroppedItem {
  id: string;
  type: string;
}

export default function Page() {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    console.log("Drag ended:", { active: active?.id, over: over?.id });

    if (over && over.id === 'droppable') {
      console.log("Item dropped in droppable:", active.id);
      setDroppedItems((prev) => [
        ...prev,
        { id: active.id as string, type: String(active.id) }
      ]);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-1 bg-[#ecedef]">
          <LeftToolBar />
          <div className="flex-1 p-5 bg-[#ecedef] overflow-auto">
            <Droppable id="droppable">
              {droppedItems.length > 0 ? (
                droppedItems.map((item, index) => (
                  <div key={index} className="border border-gray-300 p-4 shadow-md bg-white">
                    {item.type === "card" && <p>New Card Dropped</p>}
                    {item.type === "notes" && <p>New Notes Dropped</p>}
                  </div>
                ))
              ) : (
                "Drop here"
              )}
            </Droppable>
          </div>
        </div>
      </div>
    </DndContext>
  );
}
