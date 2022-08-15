import * as React from 'react';
import DataTable from "../../components/tables/DataTable";
import UserRegistrationForm from '../../components/user-registration/UserRegistrationForm';


export default function ProblemFivePage() {
    const dataTableHeaders = ['', 'First Name', 'Last Name', 'NPI #', 'Business Address', 'Phone #', 'Email Address'];
    const initialRowsState = [];
    const [dataTableRows, setdataTableRows] = React.useState(initialRowsState);

    const handleRowDelete = (rowIndex) => {
        setdataTableRows(dataTableRows.filter((v, i) => i !== rowIndex));
    }

    const handleSubmission = (userInfo) => {
        setdataTableRows([ ...dataTableRows, { cells: [userInfo.firstName, userInfo.lastName, userInfo.npi, userInfo.address, userInfo.phoneNumber, userInfo.email] } ])
    }

    return (
        <div className='main-content'>
            <UserRegistrationForm onSubmit={handleSubmission}/>
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