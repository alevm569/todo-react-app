import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import { test, expect, vi } from "vitest";

test("agrega una tarea con título y descripción", () => {
  const mockAdd = vi.fn();

  render(<TaskForm addTask={mockAdd} />);

  const titleInput = screen.getByPlaceholderText("Título");
  const descInput = screen.getByPlaceholderText("Descripción");

  fireEvent.change(titleInput, {
    target: { value: "Test tarea" },
  });

  fireEvent.change(descInput, {
    target: { value: "Descripción test" },
  });

  fireEvent.click(screen.getByText("Agregar"));

  expect(mockAdd).toHaveBeenCalledWith(
    "Test tarea",
    "Descripción test"
  );
});

test("elimina una tarea", () => {
  const mockDelete = vi.fn();

  const task = {
    id: 1,
    title: "Test tarea",
    description: "desc",
    completed: false,
  };

  render(
    <TaskItem
      task={task}
      toggleTask={() => {}}
      deleteTask={mockDelete}
    />
  );

  const deleteButton = screen.getByLabelText("delete");

  fireEvent.click(deleteButton);

  expect(mockDelete).toHaveBeenCalledWith(1);
});