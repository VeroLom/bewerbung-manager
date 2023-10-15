export enum BewerbungStatus {
    STATUS_NEW = "STATUS_NEW",
    STATUS_SENT = "STATUS_SENT",
    STATUS_RESULT_POSITIVE = "STATUS_RESULT_POSITIVE",
    STATUS_RESULT_NEGATIVE = "STATUS_RESULT_NEGATIVE",
    STATUS_RESULT_POSITION_CLOSED = "STATUS_RESULT_POSITION_CLOSED",
}

export interface Bewerbung {
    id: number;
    status: BewerbungStatus;
    company: string;
    city: string;
    position: string;
    sendDate?: string;
    responseDate?: string;
    note?: string;
    link: string;
}

export enum BewerbungActionTypes {
    FETCH_BEWERBUNG_REQUEST = "FETCH_BEWERBUNG_REQUEST",
    FETCH_BEWERBUNG_SUCCESS = "FETCH_BEWERBUNG_SUCCESS",
    FETCH_BEWERBUNG_FAIL = "FETCH_BEWERBUNG_FAIL",
}

export interface BewerbungState {
    bewerbungs: Bewerbung[],
    isLoading: boolean;
    error: null | string;
}

interface FetchBewerbungRequestAction {
    type: BewerbungActionTypes.FETCH_BEWERBUNG_REQUEST;
}

interface FetchBewerbungSuccessAction {
    type: BewerbungActionTypes.FETCH_BEWERBUNG_SUCCESS;
    payload: Bewerbung[];
}

interface FetchBewerbungFailAction {
    type: BewerbungActionTypes.FETCH_BEWERBUNG_FAIL;
    payload: string;
}

export type BewerbungAction = FetchBewerbungRequestAction | FetchBewerbungSuccessAction | FetchBewerbungFailAction;