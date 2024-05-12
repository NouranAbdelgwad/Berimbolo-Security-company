import logo from "../images/logo-no-background.png"
import "../css/style.css"
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="./index.html">
                    <img src={logo} className="logo-img" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-disabled="true" href="#Contact">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}