import {Api} from "../../services/api.ts"
import { IUser } from "./types.ts";

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage () {
    const json = localStorage.getItem("u")

    if(!json) {
        return null;
    }

    const user = JSON.parse(json)
    console.log('uzi', user);

    return user ?? null;
}


export function LoginReq (email: string, password: string) {
    const emailOfc = "iandev@darkmail.com"
    const passwordOfc = "darkdivdev"

    if (email === emailOfc && password === passwordOfc){
        return true
    }else {
        return null
    }
}

export async function LoginRequest (email: string, password: string) {

    try {
        const request = await Api.post("login", {email, password});

        return request.data;

    } catch (error) {
        return null;
    }

}