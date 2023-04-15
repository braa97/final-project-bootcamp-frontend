import { useParams } from 'react-router-dom'
import './Residents.css'
import React, { useEffect, useState } from 'react'
import ApiManager from '../../apiManager/apiManager'

const Residents = () => {
  const {apartmentName} = useParams()
  const [residents, setResidents] = useState([])

  useEffect(() => {
    const apiManger = new ApiManager()
    const getResidents = async() => {
      let tempResidents = await apiManger.getResidents(apartmentName)
      setResidents(tempResidents)
    }
    getResidents()
  }, [])
  
  
  return (
    <div>Residents</div>
  )
}

export default Residents