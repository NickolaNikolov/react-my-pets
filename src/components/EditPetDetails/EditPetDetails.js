import {useEffect, useState} from 'react';
import * as petService from '../../service/petService';

import InputError from '../Shared/InputError/InputError';

const EditPetDetails = ({
    match
}) => {
    const [pet, setPet] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(res => setPet(res))
    }, [])

    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.description.value);
    }

    const onDescriptionChangeHandler = (e) => {
        e.preventDefault();
        if(e.target.value.length < 10) {
            setErrorMessage('Description too short!');
        } else {
            setErrorMessage('');
        }

    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img src={pet.imageURL} /></p>
            <form onSubmit={onDescriptionSaveSubmit}>
                <textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
                <InputError>{errorMessage}</InputError>
                <button className="button"> Save</button>
            </form>
        </section>
    );
};

export default EditPetDetails;