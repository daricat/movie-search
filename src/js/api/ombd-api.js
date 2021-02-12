export const imbdRate = (id) => (`https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMBD_API}`);

export const ombdUrl = (title, page) => `https://www.omdbapi.com/?apikey=${process.env.OMBD_API}&s=${title}&page=${page}`;

