import { styled } from '@mui/material/styles';

const Item = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    flexGrow: 1,
}));

export default Item