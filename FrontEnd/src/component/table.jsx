import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const Table = ({ data }) => {
    const [names, setNames] = useState()
    
    // {Object.keys(data).map((key) => (
    //     setNames(...names, key)
    // ))}

    const columns = [
        // Object.keys(data[0]).map((key)=>(
        //     {
        //         name: key,
        //         selector: 'id',
        //         sortable: true,
        //     }
        // ))
        {
            name: "ID",
            selector: 'id',
            sortable: true,
        },
        {
            name: "Name",
            selector: 'name',
            sortable: true,
        },
        {
            name: "Image",
            selector: 'image',
            sortable: false,
        },
        {
            name: "Price",
            selector: 'price',
            sortable: true,
        },
    ];
    
    return(
        // console.log("e",Object.keys(data[0]))
        <DataTable
            title="Data Table Example"
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            responsive
            striped
            dense
            customStyles={{
                headRow: {
                style: {
                    backgroundColor: 'rgba(78, 115, 223, 0.1)',
                },
                },
                headCells: {
                style: {
                    fontWeight: 'bold',
                    color: '#5664d2',
                },
                },
            }}
        />
    )
}

export default Table