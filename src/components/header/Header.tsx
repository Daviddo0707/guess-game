import {AppBar, Toolbar, Typography} from '@mui/material';

const Header = () => {

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                    Guess the TV show name
                </Typography>
            </Toolbar>
        </AppBar>
    );

}
export default Header;
