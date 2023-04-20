import './ResidentsTable.css'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ResidentsTable = ({ residents }) => {
    const filteredResidents = residents.map((r) => {
        return {
            id: r.residentId,
            residentName: r.firstName + ' ' + r.lastName,
            birthday: r.dateOfBirth,
            budget: `₪ ${r.budget > 999? (r.budget / 1000).toFixed(1) + 'k': r.budget}`,
            img: r.image,
        }
    })
    const [rows, setRows] = useState(filteredResidents)

    function handleDelete(id) {
        setRows(rows.filter((r) => r.id !== id))
        console.log(rows.length)
    }

    const columnsTitles = [
        { field: 'id', headerName: 'ID', width: 80 },
        {
            field: 'resident',
            headerName: 'Resident',
            width: 230,
            renderCell: (params) => {
                return (
                    <div className='cell-with-img'>
                        <img
                            className='cell-img'
                            src={params.row.img}
                            alt='avatar'
                        />
                        {params.row.residentName}
                    </div>
                )
            },
        },
        {
            field: 'birthday',
            headerName: 'Birthday',
            width: 150,
        },

        {
            field: 'budget',
            headerName: 'Budget',
            width: 130,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 180,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link
                            to='/apartmentId/residentId'
                            style={{ textDecoration: 'none' }}
                        >
                            <button className='viewButton'>View</button>
                        </Link>
                        <button
                            className='deleteButton'
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </button>
                    </div>
                )
            },
        },
    ]

    return (
        <>
            <div className='datatable'>
                <div className='data-grid-title'>
                    Residents
                    <Link to='/new-resident' className='new-resident-link'>
                        Add New
                    </Link>
                </div>
                <DataGrid
                    className='datagrid'
                    rows={rows}
                    columns={columnsTitles}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default ResidentsTable
