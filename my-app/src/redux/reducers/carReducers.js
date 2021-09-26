import { GET_DATA_CAR } from "../types/carTypes";

import initState from "../initState";

const carReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_DATA_CAR:
            return { ...state, car: action.payload }
        default:
            return state
    }
}

export default carReducer