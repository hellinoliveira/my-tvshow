import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const apis = {
    loadGenders: () => api.get('genres'),
    saveSeries: (newSeries) => api.post('series', newSeries)
}

export default apis