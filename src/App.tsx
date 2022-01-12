import React, {useEffect} from 'react';
import './App.css';
import Header from './components/header/Header';
import Game from './components/game/Game';
import Statistics from './components/statistics/Statistics';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from './redux/moviesSlice';

type ErrorType = { movies: { error: string } }

function App() {
    const dispatch = useDispatch()
    const error = useSelector((state: ErrorType) => state.movies.error)
    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div className="App">
            {!error ?
                <div>
                    <Header/>
                    <Game/>
                    <Statistics/>
                </div>
                : <div>{error}</div>
            }
        </div>
    );
}

export default App;
