import { Box } from '@mui/material'
import RightSide from './rightSide/RightSide'

const Header = () => {
    return (
        <Box
            sx={{
                direction: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                minWidth: "1972px",
                height: "152px",
                position: 'relative',
                backgroundColor: "#11111a"
            }}
        >
            <RightSide />
        </Box>
    )
}

export default Header