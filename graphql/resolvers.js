import { getMovies, getMovie } from "./db";

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
    },
    Mutation: {
        getMovieById: (_, { id }) => getMovie(id),
    },
};

export default resolvers;
