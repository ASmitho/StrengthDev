export default function passReducer(state={
    password: "",
    confirmPass: ""
    }, action) {
     switch(action.type){
        default:{
            return state
        }
        case "PASSWORD":{
            return {...state, password: action.payload}
        }
        case "CONFIRM_PASS": {
            return {...state, confirmPass: action.payload}
        }
    }
}