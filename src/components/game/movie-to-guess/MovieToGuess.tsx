import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {hideRandomLetters, removeSpecials} from "../../../helpers/helpers";
import * as Styled from './MovieToGuess.styled';

interface MovieToGuessProps {
    gameOver: boolean;
}

type SelectedMovieType = { movies: { selectedMovie: { name: string } } }

const MovieToGuess = ({gameOver}: MovieToGuessProps) => {

    const [movie, setMovie] = useState<string>("");
    const {selectedMovie} = useSelector((state: SelectedMovieType) => state.movies);

    useEffect(() => {
        if (selectedMovie.name) {
            setMovie(gameOver ? selectedMovie.name : hideRandomLetters(removeSpecials(selectedMovie.name)));
        }
    }, [selectedMovie, gameOver]);

    return <Styled.WordToGuess>{movie}</Styled.WordToGuess>
}

export default MovieToGuess;
