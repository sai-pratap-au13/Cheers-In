import movies from './Movies.json';

export default class MovieS{
    static getMovies() {
        return movies ? movies: [];
    }
}