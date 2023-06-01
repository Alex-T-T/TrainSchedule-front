import { useState } from 'react'
import { Schedule, StationSelect } from '../Components';
import DirectionsRailwayFilledIcon from '@mui/icons-material/DirectionsRailwayFilled';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { getScheduleByStations } from '../API/Api';

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

        getScheduleByStations(arrival, depart)
            .then((res) => {
                setTrainSchedule(res.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Box component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: '15px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mb: '10px' }}>
                <DirectionsRailwayFilledIcon />
                <StationSelect target={'Depart'} searchValues={searchValues} search={setSearchValues} />
                <DoubleArrowIcon />
                <StationSelect target={'Arrival'} searchValues={searchValues} search={setSearchValues} />
            </Box>
            <Button variant="search" size="large" onClick={handleClick} type='submit'>Search <SearchIcon /> </Button>
            {trainSchedule && <Schedule trainSchedule={trainSchedule} />}
        </Box>
    )
}

export default Home