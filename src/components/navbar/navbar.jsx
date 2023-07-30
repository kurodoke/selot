import "../../assets/css/navbar.css";
import { LocalURL } from "../../util/urlconf";
import { Link } from "react-router-dom";
import logoSelotGacor from "../../assets/image/slotgacor777.png";

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link to={LocalURL}>
                <div className='nav-logo'>
                    <img src={logoSelotGacor} alt='' />
                </div>
            </Link>
            <div className='nav-body'>
                <Link to={LocalURL}>
                    <h4
                        onClick={(e) => {
                            window.scrollTo({
                                top: document.querySelector("#header-section")
                                    .offsetTop,
                                behavior: "smooth",
                            });
                        }}
                    >
                        Home
                    </h4>
                </Link>
                <Link to={LocalURL}>
                    <h4
                        onClick={(e) => {
                            window.scrollTo({
                                top: document.querySelector(".list-slot")
                                    .offsetTop,
                                behavior: "smooth",
                            });
                        }}
                    >
                        Slot
                    </h4>
                </Link>
                <Link to={LocalURL + "deposit"}>
                    <h4>Deposit</h4>
                </Link>
                <Link to={LocalURL + "withdraw"}>
                    <h4>Withdraw</h4>
                </Link>
            </div>
        </nav>
    );
}
