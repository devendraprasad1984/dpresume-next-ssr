import React, { ReactNode } from "react";
import config from "../config";

interface Props {
  children?: ReactNode;
}

const PageHeader = ({ children }: Props) => {
  const { name, title, headline, email, phone } = config.base;

  return (
    <div className={[].join(" ")}>
      <div
        className={["pageHeader", "rowGrid", "gridContentAtCorners"].join(" ")}
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
      <div>
        <a href="https://dpresume.com/docs/pdf/dpresume.pdf#view=FitH">
          Download CV
        </a>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageHeader;
