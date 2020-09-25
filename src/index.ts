import _Vue from "vue"
import lib from "./lib";

export * from "./lib"


export default (Vue: typeof _Vue): void => {
    Vue.prototype.$helpers = {...lib}
}

