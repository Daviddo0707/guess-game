import * as Styled from './GameInfo.styled';

interface GameInfoProps {
    guessesLeft: number;
    gameOver: boolean;
}

const WIN_MESSAGE = "You guessed it!";
const LOOSE_MESSAGE = "You didnt guessed it, maybe next time..";

const GameInfo = ({guessesLeft, gameOver}: GameInfoProps) => {
    const inGameMessage = `You have ${guessesLeft} tries left`;
    const renderMessage = () => {
        if (guessesLeft === 0) {

            return LOOSE_MESSAGE;
        } else if (gameOver && guessesLeft !== 0) {

            return WIN_MESSAGE;

        } else return inGameMessage;
    }
    return <Styled.GameInfoMessage> {renderMessage()}</Styled.GameInfoMessage>
}

export default GameInfo;
