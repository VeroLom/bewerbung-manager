import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const BewerbungList = () => {
    const {bewerbungs, isLoading, error} = useTypedSelector(state => state.bewerbungs);
    const {fetchBewerbungs} = useActions();

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
                ? <table>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>City</th>
                        <th>Position</th>
                        <th>Send date</th>
                        <th>Response date</th>
                        <th>Note</th>
                        <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                        {bewerbungs.map(bewerbung =>
                            <tr>
                                <td>{bewerbung.company}</td>
                                <td>{bewerbung.city}</td>
                                <td>{bewerbung.position}</td>
                                <td>{bewerbung.sendDate}</td>
                                <td>{bewerbung.responseDate}</td>
                                <td>{bewerbung.note}</td>
                                <td>{bewerbung.link}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                : <div>No entries</div>
            }
        </div>
    );
};

export default BewerbungList;