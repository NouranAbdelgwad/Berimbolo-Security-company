export default function ContactUs() {
    return (
        <>
            <div className="container" id="Contact">
                <div className="contact-container mt-3">
                    <div className="">
                        <h2>Contact Information</h2>
                        <div className="contact-info">
                            <div className="m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt benifit-icon" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                <h6 className="d-inline contact">
                                    <a href="https://www.google.com/maps?q=123+Main+Street,+Anytown+USA+12345" target="_blank" rel="noopener noreferrer">
                                        123 Main Street, Anytown EGY 12345
                                    </a>
                                </h6>
                            </div>
                            <div className="m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone benifit-icon" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg> <h6 className="d-inline contact">01023456789</h6>
                            </div>
                            <div className="m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at benifit-icon" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                </svg>
                                <h6 className="d-inline contact">berelebolo@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form p-3 mb-5 bg-body-light">
                        <h2 className="mt-3" >Get In Touch</h2>
                        <p>You can reach us anytime</p>
                        <form action="#" method="get">
                            <div className="d-flex">
                                <input type="text" name="first-name" className="form-control w-45 m-2" placeholder="First name" />
                                <input type="text" name="last-name" className="form-control w-45 m-2" placeholder="Last name" />
                            </div>
                            <div className="d-flex">
                                <input type="email" name="email" className="form-control w-90 m-2" placeholder="Email" />
                            </div>
                            <div className="d-flex">
                                <input type="phone" name="phone" className="form-control w-90 m-2" placeholder="Phone" />
                            </div>
                            <div className="d-flex">
                                <textarea name="message" className="form-control w-90 m-2" placeholder="Message" />
                            </div>
                            <div className="row m-2">
                                <button type="submit" className="send" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}