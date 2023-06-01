import { Box } from '@mui/material'
import { Colors as color } from '../styles/index'

function Header() {
    return (
        <Box component='header' sx={{
            padding: '15px',
            mb: '10px',
            textAlign: 'center',
            backgroundColor: color.primary,
            fontSize: '32px',
            color: color.inverse
        }}>Your Train Schedule</Box>
    )
}

export default Header