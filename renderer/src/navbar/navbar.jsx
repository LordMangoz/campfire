function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">very cool navigation</a>
                <button className="navbar-toggler" type="button" data-bs-toogle="collapse" data-bs-target="#somethingGoesHereMaybe" aria-expanded= "false" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Statistics</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true" href="#">disabled one what does that do</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Settings</a>
                        </li>

                        <li className="nav-link dropdown">
                            <a className="nav-link dropdown-toogle" href="#" data-bs-toggle = "dropdown" aria-expanded="false">dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">theoretically some action</a></li>
                            </ul>
                        </li>
                    </ul>   
                </div> 
            </div>
        </nav>
    )
}

export default Navbar;