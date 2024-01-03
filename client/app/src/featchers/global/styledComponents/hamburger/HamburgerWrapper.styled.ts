import styled from "styled-components"

const HamburgerWrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 15px;
    cursor: pointer;
    > h1 {
        font-size: 18px;
        color: #fff;
        margin-left: 25px;
    }
    @media (min-width: 775px) {
        display: none;
    }
`;

export default HamburgerWrapper