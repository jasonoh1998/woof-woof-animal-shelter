import { useEffect, useState } from 'react';
import './Modal.css'
import { useNavigate } from 'react-router-dom';

// using https://www.npmjs.com/package/react-snowfall
// this displays snow flakes
import Snowfall from 'react-snowfall';

const names = [
    'Emma', 'Noah', 'Olivia', 'Liam', 'Ava', 'William', 
    'Sophia', 'Mason', 'Isabella', 'James', 'Mia', 'Benjamin', 
    'Charlotte', 'Jacob', 'Amelia', 'Michael', 'Evelyn', 
    'Elijah', 'Harper', 'Ethan', 'Abigail', 'Alexander', 
    'Emily', 'Sebastian', 'Elizabeth', 'Matthew', 'Avery', 
    'Aiden', 'Sofia', 'Henry', 'Ella', 'Joseph', 'Madison', 
    'Jackson', 'Scarlett', 'Samuel', 'Victoria', 'John', 
    'Aria', 'David', 'Grace', 'Wyatt', 'Chloe', 'Luke', 'Camila',
    'Joanie',  'Ben', 'Zetta', 'Parker', 'Francisca', 'Kallie'
];

function Modal({ onClose, imageUrl }) {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * names.length);
        setName(names[randomIndex]);
    }, []);

    return (
        <div className="modal-box">
            <div className="snow-flake">
                <Snowfall 
                    snowflakeCount={1200}
                />
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <img src={imageUrl} alt="Modal Dog" />
                    <div className="modal-text-content">
                        <h2>Woof Woof I am {name}!</h2>
                        <p>Would you like to adopt me?</p>
                        <button className="adopt-button" onClick={() => navigate("/contact")}>Adopt!</button>
                    </div>
                </div>
                <button className="modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;