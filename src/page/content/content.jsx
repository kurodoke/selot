import "../../assets/css/content.css";

import zuesImg from "../../assets/image/gates-of-olympus.png";
import gatotImg from "../../assets/image/gates-of-gatot-kaca.png";
import spacemanImg from "../../assets/image/spaceman.png";
import starlightImg from "../../assets/image/starlight-princess.png";
import bonanzaxmasImg from "../../assets/image/sweet-bonanza-xmas.png";
import bonanzaImg from "../../assets/image/sweet-bonanza.png";
import princesImg from "../../assets/image/vs20schristmas.png";

export default function Content() {
    return (
        <div className='content-section'>
            <div className='slot'>
                <div className='slot-item'>
                    <a href='https://j4f.world/games/pragmatic-play/?game=vs20olympgate'>
                        <img src={zuesImg} alt='' />
                        <p>Zues</p>
                    </a>
                </div>
                <div className='slot-item'>
                    <a href='https://bit.ly/slotdemopp3'>
                        <img src={spacemanImg} alt='' />
                        <p>Spaceman</p>
                    </a>
                </div>
                <div className='slot-item'>
                    <a href='https://j4f.world/games/pragmatic-play/?game=vs20starlight'>
                        <img src={starlightImg} alt='' />
                        <p>Starlight Princes</p>
                    </a>
                </div>
                <div className='slot-item'>
                    <a href='https://j4f.world/games/pragmatic-play/?game=vs20fruitsw'>
                        <img src={bonanzaImg} alt='' />
                        <p>Bonanza</p>
                    </a>
                </div>
                <div className='slot-item'>
                    <a href='https://j4f.world/games/pragmatic-play/?game=vs20sbxmas'>
                        <img src={bonanzaxmasImg} alt='' />
                        <p>Bonanza Xmas</p>
                    </a>
                </div>
                <div className='slot-item'>
                    <a href='https://j4f.world/games/pragmatic-play/?game=vs20starlight'>
                        <img src={princesImg} alt='' />
                        <p>Princess</p>
                    </a>
                </div>
                <div className='slot-item'>
                    <a href='https://j4f.world/games/pragmatic-play/?game=vs20gatotgates'>
                        <img src={gatotImg} alt='' />
                        <p>Gatot</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
