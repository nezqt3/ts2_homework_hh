import type { ApiResult, Todo, TodoId, TodoPreview } from "./models";

export const handleResult = <T>(result: ApiResult<T>): string => {
  switch (result.status) {
    case "error":
      return "Error";
    case "success":
      return "Success";
    default:
      const _exhaustiveCheck: never = result;
      return _exhaustiveCheck;
  }
};

export const apiRequest = async <T>(url: string): Promise<ApiResult<T>> => {
  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      return {
        status: "error",
        error: `HTTP ${response.status}`,
      };
    }

    const data: T = (await response.json()) as T;

    return {
      status: "success",
      data,
    };
  } catch (error: unknown) {
    return {
      status: "error",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export function getTodos(): ApiResult<TodoPreview[]>;
export function getTodos(id: TodoId): ApiResult<Todo>;
export function getTodos(id?: TodoId): ApiResult<TodoPreview[] | Todo> {
  if (id === undefined) {
    const todoPreview: TodoPreview[] = [
      { id: 1 as TodoId, title: "api_connect", completed: true },
    ];
    return { status: "success", data: todoPreview };
  } else {
    const todo: Todo = {
      id: id,
      title: "api_connect",
      completed: true,
      priority: "low",
      createdAt: new Date(),
    };
    return { status: "success", data: todo };
  }
}
