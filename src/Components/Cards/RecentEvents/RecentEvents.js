import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Typography,Box} from '@mui/material'
import LastEvent from './LastEvent';
import EventsTable from './EventsTable';

const RecentEvents = () => {
  return (
    <Box  width={'66%'} margin={'0 auto'} marginTop={'5%'} >
        <Card>
            <CardContent>
            <Typography variant="h5" component="div" textAlign={'center'}>
                Recent Events
            </Typography>
            <LastEvent currentTime={'2023-05-16'} reporter={'MMT'} eventType={"GRB"} severity ={'2'}/>
            <Typography variant="body2">
                <EventsTable/>
            </Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

export default RecentEvents