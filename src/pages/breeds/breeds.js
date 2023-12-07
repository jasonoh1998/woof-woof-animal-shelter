import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './breeds.css';

function Breeds() {
    const [breeds, setBreeds] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // api is from https://dog.ceo/dog-api/
        fetch('https://dog.ceo/api/breeds/list/all') // shows all breed types
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    setBreeds(Object.keys(data.message));
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="main-content">
                <h1>Select Breeds</h1>
                <div className="breed-grid">
                    {breeds.map(breed => (
                        <div key={breed} className="breed-item" onClick={() => navigate(`/breed/${breed}`)}>
                            <div>{breed}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Breeds;