export type Notification =
  | { type: "success"; message: string; duration: number }
  | { type: "error"; message: string; retry: boolean; errorCode: number }
  | { type: "warning"; message: string };

export type NotificationPreview = Notification extends infer N
  ? N extends Notification
    ? Pick<N, "type" | "message">
    : never
  : never;

type NotificationType = Notification["type"];
export type NotificationWithoutMeta = Omit<
  Extract<Notification, { type: "error" }>,
  "errorCode"
>;
export type TrackedNotification = Notification & {
  id: number;
  createdAt: Date;
  readAt?: Date;
};

export type NotificationConfig = {
  [K in NotificationType]: {
    icon: string;
    color: string;
  };
};

export const NOTIFICATION_CONFIG = {
  success: { icon: "✓", color: "#4caf50" },
  error: { icon: "✕", color: "#f44336" },
  warning: { icon: "⚠", color: "#ff9800" },
} as const satisfies NotificationConfig;
