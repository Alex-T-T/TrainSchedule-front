import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box
} from "@mui/material";
import { Colors as color } from '../styles/index'


function Schedule({ trainSchedule }) {

    return (<Box sx={{ textAlign: 'center', mt: '10px' }}>
        <Typography component='h2' sx={{
            fontSize: '32px',
            color: color.inverse
        }} >Schedule</Typography>

        {trainSchedule.length ? <TableContainer component={Paper} >
            <Table sx={{ width: 650 }} size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell> Train № </TableCell>
                        <TableCell align="right">Train name</TableCell>
                        <TableCell align="right">Departure date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trainSchedule.map(({ train_numbers, train_names, departure_date }) => (
                        <TableRow
                            key={train_numbers + departure_date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {train_numbers}
                            </TableCell>
                            <TableCell align="right">{train_names}</TableCell>
                            <TableCell align="right">{departure_date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer> : <Typography> Sorry, there are no trains to this route! </Typography>}
    </Box >
    );
}

export default Schedule