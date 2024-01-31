import Option from "../models/Option.ts";

let option: Option

export default () => {
    function setOption(value: Option): void {
        console.log('setted', value)
        option = value
    }

    function getOption(): Option {
        return option
    }

    return {
        getOption,
        setOption
    }
}