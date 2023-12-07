import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import "./main.css"

function Main() {
    const [dogImages, setDogImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        // api is from https://dog.ceo/dog-api/
        fetch('https://dog.ceo/api/breeds/image/random/40') // can only go up to 50
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    setDogImages(data.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleImageError = (url) => {
        // remove url giving error from dogImages array
        setDogImages((currentImages) => currentImages.filter((image) => image !== url));
    };

    const handleImageClick = (url) => { // open modal
        setCurrentImage(url);
        setIsModalOpen(true);
    };

    const closeModal = () => { // close modal
        setIsModalOpen(false);
    };

    return (
        <div>
            <Navbar />
            <div className="main-content">
                <h1>Woof-Woof Gallery</h1>
                <div className="image-grid">
                    {dogImages.map((url, index) => (
                        <div key={index} className="image-item" onClick={() => handleImageClick(url)}>
                            <img 
                                src={url}
                                alt={`Doggy ${index}`} 
                                onError={() => handleImageError(url)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <Modal imageUrl={currentImage} onClose={closeModal} />
            )}
        </div>
    );
}

export default Main;