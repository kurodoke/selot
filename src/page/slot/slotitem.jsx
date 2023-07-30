import { Slot } from "../slot/slot";
import konten from "../slot/content";

export default function Slotitem() {
    return (
        <div className='App'>
            {contents.map((contents) => (
                <Products
                    key={contents.id}
                    image={contents.image}
                    name={contents.name}
                    timeLeft={contents.timeLeft}
                />
            ))}
        </div>
    );
}
