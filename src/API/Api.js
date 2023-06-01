
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5008'

const getAllStations = () => {
    return axios.get(`${BASE_URL}/station`)
}

const getScheduleByStations = (arrival, depart) => {
    return axios.get(`${BASE_URL}/schedule`, { params: { arrival, depart } })
}

export { getAllStations, getScheduleByStations }