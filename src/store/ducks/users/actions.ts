import { action } from "typesafe-actions";
import { IUser } from "../../../interfaces/user/IUser";
import { UsersTypes } from "./types";


export const loadRequest = () => action(UsersTypes.LOAD_REQUEST);

export const loadSuccess = (users : IUser[]) => action(UsersTypes.LOAD_SUCCESS, users);

export const loadFailure = () => action(UsersTypes.LOAD_FAILURE);

export const deleteUser = (user: IUser) => action(UsersTypes.DELETE_USER, user);