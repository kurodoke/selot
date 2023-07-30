import "../../assets/css/header.css";
import logoSelotGacor from "../../assets/image/slotgacor777.png";

export default function Header() {
    return (
        <div id='header-section'>
            <img className='header-logo' src={logoSelotGacor} alt='' />

            <h3 className='subhero-title'>
                SEBAGAI SITUS SLOT INDONESIA MUDAH MAXWIN
            </h3>
            <p className='header-body'>
                Slot demo ialah permainan slot gratis tanpa deposit yang
                memiliki banyak game-game menarik dan mempunyai kualitas
                permainan yang anti lag. Beragam permainan ada disni, termasuk
                game slot yang ramai pecintanya seperti Gates Of Olympus,
                Starlight Princess, Sweet Bonanza, Starlght Christmas dan masih
                banyak lagi game demo slot pragmatic yang lain.Kamu dapat
                bermain sesuai yang kamu inginkan tanpa ada masalah apapun,
                karena pada situs slot demo pragmatic terlengkap ini kamu dapat
                melakukan apa saja yang kamu inginkan.
            </p>
        </div>
    );
}
