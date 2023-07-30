import { useParams } from "react-router-dom";
import "../../assets/css/slot.css";
import {
    FaShoppingCart,
    FaRegBookmark,
    FaStar,
    FaFireAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { LocalURL } from "../../util/urlconf";

export default function Slot(props) {
    const { gameName } = useParams();

    return (
        <div className='slot-frame'>
            <Link style={{ color: "var(--main-white)" }} to={LocalURL}>
                <div className='slot-back'>
                    <h4>Go Back Home</h4>
                </div>
            </Link>
            <iframe
                src={`https://demogamesfree-asia.pragmaticplay.net/gs2c/openGame.do?lang=id&cur=IDR&gameSymbol=${gameName}&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99`}
                frameBorder='0'
                className='fullscreen'
            ></iframe>
        </div>
    );
}
