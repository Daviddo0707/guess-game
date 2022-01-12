import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";
import * as Styled from './Hint.styled';

interface HintProps {
    displayHint: boolean
}

interface MovieOverViewType {
    movies: { selectedMovie: { overview: string } }
}

const Hint = ({displayHint}: HintProps) => {

    const {overview} = useSelector((state: MovieOverViewType) => state.movies.selectedMovie);

    return (
        <Grid container justifyContent="center">{displayHint ?
            <div>
                <Typography variant="h4" gutterBottom component="div">Hint:</Typography>
                <Styled.HintText>{overview}</Styled.HintText>
            </div>
            : null}
        </Grid>
    )
}
export default Hint;
