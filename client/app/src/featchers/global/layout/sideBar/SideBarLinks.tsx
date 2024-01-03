import { useState } from "react";

import SideBarButtons from "../../types/sideBarButtons";
import {
    NavLinks,
    NavBtn,
    Newest,
    Arrow
} from "../../styledComponents/sideBar/NavLinks.styled";
import { Icon } from "../../styledComponents/sideBar/Icon.styled";
import SubMenu, { SubLinks } from "../../styledComponents/sideBar/SubMenu.styled";

const SideBarLinks = ({
    to,
    icon,
    title,
    span,
    subBtn,
    handleClick
}: SideBarButtons) => {

    const [openSubMenu, setOpenSubMenu] = useState<boolean>(false)

    const handleSubMenu = () => {
        if (subBtn) {
            setOpenSubMenu(!openSubMenu);
        }
    };

    return (
        <>
            <li>
                {!subBtn ? (
                    <NavLinks
                        to={{
                            pathname: to,
                            state: { flag: title }
                        }}
                        onClick={handleClick}
                    >
                        <Icon>{icon}</Icon>
                        {title}
                        {span && <Newest>{span}</Newest>}
                    </NavLinks>
                ) : (
                    <NavBtn onClick={() => { handleSubMenu() }}>
                        <Icon>{icon}</Icon>
                        {title}
                        {span && <Newest>{span}</Newest>}
                        {subBtn && (
                            <Arrow open={!openSubMenu && "open"}>
                                <span></span>
                            </Arrow>
                        )}
                    </NavBtn>
                )}
                <SubMenu
                    tall={subBtn && `${subBtn.length}`}
                    opened={openSubMenu ? "true" : "false"}
                >
                    {subBtn && subBtn.map((btn, i) => (
                        <div key={i}>
                            <SubLinks
                                key={i}
                                to={to + "/" + btn.toLocaleLowerCase()}
                                onClick={handleClick}
                            >
                                {btn.slice(0, 2).toUpperCase()}
                                <span>{btn}</span>
                            </SubLinks>
                        </div>
                    ))}
                </SubMenu>
            </li>
        </>
    )
}

export default SideBarLinks