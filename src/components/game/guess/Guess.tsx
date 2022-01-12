import {FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeSpecials} from "../../../helpers/helpers";
import {incrementHint, incrementRightGuess, incrementWrongGuess} from "../../../redux/moviesSlice";
import {Box, Grid, IconButton, Tooltip} from "@mui/material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import * as Styled from './Guess.styled';

interface GuessProps {
    guessesLeft: number;
    setGuessesLeft: (guessesLeft: number) => void;
    gameOver: boolean;
    setGameOver: (gameOver: boolean) => void;
    resetGame: () => void;
    setDisplayHint: (displayHint: boolean) => void;
    displayHint: boolean;
}

interface MovieType {
    movies: { selectedMovie: { name: string } }
}

const YELLOW = '#ECEC34';
const GREY = '#5C5C4F';

const Guess = ({
                   guessesLeft,
                   setGuessesLeft,
                   setGameOver,
                   gameOver,
                   resetGame,
                   displayHint,
                   setDisplayHint
               }: GuessProps) => {

    const dispatch = useDispatch();
    const movie = useSelector((state: MovieType) => state.movies.selectedMovie);
    const lightColor = displayHint ? YELLOW : GREY;
    const [guess, setGuess] = useState<string>("");

    useEffect(() => {
        setGuess("");
    }, [movie]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (guess) {
            const sanitizedMovieName = removeSpecials(movie.name).toLocaleLowerCase();
            const sanitizedMovieGuess = removeSpecials(guess).toLocaleLowerCase();
            if (sanitizedMovieName === sanitizedMovieGuess) {
                setGuess('');
                setGameOver(true);
                dispatch(incrementRightGuess());
            } else {
                setGuessesLeft(guessesLeft - 1);
                dispatch(incrementWrongGuess());
            }
        }
    }

    const showHint = () => {
        setDisplayHint(true);
        dispatch(incrementHint());
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                    <Styled.GuessTextField label="Enter guess" disabled={gameOver || guessesLeft === 0} value={guess}
                                           onChange={(e) => setGuess(e.target.value)}/>
                    <Tooltip title="Click to show hint">
                        <IconButton disabled={displayHint} onClick={showHint}>
                            <LightbulbIcon sx={{color: lightColor, fontSize: 45}}/>
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item>{!gameOver && guessesLeft !== 0 ?
                    <Styled.GuessGameButton variant="contained" color="success" type="submit">Check the
                        Guess</Styled.GuessGameButton>
                    :
                    <Styled.GuessGameButton variant="contained" onClick={resetGame}>Play again!</Styled.GuessGameButton>
                }
                </Grid>
            </Grid>
        </Box>
    )
}
export default Guess;
