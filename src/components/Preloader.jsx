import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Preloader() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress style={{color:"#2baf64"}} />
    </Box>
  );
}
