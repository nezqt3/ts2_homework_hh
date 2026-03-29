import type {
  ApiResult,
  Todo,
  TodoId,
  TodoPreview,
  UserId,
  Priority,
} from "./models";
import { PRIORITIES, PRIORITY_COLORS } from "./models";
import { getTodos, handleResult } from "./functions";

/**
 * TodoId нельзя передать туда, где ожидается UserId
 */

// @ts-expect-error: TodoId must not be assignable to UserId
const wrongUserId: UserId = 1 as TodoId;

console.log(wrongUserId);

/**
 * handleResult должен быть exhaustive.
 *
 * Этот тест начнет работать, если в ApiResult<T> добавить новый вариант, например:
 * | { status: "loading" }
 *
 * и не добавить case "loading" в handleResult
 */

// @ts-expect-error: handleResult must be exhaustive after adding new status
const exhaustiveCheck = handleResult({
  status: "loading",
} as ApiResult<string>);

console.log(exhaustiveCheck);

/**
 * PRIORITY_COLORS должен содержать все приоритеты.
 * Если забыть один ключ, должна быть ошибка компиляции.
 */

// @ts-expect-error: missing "critical"
const incompletePriorityColors: Record<Priority, string> = {
  low: "green",
  medium: "yellow",
  high: "red",
};

console.log(incompletePriorityColors);

/**
 * PRIORITIES[0] имеет literal type "low", а не string
 */

const firstPriorityLiteral: "low" = PRIORITIES[0];

// @ts-expect-error: PRIORITIES[0] is "low", not "medium"
const wrongPriorityLiteral: "medium" = PRIORITIES[0];

console.log(firstPriorityLiteral, wrongPriorityLiteral);

/**
 * PRIORITY_COLORS сохраняет корректные ключи и значения доступны по Priority
 */

const lowColor: string = PRIORITY_COLORS.low;
const mediumColor: string = PRIORITY_COLORS.medium;
const highColor: string = PRIORITY_COLORS.high;
const criticalColor: string = PRIORITY_COLORS.critical;

console.log(lowColor, mediumColor, highColor, criticalColor);

/**
 * getTodos() и getTodos(todoId) возвращают разные типы
 */

const todoId = 1 as TodoId;

const todosResult = getTodos();
const todoResult = getTodos(todoId);

const todosCheck: ApiResult<TodoPreview[]> = todosResult;
const todoCheck: ApiResult<Todo> = todoResult;

// @ts-expect-error: getTodos() returns ApiResult<TodoPreview[]>, not ApiResult<Todo>
const wrongTodosCheck: ApiResult<Todo> = getTodos();

// @ts-expect-error: getTodos(todoId) returns ApiResult<Todo>, not ApiResult<TodoPreview[]>
const wrongTodoCheck: ApiResult<TodoPreview[]> = getTodos(todoId);

console.log(todosCheck, todoCheck, wrongTodosCheck, wrongTodoCheck);

/**
 * handleResult принимает оба варианта ApiResult
 */

const successResult: ApiResult<Todo> = {
  status: "success",
  data: {
    id: 1 as TodoId,
    title: "api_connect",
    completed: true,
    priority: "low",
    createdAt: new Date(),
  },
};

const errorResult: ApiResult<Todo> = {
  status: "error",
  error: "HTTP 403",
};

const successMessage: string = handleResult(successResult);
const errorMessage: string = handleResult(errorResult);

console.log(successMessage, errorMessage);
