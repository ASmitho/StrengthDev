export default function userReducer(state={
    squat: [],
    deadlift: [],
    overheadPress: [],
    benchPress: [],
    barbellRow: [],
    }, action) {

     switch(action.type){
        default:{
            return state
        }
        case "ADD_BENCH": {
            return { 
                ...state,
                benchPress: [...state.benchPress, action.payload]}
        }
        case "ADD_DEADLIFT": {
            return { 
                ...state,
                deadlift: [...state.deadlift, action.payload]}
        }
        case "ADD_OVERHEAD": {
            return { 
                ...state,
                overheadPress: [...state.overheadPress, action.payload]}
        }
        case "ADD_SQUAT": {
            return { 
                ...state,
                squat: [...state.squat, action.payload]}
        }
        case "ADD_ROW": {
            return { 
                ...state,
                barbellRow: [...state.barbellRow, action.payload]}
        }
    }
}