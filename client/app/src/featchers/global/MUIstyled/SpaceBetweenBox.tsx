import { styled } from '@mui/material/styles';

const SpaceBetweenBox = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));

export default SpaceBetweenBox