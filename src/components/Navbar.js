import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { auth } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


function Navbar() {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const userEmail = sessionStorage.getItem('email');
        if (token) {
            setIsAuthenticated(true);
            setUser(userEmail);
        }
    }, []);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const token = await result.user.getIdToken();

            // we are only storing token value here
            // you can store whole json but that is not very efficient
            // as we are using firebase
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('email', result.user.email);
            navigate("/main");
        } catch (error) {
            console.error(error);
        }
    };

    const logOut = async() => {
        // clera out session storages
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('email');
        // set auth state back to false
        setIsAuthenticated(false);
        // use signOut to exit firebase login session
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            console.error(error);
        });
    }

    const handleModalClose = (e) => {
        if (e.target.className === "modal-menu") {
            setShowModal(false);
        }
    }

    return (
        <div className="navbar-fixed">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <div className="navbar-logo-text">Woof Woof Animal Shelter</div>
                        <div className="navbar-logo-text-small">WWAS</div>
                    </Link>
                    {
                        isAuthenticated 
                        ? <div onClick={() => setShowModal(true)} className="user-email">{user}</div>
                        : <button onClick={signInWithGoogle} className="login-btn">Login</button>
                    }
                </div>

                {showModal && 
                    <div className="modal-menu" onClick={handleModalClose}>
                        <div className="modal-menu-content">
                            <h2>Menu</h2>
                            <button onClick={logOut} className="signout-btn">Sign Out</button>
                        </div>
                    </div>
                }
            </nav>
            {
                isAuthenticated ?                 
                <nav className="sub-navbar">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/main" className="nav-item">Main</Link>
                    <Link to="/breeds" className="nav-item">Breeds</Link>
                    <Link to="/contact" className="nav-item">Contact Us</Link>
                </nav>
                :
                <></>
            }
        </div>
    );
}

export default Navbar;