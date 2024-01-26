import useToken from "./composeables/useOptions.ts";

interface Options {
    getToken: () => ''
}

export default {
    install(app: any, options: Options) {
        const {setTokenMethod} = useToken()

        setTokenMethod(options.getToken)

        console.log('app', app.component)
        console.log('options.getToken', options.getToken)
    }
};