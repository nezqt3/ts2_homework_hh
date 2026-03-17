const TYPES_IMAGES = ["png", "jpeg", "webp"] as const;
export type TypeImage = (typeof TYPES_IMAGES)[number];

type Offset = {
  x: number;
  y: number;
};

export type DomShotOptions = {
  scale?: number;
  backgroundColor?: string | null;
  quality?: number;
  format?: TypeImage;
  useCORS?: boolean;
  width?: number;
  height?: number;
  offset?: Offset;
  onClone?: (clonedElement: HTMLElement) => void;
};
