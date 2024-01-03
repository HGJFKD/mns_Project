import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SubMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #00000029;
    overflow: hidden;
    height: ${(props) => (props.opened === "true" ? props.tall * 59 + 20 : 0)}px;
    transition: all 0.4s ease;
    padding: ${(props) => (props.opened === "true" ? "0px 0px" : "0px")};
    margin: 2px 0 2px;
    
` 

export const SubLinks = styled(NavLink)`
    color: #fff;
    padding: 0px 20px;
    height: 55px !important;
    text-decoration : none;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 2px 10px;
    border-radius: 10px;
    > span {
        margin-left: 14px;
    }
    &:hover {
        background: #ffffff24;
    }
    &.active {
        background: #fff;
        color: #4297ff;
        transition: all 0.4s ease;
}
`
export default SubMenu