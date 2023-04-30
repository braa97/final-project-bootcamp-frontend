import './ResidentsTable.css'
import '../../../global-styles/datagrid-table-media-queries.css'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Utility from '../../../utilities/utility/util'

const ResidentsTable = ({ residents }) => {
    const utility = new Utility()
    const [rows, setRows] = useState([])

    useEffect(() => {
        const filteredResidents = residents.map((resident) => {
            return {
                _id: resident._id,
                id: resident.residentId,
                residentName: resident.firstName + ' ' + resident.lastName,
                birthday: utility.dateFormatter(resident.dateOfBirth),
                budget: `₪ ${
                    resident.budget > 999
                        ? (resident.budget / 1000).toFixed(1) + 'k'
                        : resident.budget
                }`,
                img: resident.image,
            }
        })
        setRows(filteredResidents)
    }, [residents])

    function handleDelete(id) {
        setRows(rows.filter((r) => r.id !== id))
        console.log(rows.length)
    }

    const columnsTitles = [
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
                            to={`/apartments/apartment-info/resident/${params.row._id}`}
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
                    <Link
                        to='/apartments/apartment-info/resident/new-resident'
                        className='new-resident-link'
                    >
                        Add New Resident
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
