import React, {FC} from 'react';
import cl from "./Table.module.css";

interface TableProps {
    captions?: string[];
    items?: any[];
}

const Table: FC<TableProps> = ({captions, items}) => {
    return (
        <table className={cl.table}>
            {captions?.length &&
                <thead>
                    <tr>
                        {captions.map(caption => <th key={caption}>{caption}</th>)}
                    </tr>
                </thead>
            }
            {items?.length &&
                <tbody>
                {items.map(item =>
                    <tr key={item.id}>
                        <td>{item.company}</td>
                        <td>{item.city}</td>
                        <td>{item.position}</td>
                        <td>{item.sendDate}</td>
                        <td>{item.responseDate}</td>
                        <td>{item.note}</td>
                        <td>{item.link}</td>
                    </tr>
                )}
                </tbody>
            }
        </table>
    );
};

export default Table;