import {Dispatch} from "redux";
import {BewerbungAction, BewerbungActionTypes} from "../../types/bewerbung";
import axios from "axios";

export const fetchBewerbungs = () => {
    return async (dispatch: Dispatch<BewerbungAction>) => {
        try {
            dispatch({type: BewerbungActionTypes.FETCH_BEWERBUNG_REQUEST});
            const response = await axios.get("http://localhost:3333/bewerbungs");
            dispatch({type: BewerbungActionTypes.FETCH_BEWERBUNG_SUCCESS, payload: response.data});
        } catch (e: any) {
            dispatch({type: BewerbungActionTypes.FETCH_BEWERBUNG_FAIL, payload: e.message});
        }
    }
}