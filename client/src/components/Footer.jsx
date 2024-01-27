import logo from '../assets/ndseLogoPrimary.png'


function Footer() {




    return (
        <>
        <footer>
                <div className="row">
                    <div className="column">
                        <h3>Product</h3>
                    </div>
                    <div className="column">
                        <h3>Information</h3>
                    </div>
                    <div className="column">
                        <h3>Company</h3>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="row">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookies</a>
                </div>
        </footer>
        </>
    )
}

export {Footer}