export interface IRequest<T> {
    readonly data : T | T[],
    readonly loading: boolean,
    readonly error: boolean
}