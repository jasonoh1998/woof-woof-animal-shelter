import Navbar from '../../components/Navbar';
import "./home.css"

function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content">
                <img src={`/main-logo.svg`} alt="Dog Logo" className="dog-logo"/>
                <h1>Woof Woof Welcome!</h1>
            </div>
        </div>
    );
}

export default Home;