import _Vue from "vue"
import * as cookies from "./lib/cookie"
import * as string from "./lib/string"
import * as url from "./lib/url"
import * as utils from "./lib/utils"
import * as float from "./lib/float"


export *from "./lib/cookie"
export * from "./lib/string"
export * from "./lib/url"
export * from "./lib/utils"
export * from "./lib/float"


export default (Vue: typeof _Vue): void => {
    Vue.prototype.$helpers = {...cookies, ...string, ...url, ...float, ...utils}
}

