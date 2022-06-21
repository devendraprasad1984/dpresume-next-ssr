import Home from "./dp/home";

export default function ({ data }) {
  return (
    <>
      <div>{data}</div>
      <Home />
    </>
  );
}

//it runs from index only
export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
      data: "This is an example NextJs SSR",
    },
  };
}
