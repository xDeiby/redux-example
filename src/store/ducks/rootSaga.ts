import { all, takeLatest } from "redux-saga/effects";
import { load } from "./users/sagas";
import { UsersTypes } from "./users/types";


export default function* rootSaga() {

    return yield all([
        takeLatest(UsersTypes.LOAD_REQUEST, load)
    ])
}