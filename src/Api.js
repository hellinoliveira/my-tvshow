import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

const apis = {
    loadGenres: () => api.get('genres'),
    saveSeries: (newSeries) => api.post('series', newSeries),
    loadSeriesByGenre: (genre) => api.get('series?genre=' + genre),
    deleteSeries: (id) => api.delete('series/' + id),
    loadSeriesById: (id) => api.get('series/' + id),
    updateSeries: (serie) => api.put('series/' + serie.id, serie)
}

export default apis