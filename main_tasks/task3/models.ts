export type TodoId = number & { readonly __brand: "Todo" };
export type UserId = number & { readonly __brand: "User" };

export interface Todo {
  id: TodoId;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
}

export type TodoPreview = Pick<Todo, "id" | "title" | "completed">;
export type TodoCreate = Omit<Todo, "id" | "createdAt">;
export type ReadonlyTodo = Readonly<Todo>;

export interface User {
  id: UserId;
  name: string;
  email: string;
}

export type SuccessResult<T> = {
  status: "success";
  data: T;
};

export type ErrorResult = {
  status: "error";
  error: string;
};

export type ApiResult<T> = SuccessResult<T> | ErrorResult;

export const PRIORITIES = ["low", "medium", "high", "critical"] as const;

export type Priority = (typeof PRIORITIES)[number];

export type MappingPriority = {
  [K in Priority]: string;
};

export const PRIORITY_COLORS = {
  low: "green",
  medium: "yellow",
  high: "red",
  critical: "blue",
} satisfies MappingPriority;
