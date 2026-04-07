# 📝 ToDo App en React

## Descripción
Aplicación de lista de tareas desarrollada con React.

Permite:
- Agregar tareas con título y descripción
- Marcar tareas como completadas
- Eliminar tareas
- Filtrar tareas (todas, completadas, pendientes)
- Persistencia con localStorage

## Tecnologías usadas
- React
- Context API
- Custom Hooks
- React Lazy & Suspense
- Vitest + Testing Library

## Estructura del Proyecto

```
src/
├── components/          # Componentes de React
│   ├── FilterButtons.jsx    # Botones de filtrado
│   ├── Header.jsx           # Encabezado de la app
│   ├── TaskForm.jsx         # Formulario para agregar tareas
│   ├── TaskItem.jsx         # Componente individual de tarea
│   └── TaskList.jsx         # Lista de tareas
├── context/             # Context API
│   └── TaskContext.jsx      # Contexto global de tareas
├── hooks/               # Custom hooks
│   └── useTasks.js          # Hook para manejar lógica de tareas
├── test/                # Tests
│   ├── Task.test.jsx
│   ├── TaskItem.test.jsx
│   └── useTask.test.jsx
├── App.jsx              # Componente main
├── App.css              # Estilos principales
├── main.jsx             
└── index.css            # Estilos globales
```

## Ejecutar proyecto

```bash
npm install
npm run dev
```

## Ejecutar tests

```bash
npm run test
```

## Enlace github
https://github.com/alevm569/todo-react-app