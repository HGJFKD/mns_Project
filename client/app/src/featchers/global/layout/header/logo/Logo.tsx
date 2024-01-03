import { Link } from "react-router-dom"
import IconLogo from "./components/IconLogo"
import LogoWrapper from "../../../styledComponents/logo/LogoWrapper.styled"

export const Logo = () => {
    return (
        <>
            <LogoWrapper>
                <Link to="/">
                    <div>
                        <i><IconLogo /></i>
                    </div>
                    <h2>MNS</h2>
                </Link>
            </LogoWrapper>
        </>
    )
}
