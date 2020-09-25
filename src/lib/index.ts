import {cookies} from "./cookie";
import * as utils from "./utils"
import * as url from "./url"
import * as float from "./float"
import * as string from "./string"

export default {
    cookies,
    ...utils,
    ...url,
    ...float,
    ...string
}
