import BaseHeader from "./baseHeader";
import Menu from "./bottomLinks";
import endpoints from "./endpoints";
import messages from "./messages";


export const config = {
    name: 'Devendra Prasad',
    rightTitle: 'Tech Lead Software Engineer',
    info: 'technophile . dynamic . motivated . inquisitive',
    menu: Menu(),
    header:(method='GET')=> BaseHeader(method),
    endpoints,
    messages
}
