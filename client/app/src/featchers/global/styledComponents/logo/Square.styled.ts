import styled from "styled-components";

const StyledSquareLogo = styled.div`
    width: 20px;
    height: 20px;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
    position: absolute;
    border: 2.8px rgba(193,0,229, ${({ opacity }) => opacity}) solid;
    transform: translate(-50%, -50%) scale(1) rotate(${({ rotate }) => `${rotate}deg`});
`;

export default StyledSquareLogo;

