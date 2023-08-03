import {NAME, EMAIL} from "./actiontype";


const initial = {
    name: "",
    email: ""
}

const reducer = (state = initial, action) => {
    switch(action.type){
        case NAME: 
            return {
                ...state, name: action.payload
            }
        case EMAIL:
            return {
                ...state, email: action.payload
            }
        default:
            return {
                ...state
            }
    }
}