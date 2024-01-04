import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavLinks = styled(NavLink)`
    position: relative;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 2px 10px;
    border-radius: 10px;
    
    &:hover {
        background: #ffffff24
    }

    &.active {
        background: #ffffff;
        color: #2497ff;
        transition: all 0.4s ease;
    }
`;

export const NavBtn = styled.div`
    position: relative;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 2px 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background: #ffffff24
    }
`;

export const Newest = styled.div`
    position: absolute;
    right: 20px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgb(0 0 0 / 91%);
`;

type ArrowProps ={
    open: false | "open"
}

export const Arrow = styled.div<ArrowProps>`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0 ,-50%);
    > span {
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 0 5px 6px;
        border-color: transparent transparent transparent #ffffff;
        pointer-events: none;
        transform: ${({open}) => open ? "rotate(0deg)" : "rotate(90deg)"};
        border-left: ${({open}) => !open && "6px solid #ffffff"};
        transition: all 0.2s;
}
`

