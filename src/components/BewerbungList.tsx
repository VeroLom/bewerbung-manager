import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Table from "./UI/Table";

const BewerbungList = () => {
    const {bewerbungs, isLoading, error} = useTypedSelector(state => state.bewerbungs);
    const {fetchBewerbungs} = useActions();
    const captions = ["Company", "City", "Position", "Send date", "Response date", "Note", "Link"];

    useEffect(() => {
        fetchBewerbungs();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            {bewerbungs.length
                ? <Table
                    captions={captions}
                    items={bewerbungs}
                />
                : <div>No entries</div>
            }
        </div>
    );
};

export default BewerbungList;