import { Colors as color } from '../styles/index'
import { Box, Typography } from '@mui/material'


function Footer() {
    return (
        <Box component='footer' sx={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            padding: '15px',
            textAlign: 'center',
            backgroundColor: color.primary,
            fontSize: '32px',
            color: color.inverse
        }}>

            <Typography sx={{
                fontSize: '24px',
                color: color.inverse
            }}>🇺🇦 Be Brave, Like Ukrainians 🇺🇦</Typography>
        </Box>
    )
}

export default Footer