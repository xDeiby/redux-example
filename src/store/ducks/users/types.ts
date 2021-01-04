// Actions types

import { IRequest } from "../../../interfaces/sagas/IRequest";
import { IUser } from "../../../interfaces/user/IUser";

export enum UsersTypes {
    LOAD_REQUEST = "@users/LOAD_REQUEST",
    LOAD_SUCCESS = "@users/LOAD_SUCCESS",
    LOAD_FAILURE = "@users/LOAD_FAILURE",
    DELETE_USER = "@users/DELETE_USER"
}

export interface IUserState extends IRequest<IUser>{};