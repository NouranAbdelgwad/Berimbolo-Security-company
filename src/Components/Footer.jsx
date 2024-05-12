import logo from "../images/logo-no-background.png"

export default function Footer() {
    return (
        <footer className="bg-body-tertiary p-4 mt-3 container-fluid">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img className="footer-img row" src={logo} alt="logo" />
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <h6><b><a href="#" className="link-style">Our services</a></b></h6><br />
                        <ul className="text-secondary list ">
                            <li>Security risk assessments </li>
                            <li>Sale and installation of security systems (alarms and CCTV) </li>
                            <li>Security system maintenance </li>
                            <li>24/7 monitoring of:<br />
                                o Alarm systems<br />
                                o CCTV footage </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h6><b>Our value</b></h6><br />
                        <ul className="text-secondary list list-unstyled">
                            <li>Berimbolo Security sell and install security systems for homes and small businesses</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt m-2" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                            <h6 className="d-inline"><b>Location</b></h6>
                        </div>
                        <ul className="text-secondary list list-unstyled m-3">
                            <li>
                                <p>
                                    <a href="https://www.google.com/maps?q=123+Main+Street,+Anytown+USA+12345" target="_blank" rel="noopener noreferrer">
                                        123 Main Street, Anytown EGY 12345
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="text-secondary text-center"> &copy; All rights reserved for Nouran Abdelgwad •  2024</p>
            </div>
        </footer>
    )
}