import {useSelector} from "react-redux";
import {Dialog, DialogContent, Grid, IconButton, DialogTitle} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface StatisticsModalProps {
    open: boolean;
    handleClose: () => void;
}

interface StatisticsObject {
    [key: string]: {}
}

type StatisticsType = { movies: { rightGuesses: number, wrongGuesses: number, hintUse: number } };

const StatisticsDialog = ({open, handleClose}: StatisticsModalProps) => {

    const {
        rightGuesses,
        wrongGuesses,
        hintUse
    } = useSelector((state: StatisticsType) => state.movies);
    const statistics: StatisticsObject = {
        "Right guesses": rightGuesses,
        "Wrong guesses": wrongGuesses,
        "Hints use": hintUse
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="xs">
            <DialogTitle>Your game statistics</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}>
                <CloseIcon/>
            </IconButton>
            <DialogContent>
                {Object.keys(statistics).map((key: string) => {

                    return (<Grid container key={key} sx={{mb: "10px"}}>
                        <Grid item xs={7} sx={{fontWeight: "bold"}}> {key}:</Grid>
                        <Grid item xs={5} sx={{fontWeight: "10"}}> {statistics[key]}</Grid>
                    </Grid>)
                })}
            </DialogContent>
        </Dialog>
    )
}
export default StatisticsDialog;
