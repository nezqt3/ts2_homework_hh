# Задание 1: Каталог фильмов ⭐

## Легенда

Вы описываете типы для каталога фильмов — модели, фильтры, вывод карточек.

### Что нужно сделать

Модели — опишите interface Movie с полями: id, title, year, rating, genre, description, director. Поля description и director
— опциональные

Жанры — создайте массив жанров (comedy, drama, action, horror, sci-fi) с помощью as const и выведите из него тип Genre

Фильтры — создайте union-тип SortBy для сортировки по year, rating, title

Карточка и превью — с помощью utility types создайте:

MovieCard — только id, title, year, rating из Movie

MovieFull — все поля Movie, но readonly

### Функции (3 штуки):

filterByGenre(movies: Movie[], genre: Genre): Movie[]

sortMovies(movies: Movie[], by: SortBy): Movie[]

toCard(movie: Movie): MovieCard

Маппинг жанров на emoji — создайте объект, который сопоставляет каждому жанру emoji. Используйте mapped type, as const или satisfies — на выбор. Забытый жанр должен вызывать ошибку компиляции

## Критерии приёмки

GENRES — readonly ["comedy", "drama", ...], не string[]

filterByGenre(movies, "romance") — ошибка компиляции (жанра нет в списке)

GENRE_EMOJI проверяется на полноту — забытый жанр = ошибка компиляции

MovieFull — все поля readonly
