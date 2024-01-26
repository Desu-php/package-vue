let token = () => '';

export default () => {
    function setTokenMethod(method: () => ''): void {
        token = method
    }

    function getToken(){
        return token()
    }

    return {
        setTokenMethod,
        getToken
    }

}