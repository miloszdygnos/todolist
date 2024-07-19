interface Todo {
    title: string,
    text: string,
    id: string,
    isActive: boolean
    isComplete: boolean
  }

interface TodosProps {
    todos: Todo[];
    deleteTodo: (id: string) => void;
    active: { todoActive: boolean; setTodoActive: React.Dispatch<React.SetStateAction<boolean>> };
    toggleTodoActive: (id: string) => void;
    editTodo: (id: string) => void;
    handleComplete: (id: string) => void;
  }
export  type {Todo, TodosProps};