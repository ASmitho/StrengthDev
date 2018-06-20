export default function loadingReducer(state={
    isLoading: false,
    }, action) {
     switch(action.type){
        default:{
            return state
        }
        case "LOADING":{
            return {isLoading: true}
        }
        case "NOT_LOADING": {
            return {isLoading: false}
        }
    }
}