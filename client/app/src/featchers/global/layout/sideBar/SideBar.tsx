import { useEffect, useLayoutEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import {
  SideBarWrappet,
  SideBarBody,
  UnorderList,
} from "../../styledComponents/sideBar/SideBar.styled";
import NegativeSidbar from "../../styledComponents/sideBar/NegativeSidbar.styled";

import { Logo } from "../header/logo/Logo";
import SideBarFooter from "./SideBarFooter";
import SideBarButtons from "./SideBarLinks";
import makeBottons from "./makeButtonsArray";

import useOpen from "../../hooks/useOpen";
import { Hamburger } from "../main/Hamburger";

const SideBar = () => {
  const { on, set, toggle } = useOpen();

  useLayoutEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 775) {
        if (on) {
          set(false);
        }
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <NegativeSidbar open={on} onClick={toggle} />
      <Hamburger on={on} toggle={toggle}/>
      <SideBarWrappet open={on}>
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
                />
              ))}
            </UnorderList>
          </Scrollbars>
          <SideBarFooter />
        </SideBarBody>
      </SideBarWrappet>
    </>
  );
};

export default SideBar;
