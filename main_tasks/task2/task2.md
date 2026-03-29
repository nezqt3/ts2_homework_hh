# Задание 2: Система уведомлений ⭐⭐

## Легенда

Вы описываете типы для системы уведомлений — разные виды, обработка, рендер.

### Что нужно сделать

Виды уведомлений — создайте discriminated union Notification из трёх типов (success, error, warning). Дискриминант — поле type. Каждый тип имеет свои уникальные поля:

success: message, duration

error: message, retry (boolean), errorCode

warning: message

Конфиг — создайте объект-маппинг: для каждого типа уведомления — иконка и цвет. Используйте mapped type, as const или
satisfies — на выбор

Exhaustiveness — напишите функцию renderNotification, которая обрабатывает все типы уведомлений через switch. При добавлении нового типа в union компилятор должен показать ошибку

Type Guard — напишите функцию-предикат isErrorNotification, которая сужает тип Notification до ErrorNotification

Utility types — создайте:

NotificationPreview — только type и message из Notification

NotificationWithoutMeta — ErrorNotification без errorCode

Intersection — создайте тип TrackedNotification, который добавляет к Notification метаданные: id, дата создания, дата прочтения (опциональная)

### Функции (3 штуки):

renderNotification(n: Notification): string

isErrorNotification(n: Notification): n is ErrorNotification

getUnread(notifications: TrackedNotification[]): TrackedNotification[]

## Критерии приёмки

При добавлении InfoNotification в union — компилятор ругается в renderNotification

isErrorNotification корректно сужает тип — после проверки доступны retry и errorCode

NOTIFICATION_CONFIG сохраняет literal types ("#4caf50", не string)

getUnread возвращает только уведомления без readAt
