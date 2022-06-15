import { createContext } from "react";
import { TaskState } from "../interfaces/interfaces";

export type TaskContextProps = {
    taskState: TaskState,
    toggleTaskState: (id: string) => void
}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)