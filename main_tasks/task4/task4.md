# Задание 4: DomShot.d.ts ⭐⭐

## Легенда

Вам дан JS-файл DomShot.js — утилита для создания скриншотов DOM-элементов. Типов нет. Ваша задача — написать файл деклараций, чтобы использовать библиотеку в TypeScript без any.

## Что нужно сделать

Изучите DomShot.js — прочитайте JSDoc-комментарии, поймите API

Создайте файл DomShot.d.ts — опишите все типы, интерфейсы и сигнатуры методов так, чтобы библиотеку можно было использовать в TypeScript без any

Создайте файл example.ts с примером использования библиотеки

## Критерии приёмки

import DomShot from "./DomShot" — без ошибок

DomShot.capture(el) — возвращает Promise<string>

DomShot.capture(el, { scale: "two" }) — ошибка компиляции

DomShot.capture(el, { format: "bmp" }) — ошибка компиляции ("bmp" не входит в ImageFormat)

DomShot.capture("not element") — ошибка компиляции

DomShot.download(el, "screenshot") — возвращает Promise<void>

DomShot.version — тип string

Все поля DomShotOptions опциональные