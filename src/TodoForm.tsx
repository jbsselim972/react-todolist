import React, { useState } from "react";

interface TodoFormProps {
  onSubmit: (newItem: string) => void;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
