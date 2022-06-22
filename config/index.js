import menus from "./menu";
import base from "./base";
import endpoints from "./endpoints";

const config = {
  menus,
  base,
  endpoints,
  revalidateTime: 24 * 60 * 60,
};

export default config;
