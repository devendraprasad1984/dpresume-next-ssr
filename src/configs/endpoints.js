// php -d error_reporting=E_ALL -d error_log=./server/error.log -S 0.0.0.0:6201

const islocal = window.location.href.indexOf("localhost") !== -1;
const serverPrefix = islocal ? "http://localhost:6201" : "https://dpresume.com";
const urlResourceHandler = `${serverPrefix}/server/api/get-resource-handler.php`;
const endpoints = {
  SUMMARY: `${urlResourceHandler}?name=summary`,
  LINKS: `${urlResourceHandler}?name=links`,
  HOME_DEMO: `${urlResourceHandler}?name=demo`,
  EDUCATION: `${urlResourceHandler}?name=education`,
  ACHIEVMENT: `${urlResourceHandler}?name=achievements`,
  CERT_DATA: `${urlResourceHandler}?name=certifications`,
  EXPERIENCE: `${urlResourceHandler}?name=prof_expr`,
  PROJECTS: `${urlResourceHandler}?name=projects`,
  SKILLS: `${urlResourceHandler}?name=skills`,
  DONATE: `${urlResourceHandler}?name=donate`,
  BLOGS: `${urlResourceHandler}?name=blogs`,
};
export default endpoints;
