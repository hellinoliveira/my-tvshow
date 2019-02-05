import React, { Component } from 'react'

import api from './Api'
import { Redirect } from 'react-router-dom'

const statuses = {
    'watched': 'Assitido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class NewSeries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genres: [],
            isLoading: false
        }
        this.saveSeries = this.saveSeries.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        api.loadGenres()
            .then((res) => {
                this.setState({
                    isLoading: false,
                    genres: res.data
                })
            })
    }

    saveSeries() {
        const NewSeries = {
            name: this.refs.name.value,
            status: this.refs.status.value,
            comments: this.refs.comments.value,
            genre: this.refs.genre.value,
        }
        api.saveSeries(NewSeries)
            .then((res) => {
                this.setState({
                    redirect: '/series/' + this.refs.genre.value
                })
            })
    }
    render() {
        return (
            <section className="intro-section">
                {
                    this.state.redirect &&
                    <Redirect to={this.state.redirect} />
                }
                <h1>Editar série</h1>
                <form>
                    Nome:<input ref='name' type="text" className="form-control" />
                    Status:
                    <select className="form-control" ref='status'>
                        {Object
                            .keys(statuses)
                            .map(key => <option key={key} value={key}>{statuses[key]}</option>)
                        }
                    </select>
                    Gênero
                    <select ref='genre' className="form-control" >
                        {this.state.genres
                            .map(key => <option key={key} value={key}>{key}</option>)
                        }
                    </select>
                    Comentários: <textarea ref='comments' className="form-control"  >
                    </textarea>

                    <button type="button" onClick={this.saveSeries} className="btn btn-default">Salvar</button>
                </form>
            </section>
        )
    }
}

export default NewSeries