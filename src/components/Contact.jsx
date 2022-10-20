import styles from "./styles/Contact.module.css";
import CardContact from "./CardContact";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contacts] = useState([
    {
      id: 1,
      img: "https://i.postimg.cc/5y4XS0b0/Adan.png",
      name: "Adan Rodriguez",
      job: "Tuki's Collaborator",
      git: "https://github.com/adan-rodriguez",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/gjgnSW2K/Cecilia.jpg",
      name: "Cecilia Kuckiewicz",
      job: "Tuki's Collaborator",
      git: "https://github.com/kucki",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/59gYNwSF/Gabriel.png",
      name: "Gabriel Maguna",
      job: "Tuki's Collaborator",
      git: "https://github.com/Gabrielmaguna00",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/qRfny4Nh/Mariano.jpg",
      name: "Perez Mariano",
      job: "Tuki's Collaborator",
      git: "https://github.com/marianorp",
    },
  ]);

  return (
    <div className={styles.container_contact}>
          <Link to="/home">
        <button className={styles.boton__back}>BACK</button>
      </Link>
      <div className={styles.container_cards}>
        {contacts.map((cardcontact) => {
          return (
            <CardContact
              key={cardcontact.id}
              img={cardcontact.img}
              name={cardcontact.name}
              job={cardcontact.job}
              git={cardcontact.git}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contact;

// export default function Contact(){
//     return (

// <div className={styles.container}>
//     <div className={styles.main_card}>
//         <div className={styles.cards}>
//             <div className={styles.card}>
//                 <div className={styles.content}>
//                     <div className={styles.img}>
//                         <img src="https://i.postimg.cc/5y4XS0b0/Adan.png" alt="" />
//                     </div>
//                     <div className={styles.details}>
//                         <div className={styles.name}>Adan Rodriguez</div>
//                         <div className={styles.job}>Tuki's Collaborator</div>
//                     </div>
//                     <div className={styles.media_icons}>
//                         <a title="github.com/adan-rodriguez" href="https://github.com/adan-rodriguez"><img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
//                     </div>
//                 </div>
//             </div>

//                 <div className={styles.card}>
//                 <div className={styles.content}>
//                     <div className={styles.img}>
//                         <img src="https://i.postimg.cc/gjgnSW2K/Cecilia.jpg" alt="" />
//                     </div>
//                     <div className={styles.details}>
//                         <div className={styles.name}>Cecilia Kuckiewicz</div>
//                         <div className={styles.job}>Tuki's Collaborator</div>
//                     </div>
//                     <div className={styles.media_icons}>
//                     <a title="github.com/kucki90" href="https://github.com/kucki90"><img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
//                     </div>
//                 </div>
//             </div>

//                    <div className={styles.card}>
//                 <div className={styles.content}>
//                     <div className={styles.img}>
//                         <img src="https://i.postimg.cc/59gYNwSF/Gabriel.png" alt="" />
//                     </div>
//                     <div className={styles.details}>
//                         <div className={styles.name}>Gabriel Maguna</div>
//                         <div className={styles.job}>Tuki's Collaborator</div>
//                     </div>
//                     <div className={styles.media_icons}>
//                     <a title="github.com/Gabrielmaguna00" href="https://github.com/Gabrielmaguna00"><img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
//                     </div>
//                 </div>
//             </div>

//                       <div className={styles.card}>
//                 <div className={styles.content}>
//                     <div className={styles.img}>
//                         <img src="https://i.postimg.cc/qRfny4Nh/Mariano.jpg" alt="" />
//                     </div>
//                     <div className={styles.details}>
//                         <div className={styles.name}>Perez Mariano</div>
//                         <div className={styles.job}>Tuki's Collaborator</div>
//                     </div>
//                     <div className={styles.media_icons}>
//                     <a title="github.com/marianorp" href="https://github.com/marianorp"><img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>

// </div>

//     )
// }
