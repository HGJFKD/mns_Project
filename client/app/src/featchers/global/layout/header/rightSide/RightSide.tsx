import { Stack } from '@mui/material'
import IconLogo from './IconLogo'
import MnsLetters from './MnsLetters/MnsLetters'
import Item from '../../../MUIstyled/Item'


const RightSide = () => {
    return (
        <>
            <Stack
                sx={{ minWidth: '200px', height: "200px" }}
                direction='row'
                justifyContent='space-between'
                alignItems='center'
            >
                <Item ><IconLogo /></Item>
                <Item sx={{
                    display: { xs: "none", sm: "inline-flex" },
                    paddingTop: "2.7em"
                }}>
                    <MnsLetters />
                </Item>
            </Stack>
        </>
    )
}

export default RightSide
