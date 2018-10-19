import React, { Component } from 'react';

export default class FormMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: ''
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        const url = "http://92.175.11.66:3001/api/quests/movies/";

        fetch(url, config)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(`Le film a bien été ajouté avec l'ID ${data}`)
            }
        })
    }

    render() {
        return(
            <div className="row">
                <h3>Nouveau film</h3>

                <form onSubmit={this.submitForm}>
                    <div className="row">
                        <div className="input-field col l3 m6 s6">
                            <label htmlFor="name">Nom</label>
                            <input type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col l3 m6 s6">
                            <label htmlFor="poster">Poster</label>
                            <input type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col l3 m6 s6">
                            <label htmlFor="comment">Commentaire</label>
                            <textarea
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                                className="materialize-textarea"
                            />
                    </div>
                    </div>
                    <div>
                        <input type="submit" value="Envoyer" className="waves-effect waves-light btn" />
                    </div>
                </form>
            </div>
        )
    }
}