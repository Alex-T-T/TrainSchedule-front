import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

// const stations = [{ id: 1, name: 'Лавочне' },
// { id: 2, name: 'Ланівці' },
// { id: 3, name: 'Ларга' },
// { id: 4, name: 'Липник(станція)' },
// { id: 5, name: 'Лужани' },
// { id: 6, name: 'Луцьк' },
// { id: 7, name: 'Львів' },
// { id: 8, name: 'Любинці' },
// { id: 9, name: 'Любитів' },
// { id: 10, name: 'Любінь-Великий' },
// { id: 11, name: 'Люблинець-Волинський' },
// { id: 12, name: 'Любомирськ' },
// { id: 13, name: 'Любомль' },
// { id: 14, name: 'Болехів' },
// { id: 15, name: 'Боржава' },
// { id: 16, name: 'Бориничі' },
// { id: 17, name: 'Борислав' },
// { id: 18, name: 'Борщів' },
// { id: 19, name: 'Борщовичі' },
// { id: 20, name: 'Братківці' },
// { id: 21, name: 'Броди' },
// { id: 22, name: 'Брюховичі' },
// { id: 23, name: 'Букачівці' },
// { id: 24, name: 'Бурштин' },
// { id: 25, name: 'Київ' },
// { id: 26, name: 'Чернігів' },
// { id: 26, name: 'Івано-Франківськ' },
// ];


export default function StationSelect({ target, search, searchValues }) {
    const [stations, setStations] = useState([]);
    const [station, setStation] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5008/station')
            .then((res) => setStations(res.data))
            .catch(function (error) {
                console.log(error);
            });
    }, [])



    const handleChange = (event) => {
        const { name, value } = event.target

        setStation(value);

        search({ ...searchValues, [name.toLowerCase()]: value.toLowerCase() })

    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl required sx={{ m: 1, minWidth: 250 }}>
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