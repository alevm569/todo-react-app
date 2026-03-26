import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { TaskProvider, useTaskContext } from "./context/TaskContext";
import { lazy, Suspense } from "react";

const TaskForm = lazy(() => import("./components/TaskForm"));
const FilterButtons = lazy(() => import("./components/FilterButtons"));

function AppContent() {
  const { tasks, addTask, toggleTask, deleteTask, setFilter } =
    useTaskContext();

  return (
    <div className="container">
      <Header />

      <div className="card">
        <Suspense fallback={<p>Cargando...</p>}>
          <TaskForm addTask={addTask} />
          <FilterButtons setFilter={setFilter} />
        </Suspense>

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}