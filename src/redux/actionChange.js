import {NAME, EMAIL} from "./actiontype";


export const name = (data) => {
    return {
        type: NAME,
        payload: data
    }
}

export const email = (data) => {
    return {
        type: EMAIL,
        payload: data
    }
}