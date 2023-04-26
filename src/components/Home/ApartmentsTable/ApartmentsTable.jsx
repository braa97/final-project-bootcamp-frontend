import './ApartmentsTable.css'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const apartments = [
    {
        id: 1,
        apartmentName: 'Sea View Residence',
        image: 'https://pix10.agoda.net/hotelImages/200/2009116/2009116_17042015020052512011.jpg?ca=6&ce=1&s=1024x768',
        address: {
            value: '15 Dizengoff St, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 6000,
        residents: [
            {
                residentId: 'RES001',
            },
            {
                residentId: 'RES002',
            },
            {
                residentId: 'RES003',
            },
        ],
    },
    {
        id: 2,
        apartmentName: 'Garden Oasis',
        image: 'https://thumbs.dreamstime.com/b/apartment-building-balconies-photoof-34869405.jpg',
        address: {
            value: '15 Rothschild Blvd, Tel Aviv, Israel',
            wazeLink: 'https://waze.com/ul/rt64kj8d',
        },
        budget: 4500,
        residents: [
            {
                residentId: 'RES004',
            },
            {
                residentId: 'RES005',
            },
        ],
    },
]

const ApartmentsTable = () => {
    const filteredApartments = apartments.map((apartment) => {
        return {
            id: apartment.id,
            apartmentName: apartment.apartmentName,
            budget: `₪ ${
                apartment.budget > 999
                    ? (apartment.budget / 1000).toFixed(1) + 'k'
                    : apartment.budget
            }`,
            address: apartment.address.value,
            img: apartment.image,
        }
    })

    const [rows, setRows] = useState(filteredApartments)

    function handleDelete(id) {
        setRows(rows.filter((r) => r.id !== id))
        console.log(rows.length)
    }

    const columnsTitles = [
        { field: 'id', headerName: 'ID', width: 80 },
        {
            field: 'apartmentName',
            headerName: 'Apartment Name',
            width: 230,
            renderCell: (params) => {
                return (
                    <div className='cell-with-img'>
                        <img
                            className='cell-img'
                            src={params.row.img}
                            alt='avatar'
                        />
                        {params.row.apartmentName}
                    </div>
                )
            },
        },
        {
            field: 'budget',
            headerName: 'Budget',
            width: 100,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 260,
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
            <div className='home-apartments-datatable'>
                <div className='data-grid-title'>
                    Apartments
                    <Link to='/new-resident' className='new-resident-link'>
                        Add New Apartment
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

export default ApartmentsTable
