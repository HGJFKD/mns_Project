import styled from "styled-components";

const LogoWrapper = styled.div`
    width: 100%;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    > a {
        width: 100%;
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        > div {
            position: relative;
            width: 50px;
            height: 50px;
            border-radius: 10px;
            overflow: hidden;
            margin: 10px 5px 10px 0px;
            cursor: pointer;
            background: #11111a;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            > i {
                font-size: 45px;
                margin-left: 2px;
            }
        }
    }
`;

export default LogoWrapper