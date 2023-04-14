import { types } from "../types/Types"

export const AuthReducer = (state = {}, action) => {
    // console.log('Desde AuthReducer ',action);
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false,
            }
        case types.register:
            return {
                ...action.payload,
                ...state
            }
        case types.activity:
            return {
                ...action.payload,
                logged: true
            }
        default:
            return state
    }
}