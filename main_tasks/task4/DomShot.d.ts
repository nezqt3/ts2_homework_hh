export type ImageFormat = "png" | "jpeg" | "webp";

export type Offset = {
  x: number;
  y: number;
};

export type DomShotOptions = {
  scale?: number;
  backgroundColor?: string | null;
  quality?: number;
  format?: ImageFormat;
  useCORS?: boolean;
  width?: number;
  height?: number;
  offset?: Offset;
  onClone?: (clonedElement: HTMLElement) => void;
};

declare const DomShot: {
  capture(element: HTMLElement, options?: DomShotOptions): Promise<string>;

  download(
    element: HTMLElement,
    filename: string,
    options?: DomShotOptions,
  ): Promise<void>;

  getSupportedFormats(): ImageFormat[];

  version: string;
};

export default DomShot;
