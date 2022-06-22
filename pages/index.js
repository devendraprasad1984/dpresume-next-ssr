import Home from "./dp/home";
import { getFromApiAsync } from "../apis/get";
import config from "../config";

export default function ({ data, ssr_title }) {
  return (
    <>
      <div>{ssr_title}</div>
      <Home data={data} />
    </>
  );
}

//these function runs from pages only and before build phase of prerender ssr,
//so all server side, async work io or data fetching must be done inside of here
//they never run client side, so are safe to use any secrets work here
export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const data = await getFromApiAsync(config.endpoints.summary);
  return {
    props: {
      ssr_title: "This is an example NextJs SSR",
      data,
    },
  };
}

// export async function getStaticProps() {
//   const data = await getFromApiAsync(config.endpoints.summary);
//   return {
//     props: {
//       data,
//     },
//   };
// }
