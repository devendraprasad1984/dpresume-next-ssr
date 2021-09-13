import BaseHeader from "./baseHeader";
import Menu from "./menu";
import endpoints from "./endpoints";
import messages from "./messages";
import localdata from "./localdata";
import colors from "./colors";
import chars from "./chars";


export const config = {
    name: 'Devendra Prasad',
    rightTitle: 'Tech Lead Software Engineer',
    info: 'technophile . dynamic . motivated . inquisitive',
    contactline: 'devendraprasad1984@gmail.com, +91-958 279 7772',
    menu: Menu(),
    header: (method = 'GET') => BaseHeader(method),
    endpoints,
    messages,
    localdata,
    colors,
    chars
}
