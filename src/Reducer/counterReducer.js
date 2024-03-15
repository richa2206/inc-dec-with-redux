import { SET_COUNTER, INC_COUNTER, DEC_COUNTER} from "../Action/counterAction";

const initialState = {
    count:0
};

export const counter = (state = initialState, action) =>{
    switch(action.type){
    case INC_COUNTER:
        return{
            ...state, 
            count:state.count+1
        };
    case DEC_COUNTER:
        return{
            ...state,
            count:state.count-1
        };
    default:
        return state;
    }
}
