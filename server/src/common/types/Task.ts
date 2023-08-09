type Subtask = {
  id: string;
  title: string;
  completed: boolean;
  parent: string;
  subtasks: null;
};

type Task = {
  id: string;
  title: string;
  completed: boolean;
  parent: string | null;
  subtasks: Subtask[] | null;
};

export default Task;
