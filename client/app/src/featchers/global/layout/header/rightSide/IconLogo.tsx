import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Square = styled('div')({
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  padding: '0px 0px 0px 0px ',
  margin: '0px 0px 0px 0px',
});

const Square1 = styled(Square)({
  transform: 'scale(1) rotate(45deg)',
  border: '0.2rem rgba(18,197,17, 0.3) solid',
});

const Square2 = styled(Square)({
  transform: 'scale(1) rotate(70deg)',
  border: '0.2rem rgba(18,197,17, 0.6) solid',
});

const Square3 = styled(Square)({
  transform: 'scale(1) rotate(95deg)',
  border: '0.2rem rgba(18,197,17, 1) solid',
});

const IconLogo = () => {
  return (
    <Box sx={{ padding: '2px 2px 2px 2px' }}>
      <Square1 />
      <Square2 />
      <Square3 />
    </Box>
  );
};

export default IconLogo;
