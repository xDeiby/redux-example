import { Reducer } from "redux";
import { IUser } from "../../../interfaces/user/IUser";
import { IUserState, UsersTypes } from "./types";

const initialState : IUserState = {
    data: [],
    error: false,
    loading: false
}


const reducer : Reducer<IUserState>  = (state = initialState, action) => {

    switch(action.type){
        
        case UsersTypes.LOAD_FAILURE:
            return {
                ...state,
                data: action.payload,
                error: true,
                loading: false
             }
        
        case UsersTypes.LOAD_REQUEST:
            return {
                ...state,
                loading: true
            };
        
        case UsersTypes.LOAD_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: false,
                loading: false
            };
        
        case UsersTypes.DELETE_USER:
            return {
                ...state,
                data: (state.data as IUser[]).filter( (user : IUser) => user.id !== action.payload.id)
            }

        default:
            return state;
    }
}

export default reducer;