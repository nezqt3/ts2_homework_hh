import DomShot from "./DomShot";

const el = document.body;

/**
 * import работает
 */
DomShot.capture(el);

/**
 * capture возвращает Promise<string>
 */
const captureResult: Promise<string> = DomShot.capture(el);

/**
 * ❌ scale должен быть number
 */
// @ts-expect-error
DomShot.capture(el, { scale: "two" });

/**
 * ❌ format ограничен "png" | "jpeg" | "webp"
 */
// @ts-expect-error
DomShot.capture(el, { format: "bmp" });

/**
 * ❌ element должен быть HTMLElement
 */
// @ts-expect-error
DomShot.capture("not element");

/**
 * download возвращает Promise<void>
 */
const downloadResult: Promise<void> = DomShot.download(el, "screenshot");

/**
 * version имеет тип string
 */
const versionCheck: string = DomShot.version;

// @ts-expect-error version не number
const wrongVersion: number = DomShot.version;

/**
 * Все поля options опциональны
 */
DomShot.capture(el, {});
DomShot.capture(el, { scale: 2 });
DomShot.capture(el, { format: "png" });
DomShot.capture(el, { useCORS: true });

/**
 * offset типизирован
 */
DomShot.capture(el, { offset: { x: 10, y: 20 } });

// @ts-expect-error missing y
DomShot.capture(el, { offset: { x: 10 } });

/**
 * onClone получает HTMLElement
 */
DomShot.capture(el, {
  onClone: (node) => {
    const check: HTMLElement = node;
  },
});

// @ts-expect-error wrong param type
DomShot.capture(el, { onClone: (node: string) => {} });

/**
 * getSupportedFormats возвращает TypeImage[]
 */
const formats = DomShot.getSupportedFormats();

formats.forEach((format) => {
  const check: "png" | "jpeg" | "webp" = format;
});

// @ts-expect-error не любой string
const wrongFormat: "bmp" = formats[0];
