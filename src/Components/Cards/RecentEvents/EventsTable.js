import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Typography,Box} from '@mui/material'
import TableComp from './TableComp';
import { simulatorList } from './EventsExample';


const EventsTable = () => {
const [allEvents,setAllEvents] = useState(simulatorList);
const [selectedOption, setSelectedOption] = useState(1);



const handleChange = (event) => {
    const order = event.target.value
    setSelectedOption(order);
    allEvents.sort((a, b) => {
        switch (order) {
          case 1:
            return a.currentTime.localeCompare(b.currentTime);
          case 2:
            return a.reporter.localeCompare(b.reporter);
          case 3:
            return a.eventType.localeCompare(b.eventType);
          case 4:
            return a.severity - b.severity;
          default:
            return 0;
        }
    });

};


  return (
    <>
    <Box display={'flex'}>
        <Box alignSelf={'center'} marginRight={'1%'}>
            <Typography>Sort by: </Typography>
        </Box>
        <Box>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedOption}
                label="Sort"
                onChange={handleChange}
                sx={{width:'100%'}}
            >
                <MenuItem value={1}>Time</MenuItem>
                <MenuItem value={2}>Reporter</MenuItem>
                <MenuItem value={3}>Event Type</MenuItem>
                <MenuItem value={4}>severity</MenuItem>
            </Select>
        </Box> 
    </Box>
     <Box>
        <TableComp events={allEvents}/>
    </Box>
    </>
  )
}

export default EventsTable