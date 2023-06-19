import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Typography,Box} from '@mui/material'
import NasaTable from './NasaTable';
import {NasaList} from './NasaEvents'


const Nasa = () => {
    const [allEvents,setAllEvents] = useState(NasaList);

    

    
    return (
        <Box  width={'66%'} margin={'0 auto'} marginTop={'5%'} >
            <Card>
                <CardContent>
                <Typography variant="h5" component="div" textAlign={'center'}>
                    NASA
                </Typography>
                <Typography variant="body2">
                    <NasaTable events={allEvents}/>
                </Typography>
                </CardContent>
            </Card>
        </Box>
      )
}

export default Nasa