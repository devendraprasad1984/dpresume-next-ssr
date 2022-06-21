import React from "react";
import style from "../../styles/common.module.scss";
import { useRouter } from "next/router";

const DynamicIdRoute = () => {
  const router = useRouter();
  const pageId = router.query.someId;

  return <h2 className={style.pageHeading}>Dynamic Routes Check - {pageId}</h2>;
};

export default DynamicIdRoute;
