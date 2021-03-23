import { Component } from 'react';

import * as petService from '../../service/petService';

import Pet from '../Pet/Pet';
import CategoryNavigation from '../CategoryNavigation/CategoryNavigation';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory:'all'
        }
    }

    componentDidMount() {
        petService.getAll()
            .then(res => this.setState({ pets: res }))
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;

        if(prevProps.match.params.category == category) {
            return;
        }

        petService.getAll(category)
            .then(res => this.setState({ pets: res, currentCategory: category}))
    }

    render() {
        console.log(this.state.pets);
        return (
            <section className="dashboard" >
                <h1>Dashboard</h1>
                <CategoryNavigation />
                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet
                            key={x.id}
                            id={x.id}
                            name={x.name}
                            description={x.description}
                            imageURL={x.imageURL}
                            category={x.category}
                            likes={x.likes}
                        />
                    )}
                </ul>
            </section>
        );
    }

}

export default Categories;