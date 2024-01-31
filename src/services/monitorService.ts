import http from "./http.ts";

export function getList(page: number) {
    return http().get('monitor/list', {
        page
    })
}

export function store(payload: object){
    return http().post('monitor', {
        data: payload
    })
}