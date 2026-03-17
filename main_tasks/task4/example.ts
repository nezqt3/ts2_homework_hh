import DomShot from "./DomShot";

// capture возвращает data URL (string)
const captureResult: string = await DomShot.capture(document.body, {
  scale: 2,
  format: "png",
  backgroundColor: null,
  offset: { x: 10, y: 20 },
  onClone: (el) => {
    el.style.border = "2px solid red";
  },
});

console.log("Captured:", captureResult);

// download возвращает Promise<void>
const downloaded: void = await DomShot.download(document.body, "capture.png", {
  format: "jpeg",
  quality: 0.8,
});

console.log("Downloaded");

// getSupportedFormats строго типизирован
const formats = DomShot.getSupportedFormats();

formats.forEach((format) => {
  console.log("Supported format:", format);
});

// version — строка
console.log("Version:", DomShot.version);
