import React from "react";
import MainApp from "../mainApp";
import style from "../../styles/common.module.scss";
import { useRouter } from "next/router";

const DynamicIdRoute = () => {
  const router = useRouter();
  const pageId = router.query.someId;

  return (
    <MainApp>
      <h2 className={style.pageHeading}>Dynamic Routes Check - {pageId}</h2>
    </MainApp>
  );
};

export default DynamicIdRoute;
