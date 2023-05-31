import React, { useState } from 'react'
// import { Outlet } from 'react-router-dom';
import { Schedule, StationSelect } from '../Components';
import DirectionsRailwayFilledIcon from '@mui/icons-material/DirectionsRailwayFilled';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';

function Home() {
    const [searchValues, setSearchValues] = useState({});
    const [trainSchedule, setTrainSchedule] = useState('')


    function handleClick(event) {
        event.preventDefault();

        const { arrival, depart } = searchValues;

        if (!arrival || !depart) {
            toast.error('Select arrival and depart stations')
            return
        }
        console.log('searchValues =>', searchValues);

        axios.post('http://localhost:5008/schedule', { arrival, depart })
            .then((res) => {
                setTrainSchedule(res.data)
                console.log('res.data: ', res.data);

                // window.location.href = '/schedule'
            })
            .catch(function (error) {
                console.log(error);
            });

    }



    return (
        <Box component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <DirectionsRailwayFilledIcon />
                <StationSelect target={'Depart'} searchValues={searchValues} search={setSearchValues} />
                <DoubleArrowIcon />
                <StationSelect target={'Arrival'} searchValues={searchValues} search={setSearchValues} />
            </Box>
            <Button variant="outlined" size="large" onClick={handleClick} type='submit'>Search <SearchIcon /> </Button>
            {trainSchedule && <Schedule trainSchedule={trainSchedule} />}
            {/* <Outlet trainSchedule={trainSchedule} /> */}
        </Box>
    )
}

export default Home