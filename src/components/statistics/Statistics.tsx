import {Fragment, useState} from "react";
import StatisticsDialog from './dialog/StatisticsDialog';
import * as Styled from './Statistics.styled';

const Statistics = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
            <Styled.StatisticsButton onClick={handleOpen} variant="contained" sx={{borderRadius: "20px"}}>Show
                Statistics</Styled.StatisticsButton>
            <StatisticsDialog open={open}
                              handleClose={handleClose}/>
        </Fragment>
    )
}
export default Statistics;
