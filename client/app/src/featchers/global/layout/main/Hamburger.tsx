import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { SideBarProps } from '../../types/sideBarButtons'
import HamburgerWrapper from '../../styledComponents/hamburger/HamburgerWrapper.styled'

export const Hamburger = ({ open, setOpen,  handleClick }: SideBarProps) => {
    return (
        <HamburgerWrapper
            onClick={handleClick}
        > 
            {open ? (
                <i><GiHamburgerMenu/></i>
            ) : (
                <i><IoMdClose/></i>
            )}
        </HamburgerWrapper>
    )
}
