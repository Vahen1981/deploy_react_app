import { Button, CircularProgress, Grid2, Typography } from '@mui/material';
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';

const Advice = () => {
    const { update, setUpdate } = useState(false);
    const { data, loading, error } = useFetch('https://api.adviceslip.com/advice', update);

    const advice = data?.slip?.advice;

    if (loading) {
        return (
          <Grid2
            container
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <CircularProgress />
          </Grid2>
        );
    }

    return (
        <Grid2>
            <Typography variant='body1' gutterBottom sx={{ textAlign: "center", marginTop: "100px" }}>Advice: {advice}</Typography>
            <Button variant='contained' onClick={()=> setUpdate(!update)}>Actualizar Frase</Button>
        </Grid2>
        
    )
}

export default Advice