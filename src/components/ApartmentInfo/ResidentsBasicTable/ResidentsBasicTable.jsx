import React from 'react'
import './ResidentsBasicTable.css'
import { Link } from 'react-router-dom'

const ResidentsBasicTable = ({ residents }) => {
    return (
        <>
            <div className='basic-data-grid-title'>
                Residents
                <Link to='/new-resident' className='link'>
                    Add New
                </Link>
            </div>
            <div className='residents-table-responsive table-container'>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Resident</td>
                            <td>Birthday</td>
                            <td>Budget</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {residents.map((ma, i) => (
                            <tr key={i}>
                                <td>{ma.residentId}</td>
                                <td>{ma.firstName + ' ' + ma.lastName}</td>
                                <td>{ma.dateOfBirth}</td>
                                <td>{ma.budget}</td>
                                <td>
                                    <button className='action-btn edit'>
                                        View
                                    </button>
                                    <button className='action-btn delete'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ResidentsBasicTable
