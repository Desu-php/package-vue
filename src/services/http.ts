import {getCurrentInstance} from "vue";

export default function () {
    return getCurrentInstance().appContext.config.globalProperties.$http
};
