// /*TO DO:
// 1.container selot
// 2.scrape session web
// 3.rengkai session => url
// 4. fetch container
//  */

// import "../../assets/css/slot.css";
// import {
//     FaShoppingCart,
//     FaRegBookmark,
//     FaStar,
//     FaFireAlt,
// } from "react-icons/fa";

// export default function Slot(slot) {
//     return (
//         <div className='slotlist'>
//             <div key={slotid} className='slotCard'>
//                 <img src='slot.image' alt='slot-img' className='slotImage' />
//                 <FashoppingCard className={"slotcard__cart"} />
//                 <FaRegBookmark className={"slotcard__depo"} />
//                 <FaFireAlt className={"slotcard__withdraw"} />
//                 <div className='slotcard__content'>
//                     <h3 className='productName'>{slot.name}</h3>
//                     <div className='displayStack__1'>
//                         <div className='slotPrice'>${slot.price}</div>
//                     </div>
//                     <div className='displayStack__2'>
//                         <div className='productRating'>
//                             {[...Array(props.rating)].map((index) => (
//                                 <FaStar id={index + 1} key={index} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
