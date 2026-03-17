import type { DomShotOptions, TypeImage } from "./models";

declare const DomShot: {
  capture(element: HTMLElement, options?: DomShotOptions): Promise<string>;

  download(
    element: HTMLElement,
    filename: string,
    options?: DomShotOptions,
  ): Promise<void>;

  getSupportedFormats(): TypeImage[];

  version: string;
};

export default DomShot;
