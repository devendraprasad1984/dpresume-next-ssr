import BaseHeader from "./baseHeader";
import Menu from "./menu";
import endpoints from "./endpoints";
import messages from "./messages";
import localdata from "./localdata";
import colors from "./colors";


export const config = {
    name: 'Devendra Prasad',
    rightTitle: 'Tech Lead Software Engineer',
    info: 'technophile . dynamic . motivated . inquisitive',
    menu: Menu(),
    header: (method = 'GET') => BaseHeader(method),
    endpoints,
    messages,
    localdata,
    colors
}
