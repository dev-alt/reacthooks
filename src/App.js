import Counter from './Counter';
// eslint-disable-next-line
import { Button, Box, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import PlanetInfo from './PlanetInfo';

function App() {
  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <AppBar>
<Typography variant="h3" sx={{ fontWeight: 600, color: 'Blue', marginBottom: 5, mt: 5 }}>React Hooks</Typography>
</AppBar>
    <Grid container justifyContent="center" alignItems="stretch" spacing={3} mt={15}>

      <Grid item xs={12} sm={6}>
        <Box sx={{ p: 8, ml: 2, borderRadius: '8px', textAlign: 'center', }}>
          <Counter />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} mb={5}>
        <Box sx={{ p: 8, mr: 2, borderRadius: '8px', textAlign: 'center', }}>
          <PlanetInfo />
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
}

export default App;
