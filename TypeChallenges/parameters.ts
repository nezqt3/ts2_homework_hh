type MyParameters<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer P
) => unknown
  ? P
  : never;
