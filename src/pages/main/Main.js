import Navbar from '../../components/Navbar';
import "./Main.css"

function Main() {
    return (
        <div className="home-container">
            <Navbar />
            <div className="content">
                <img src={`/main-logo.svg`} alt="Dog Logo" className="dog-logo"/>
                <h1>Main!</h1>
            </div>
        </div>
    );
}

export default Main;