import type { Notification, TrackedNotification } from "./models";
import { NOTIFICATION_CONFIG } from "./models";
import {
  getUnread,
  isErrorNotification,
  renderNotification,
} from "./functions";

/**
 * При добавлении InfoNotification в union — компилятор ругается в renderNotification
 *
 * Этот тест начнет работать, если в Notification добавить:
 * | { type: "info"; message: string; source: string }
 *
 * и не добавить case "info" в renderNotification
 */

// @ts-expect-error renderNotification must be exhaustive after adding InfoNotification
const exhaustiveCheck = renderNotification({
  type: "info",
  message: "Information",
  source: "system",
} as Notification);

console.log(exhaustiveCheck);

/**
 * isErrorNotification корректно сужает тип —
 * после проверки доступны retry и errorCode
 */

const errorNotification: Notification = {
  type: "error",
  message: "Access denied",
  retry: true,
  errorCode: 403,
};

if (isErrorNotification(errorNotification)) {
  const retryCheck: boolean = errorNotification.retry;
  const errorCodeCheck: number = errorNotification.errorCode;

  console.log(retryCheck, errorCodeCheck);
}

/**
 * NOTIFICATION_CONFIG сохраняет literal types ("#4caf50", не string)
 */

const successColorLiteral: "#4caf50" = NOTIFICATION_CONFIG.success.color;
const errorColorLiteral: "#f44336" = NOTIFICATION_CONFIG.error.color;
const warningColorLiteral: "#ff9800" = NOTIFICATION_CONFIG.warning.color;

// @ts-expect-error literal type expected, not another string
const wrongLiteral: "#000000" = NOTIFICATION_CONFIG.success.color;

console.log(
  successColorLiteral,
  errorColorLiteral,
  warningColorLiteral,
  wrongLiteral,
);

/**
 * getUnread возвращает только уведомления без readAt
 */

const notifications: TrackedNotification[] = [
  {
    id: 1,
    createdAt: new Date(),
    type: "success",
    message: "Saved",
    duration: 3000,
  },
  {
    id: 2,
    createdAt: new Date(),
    readAt: new Date(),
    type: "error",
    message: "Forbidden",
    retry: true,
    errorCode: 403,
  },
  {
    id: 3,
    createdAt: new Date(),
    type: "warning",
    message: "Low battery",
  },
];

const unread: TrackedNotification[] = getUnread(notifications);

unread.forEach((notification) => {
  if (notification.readAt !== undefined) {
    throw new Error("Expected only unread notifications");
  }

  console.log(notification.id, notification.readAt);
});
