import "../../assets/css/content.css";

import { LocalURL } from "../../util/urlconf";

import { Link } from "react-router-dom";

//img
import zuesImg from "../../assets/image/gates-of-olympus.png";
import gatotImg from "../../assets/image/gates-of-gatot-kaca.png";
import spacemanImg from "../../assets/image/spaceman.png";
import starlightImg from "../../assets/image/starlight-princess.png";
import bonanzaxmasImg from "../../assets/image/sweet-bonanza-xmas.png";
import bonanzaImg from "../../assets/image/sweet-bonanza.png";
import princesImg from "../../assets/image/vs20schristmas.png";
import mahjong from "../../assets/image/mahjong-panda.png";
import diamond from "../../assets/image/diamond-strike.png";
import bomb from "../../assets/image/bomb-bonanza.png";
import fruit from "../../assets/image/fruit-party.png";

export default function Content() {
    return (
        <>
            <h4 className='list-slot'>List Slot</h4>
            <div className='content-section'>
                <div id='slot'>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "v20olympgate"}>
                            <img src={zuesImg} alt='' />
                            <p>Gates Of Olympus</p>
                        </Link>
                    </div>
                    <div className='slot-item'>
                        <a href='https://bit.ly/slotdemopp3'>
                            <img src={spacemanImg} alt='' />
                            <p>Spaceman</p>
                        </a>
                    </div>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "v20starlight"}>
                            <img src={starlightImg} alt='' />
                            <p>Starlight Princes</p>
                        </Link>
                    </div>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "v20fruitsw"}>
                            <img src={bonanzaImg} alt='' />
                            <p>Bonanza</p>
                        </Link>
                    </div>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "v20sbxmas"}>
                            <img src={bonanzaxmasImg} alt='' />
                            <p>Bonanza Xmas</p>
                        </Link>
                    </div>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "v20starlight"}>
                            <img src={princesImg} alt='' />
                            <p>Princess</p>
                        </Link>
                    </div>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "v20gatotgates"}>
                            <img src={gatotImg} alt='' />
                            <p>Gatot</p>
                        </Link>
                    </div>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "vs1024mahjpanda"}>
                            <img src={mahjong} alt='' />
                            <p>Mahjong Panda</p>
                        </Link>
                    </div>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "vs20fruitparty"}>
                            <img src={fruit} alt='' />
                            <p>Fruit Party</p>
                        </Link>
                    </div>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "vs15diamond"}>
                            <img src={diamond} alt='' />
                            <p>Diamond</p>
                        </Link>
                    </div>
                    <div className='slot-item'>
                        <Link to={LocalURL + "slot/" + "vs25bomb"}>
                            <img src={bomb} alt='' />
                            <p>Bomb Bonanza</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
