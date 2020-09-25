import _Vue from "vue"
import {cookies} from "./lib/cookie";
import * as utils from "./lib/utils"
import * as url from "./lib/url"
import * as float from "./lib/float"
import * as string from "./lib/string"

export * from "./lib/utils"
export * from "./lib/url"
export * from "./lib/string"
export * from "./lib/float"
export * from "./lib/cookie"


export default (Vue: typeof _Vue): void => {
    Vue.prototype.$helpers = {cookies, ...utils, ...url, ...float, ...string}
}

