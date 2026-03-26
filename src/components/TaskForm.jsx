import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
      />

      <button type="submit">Agregar</button>
    </form>
  );
}