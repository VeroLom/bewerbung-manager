import {BewerbungAction, BewerbungActionTypes, BewerbungState} from "../../types/bewerbung";

const initialState: BewerbungState = {
    bewerbungs: [],
    isLoading: false,
    error: null,
}

export const bewerbungReducer = (state = initialState, action: BewerbungAction) => {
    switch (action.type) {
        case BewerbungActionTypes.FETCH_BEWERBUNG_REQUEST:
            return {...state, isLoading: true}
        case BewerbungActionTypes.FETCH_BEWERBUNG_SUCCESS:
            return {...state, isLoading: false, bewerbungs: action.payload}
        case BewerbungActionTypes.FETCH_BEWERBUNG_FAIL:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state
    }
};
