import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../components/TaskItem";
import { test, expect, vi } from "vitest";

test("marca una tarea como completada", () => {
  const mockToggle = vi.fn();

  const task = {
    id: 1,
    title: "Test tarea",
    description: "desc",
    completed: false,
  };

  render(
    <TaskItem
      task={task}
      toggleTask={mockToggle}
      deleteTask={() => {}}
    />
  );

  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(mockToggle).toHaveBeenCalledWith(1);
});