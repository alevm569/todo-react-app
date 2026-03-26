import { renderHook, act } from "@testing-library/react";
import { useTasks } from "../hooks/useTasks";
import { test, expect } from "vitest";

test("filtra tareas completadas", () => {
  const { result } = renderHook(() => useTasks());

  act(() => {
    result.current.addTask("Tarea 1", "desc");
    result.current.addTask("Tarea 2", "desc");
  });

  const id = result.current.tasks[0].id;

  act(() => {
    result.current.toggleTask(id);
    result.current.setFilter("completed");
  });

  expect(result.current.tasks.length).toBe(1);
});