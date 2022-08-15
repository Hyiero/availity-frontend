import axios from 'axios';
import * as React from 'react';
import LispCodeForm from "../../components/list-code-form/LispCodeForm";
import DataTable from "../../components/tables/DataTable";


export default function ProblemFourPage() {
    const dataTableHeaders = ['', 'Code', 'Valid'];
    const [dataTableRows, setdataTableRows] = React.useState([]);

    const handleRowDelete = (rowIndex) => {
        setdataTableRows(dataTableRows.filter((v, i) => i !== rowIndex));
    }

    const handleListCodeSubmission = (lispCode) => {
        checkCodeValidity(lispCode);
    }

    const checkCodeValidity = (lispCode) => {
        const config = { headers: { 'Content-Type': 'application/json'} };

        axios.post(`${process.env.REACT_APP_BASEURL}api/lisp/validate/code`, lispCode, config)
        .then(response => {
            setdataTableRows([ ...dataTableRows, { cells: [lispCode, response.data.toString()] } ])
        });
    }

    return (
        <div className='main-content'>
            <LispCodeForm onSubmitCode={handleListCodeSubmission}/>
            <br/>
            <div style={{'maxWidth': '50%'}}>
                <DataTable 
                    headers={dataTableHeaders} 
                    rows={dataTableRows} 
                    onRowDelete={handleRowDelete}
                    />
            </div>
        </div>
    )
}