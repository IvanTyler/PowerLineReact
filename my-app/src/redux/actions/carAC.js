import axios from "axios";
import { GET_DATA_CAR } from "../types/carTypes";

export const setDataCar = (car) => {
    return {
        type: GET_DATA_CAR,
        payload: car
    }
}

export const getDataCar = () => async (dispatch) => {
    const dataCar = await axios.get('http://109.236.74.74:9900/getdata')
    dispatch(setDataCar(dataCar.data))
}