# Задание 3: Типизированный API-клиент ⭐⭐⭐

## Легенда

Вы описываете типобезопасную обёртку для работы с REST API списка задач (todo).

### Что нужно сделать

Модели — опишите через interface:

Todo — id, title, completed, priority, createdAt

User — id, name, email

Branded types — создайте типы TodoId и UserId так, чтобы нельзя было случайно передать один вместо другого, хотя оба основаны на number

API-ответ — создайте generic discriminated union ApiResult<T> с двумя вариантами: успех (с данными типа T) и ошибка (с сообщением)

Exhaustiveness — напишите generic-функцию handleResult, которая обрабатывает все варианты ApiResult через switch. При добавлении нового статуса компилятор должен показать ошибку

Приоритеты — создайте массив приоритетов (low, medium, high, critical) с помощью as const и выведите из него тип Priority

Маппинг приоритетов — создайте объект-маппинг приоритетов на цвета. Используйте mapped type, as const или satisfies — на выбор. Забытый приоритет должен вызывать ошибку компиляции

### Utility types — создайте:

TodoPreview — только id, title, completed из Todo

TodoCreate — Todo без id и createdAt

ReadonlyTodo — все поля Todo readonly

### Generic-функция:

apiRequest<T>(url: string): ApiResult<T>

Overload — функция getTodos с двумя перегрузками:

getTodos(): ApiResult<TodoPreview[]>

getTodos(id: TodoId): ApiResult<Todo>

## Критерии приёмки

TodoId нельзя передать туда, где ожидается UserId

handleResult при новом status в union — ошибка компиляции

PRIORITY_COLORS — забытый приоритет = ошибка компиляции

PRIORITIES[0] имеет тип "low", не string

getTodos() и getTodos(todoId) возвращают разные типы