import React, { Component } from 'react';
import { storeData } from '../../JsonData/data';
import NavbarHeader from '../../components/navbarHeader';
import '../../App.css'

function searchData(search) {
    return function (x) {
        return x.name.toLowerCase().includes(search.toLowerCase()) || x.department.toLowerCase().includes(search.toLowerCase()) || !search ;
    }
}

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: storeData,
            search: ''
        }
    }
    updateSearchEvent = (event) => {
        this.setState({ search: event.target.value })
        console.log(event.target.value, 'saiii')
    }
    render() {
        const { data, search } = this.state


        const diplayIfo = data.filter(searchData(search)).map((item, s) => {
            return (
                <div key={s}>
                    <div className="col-lg-10 m-1 text-center m-auto">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <h5 class="card-title">{item.department}</h5>
                                <p class="card-text">Some quick example text to build on <br />the card title and make up the bulk <br />of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })

        return (
            <div>
            <NavbarHeader />
                <div className="profileView">

                    <form class="form-inline my-2 my-xs-4">
                        <input type="text" placeholder="search"
                            className="input-search" 
                            value={this.state.search}
                            onChange={this.updateSearchEvent}
                        />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div className="row m-2 ml-3 text-center">
                    {diplayIfo}
                </div>
            </div>
        )
    }
}
