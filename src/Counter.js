// eslint-disable-next-line
import { Button, Box, AppBar, Toolbar, Typography, Paper } from '@mui/material';
import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    const Reset = () => {
        setCount(0);
    }



    return (

        <Paper>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Counter</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', pt: 2, pb: 2, mb: 2 }}>
                Count : {count} <br />
                <Button onClick={Increment} variant="outlined" color="secondary" sx={{ mr: 2 }}>
                    increment
                </Button>
                <Button onClick={Reset} variant="outlined" color="secondary" sx={{ ml: 2 }}>
                    Reset
                </Button>
            </Typography>
        </Paper>

    )
}

export default Counter;