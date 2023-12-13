import React from 'react';
import './TableDe.css'
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const TableDe = () => {
    return (
        <table className="table-data text-color">
            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">
                        Evento
                    </th>
                    <th className="table-data__head-title table-data__head-title--big">
                        Descrição
                    </th>
                    <th className="table-data__head-title table-data__head-title--big">
                        Tipo Evento
                    </th>
                    <th className="table-data__head-title table-data__head-title--big">
                        Data
                    </th>
                </tr>
            </thead>

            <tbody>

            </tbody>


            
        </table>
    );
};

export default TableDe;