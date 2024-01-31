import Option from "./models/Option.ts";
import useOptions from "./composeables/useOptions.ts";
import axios, {InternalAxiosRequestConfig} from "axios";

export default {
    install(app: any, options: Option) {
        const {setOption} = useOptions()

        setOption(options)

        app.config.globalProperties.$http = axios.create({
            baseURL: options.baseUrl
        })

        app.config.globalProperties.$http.interceptors.request.use(  async(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
            const token = await options.getToken();

            if (token){
                config.headers.set(`Authorization: Bearer ${token}`)
            }

            return config
        })
    }
};