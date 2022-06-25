import PageHeader from "../core/PageHeader";
import PageFooter from "../core/PageFooter";
import Nav from "../core/nav";

export default function MainAppLayout({ children }) {
  return (
    <div className={["textColor"].join(" ")}>
      <Nav />
      <div className={"rightPanel"}>
        <PageHeader />
        <div className={["mainAppContainer", "devsLogo"].join(" ")}>
          <div className={"mainAppContainerOverlay"}>{children}</div>
        </div>
        <PageFooter />
      </div>
    </div>
  );
}
