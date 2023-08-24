import { Button, Typography, Paper } from '@mui/material';
import { useState, useEffect } from 'react';

function PlanetInfo() {
    const [planetData, setPlanetData] = useState({});
    const [currentPlanet, setCurrentPlanet] = useState(1);
    const [nextPlanetName, setNextPlanetName] = useState("");

    const apiUrl = `https://swapi.dev/api/planets/${currentPlanet}/`;

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setPlanetData(data))
            .catch(err => console.log(err))
    }, [apiUrl])

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${currentPlanet + 1}/`)
            .then(res => res.json())
            .then(data => setNextPlanetName(data.name)) 
            .catch(err => console.log(err))
    }, [currentPlanet]);

    const Next = () => {
        setCurrentPlanet(currentPlanet + 1);
    }

    const Reset = () => {
        setCurrentPlanet(1);
    }

    const Previous = () => {
        if (currentPlanet > 1) {
            setCurrentPlanet(currentPlanet - 1);
        }
    }

    return (
        <Paper>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Planet Information from Starwars API</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', pt: 2 }}>
                <span style={{ fontWeight: 'bold' }}>Planet Name:</span> {planetData.name}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                <span style={{ fontWeight: 'bold' }}>Planet Population:</span> {planetData.population}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', pb: 2 }}>
                <span style={{ fontWeight: 'bold' }}>Planet Climate:</span> {planetData.climate} <br />

                <Button onClick={Next} variant="outlined" color="secondary" sx={{ mr: 2 }}>
                    Next Planet ({nextPlanetName})
                </Button>
                <Button onClick={Previous} variant="outlined" color="secondary" sx={{ ml: 2 }}>
                    Previous Planet
                </Button>
                <Button onClick={Reset} variant="outlined" color="secondary" sx={{ ml: 2 }}>
                    Reset
                </Button>
            </Typography>

        </Paper>
    );
}

export default PlanetInfo;
