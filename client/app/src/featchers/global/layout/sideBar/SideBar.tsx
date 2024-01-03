import { useLayoutEffect } from "react"
import { Scrollbars } from "react-custom-scrollbars"

import {
    SideBarWrappet,
    SideBarBody,
    UnorderList,
} from "../../styledComponents/sideBar/SideBar.styled"

import { Logo } from "../header/logo/Logo"
import SideBarFooter from "./SideBarFooter"
import SideBarButtons from "./SideBarLinks"
import makeBottons from "./makeButtonsArray"
import { SideBarProps } from "../../types/sideBarButtons"
import NegativeSidbar from "../../styledComponents/sideBar/NegativeSidbar.styled"

const SideBar = ({ open, setOpen, handleClick }: SideBarProps) => {

    useLayoutEffect(() => {
        const updateSize = () => {
            if (window.innerWidth > 775) {
                if (open === true) {
                    console.log("Closing Sidebar")
                    setOpen!(false)
                }
            }
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, [open, setOpen])

    return (
        <>
            <NegativeSidbar open={open} onClick={handleClick} />
            <SideBarWrappet open={open}>
                <SideBarBody>
                    <Logo />
                    <Scrollbars
                        autoHide
                        autoHideTimeout={800}
                        autoHideDuration={200}
                        style={{ height: "calc(100vh - 180px)" }}
                    >
                        <UnorderList>
                            {makeBottons.map((btn, i) => (
                                <SideBarButtons
                                    key={i}
                                    to={btn.to}
                                    icon={btn.icon}
                                    title={btn.title}
                                    span={btn.span}
                                    subBtn={btn.subBtn}
                                    handleClick={handleClick}
                                />
                            ))}
                        </UnorderList>
                    </Scrollbars>
                    <SideBarFooter />
                </SideBarBody>
            </SideBarWrappet>
        </>
    )
}

export default SideBar