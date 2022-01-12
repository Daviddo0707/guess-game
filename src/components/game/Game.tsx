import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setMovieToGuess} from "../../redux/moviesSlice";
import MovieToGuess from './movie-to-guess/MovieToGuess';
import Guess from './guess/Guess';
import Hint from './hint/Hint';
import GameInfo from "../game-info/GameInfo";
import {Grid} from "@mui/material";

type MoviesType = { movies: { movieList: [] } }

const Game = () => {

    const {movieList} = useSelector((state: MoviesType) => state.movies);
    const dispatch = useDispatch();
    const [guessesLeft, setGuessesLeft] = useState<number>(3);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [displayHint, setDisplayHint] = useState<boolean>(false);

    const resetGame = () => {
        setGuessesLeft(3);
        setGameOver(false);
        setDisplayHint(false);
        dispatch(setMovieToGuess(movieList[Math.floor(Math.random() * movieList.length)]));
    }

    return (
        <Grid container direction="column" spacing={4}>
            <Grid item>
                <MovieToGuess gameOver={gameOver}/>
                <GameInfo guessesLeft={guessesLeft} gameOver={gameOver}/>
            </Grid>
            <Grid item>
                <Guess setGuessesLeft={setGuessesLeft} guessesLeft={guessesLeft} setGameOver={setGameOver}
                       gameOver={gameOver}
                       resetGame={resetGame} displayHint={displayHint} setDisplayHint={setDisplayHint}/>
            </Grid>
            <Grid item>
                <Hint displayHint={displayHint}/>
            </Grid>
        </Grid>
    )
}
export default Game;
