import React, { ReactNode, useContext } from "react";
import config from "../config";
import { useReactAppContext } from "../context/appContext";

interface Props {
  children?: ReactNode;
}

const PageHeader = ({ children }: Props) => {
  const { name, title, headline, email, phone } = config.base;

  const { isMobile } = useReactAppContext();

  const handleOpenCloseNav = () => {
    alert("hello" + isMobile);
  };

  return (
    <div className={[].join(" ")}>
      <div
        className={[
          "pageHeader",
          "wrap",
          "rowGrid",
          "gridContentAtCorners",
        ].join(" ")}
      >
        <div className={"colGrid"}>
          <span className={"size30"}>{name}</span>
          <span className={"size12"}>{headline}</span>
        </div>
        <div className={["colGrid", "right"].join(" ")}>
          <span className={"size30"}>{title}</span>
          <span className={"size12"}>
            {email}, {phone}
          </span>
        </div>
      </div>
      <div className="row wrap">
        <a href="https://dpresume.com/docs/pdf/dpresume.pdf#view=FitH">
          Download CV
        </a>
        <span className="button5" onClick={handleOpenCloseNav}>
          Open/Close
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageHeader;
