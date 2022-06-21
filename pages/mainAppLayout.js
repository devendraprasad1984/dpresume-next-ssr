import PageHeader from "../core/PageHeader";
import PageFooter from "../core/PageFooter";
import Nav from "../core/nav";
import style from "../styles/common.module.scss";

export default function MainAppLayout({ children }) {
  return (
    <div className={[style.textColor].join(" ")}>
      <Nav />
      <div className={style.rightPanel}>
        <PageHeader />
        <div
          className={[
            style.marginUD,
            style.mainAppContainer,
            style.devsLogo,
          ].join(" ")}
        >
          <div className={style.mainAppContainerOverlay}>{children}</div>
        </div>
        <PageFooter />
      </div>
    </div>
  );
}
