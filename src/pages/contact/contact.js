import Navbar from '../../components/Navbar';
import './contact.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// not sure why but leaflet icon doesn't work
// copied solution online at https://stackoverflow.com/questions/73369796/marker-not-showing-in-react-leaflet
// this is leaftlet react issue, so the code has to be copied
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

function Contact() {
    return (
        <div className="contact-container">
            <Navbar />
            <div className="contact-content">
                <h1>Contact Us</h1>
                <div className="map-container">
                    <MapContainer center={[42.35028335, -71.10557727131746]} zoom={19} scrollWheelZoom={true} className="contact-map">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[42.35028335, -71.10557727131746]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                    <div className='contact-address'>
                        <p><b>Address</b>: 750 Commonwealth Ave, Boston, MA</p>
                        <p><b>Phone</b>: +1-999-999-9999</p>
                        <p><b>Fax</b>: +1-999-999-9999</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;