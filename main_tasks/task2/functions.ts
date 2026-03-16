import type { Notification, TrackedNotification } from "./models";

export const renderNotification = (notification: Notification): string => {
  switch (notification.type) {
    case "success":
      return `Success: ${notification.message}`;
    case "error":
      return `Error ${notification.errorCode}: ${notification.message}`;
    case "warning":
      return `Warning: ${notification.message}`;
    default: {
      const _exhaustiveCheck: never = notification;
      return _exhaustiveCheck;
    }
  }
};

export const isErrorNotification = (
  notification: Notification,
): notification is Extract<Notification, { type: "error" }> => {
  return notification.type === "error";
};

export const getUnread = (
  notifications: TrackedNotification[],
): TrackedNotification[] => {
  return notifications.filter((n) => !n.readAt);
};
