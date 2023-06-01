import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAllStations } from '../API/Api';
import { Colors as color } from '../styles/index'


export default function StationSelect({ target, search, searchValues }) {
    const [stations, setStations] = useState([]);
    const [station, setStation] = useState('');

    useEffect(() => {
        getAllStations()
            .then((res) => setStations(res.data))
            .catch((error) => console.log(error));
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setStation(value);
        search({ ...searchValues, [name.toLowerCase()]: value.toLowerCase() })
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl required sx={{ m: 1, minWidth: 250, borderColor: color.primary }}>
                <InputLabel id="demo-simple-select-label">{target}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name={target}
                    value={station}
                    label={target}
                    onChange={handleChange}
                >
                    {stations.map(({ id, station_name }) => <MenuItem key={id} value={station_name}>{station_name}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}