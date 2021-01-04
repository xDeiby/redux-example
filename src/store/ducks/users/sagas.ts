import { put, call } from "redux-saga/effects"
import { IUser } from "../../../interfaces/user/IUser";
import api from "../../../services/api"
import { deleteUser, loadFailure, loadSuccess } from "./actions";
import { IUserState } from "./types";

export function* load(){

    try {
        const response : IUserState = yield call(api.get, "users");
        yield put( loadSuccess(response.data as IUser[]) );
        
    } catch (error) {
        yield put( loadFailure() );
    }
}
