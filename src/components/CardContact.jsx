import React from "react"
import styles from "./styles/Contact.module.css"


// export default function CardContact(){

   
//     return (


        // <div className={styles.container}>
        //     <div className={styles.main_card}>
        //         <div className={styles.cards}>
        //             <div className={styles.content}>
        //                 <div className={styles.img}>
        //                     <img src="https://i.postimg.cc/5y4XS0b0/Adan.png" alt="" />  
        //                 </div>
        //                 <div className={styles.details}>
        //                     <div className={styles.name}>Adan Rodriguez</div>
        //                     <div className={styles.job}>Tuki's Collaborator</div>    
        //                 </div>
        //                 <div className={styles.media_icons}>
        //                     <a title="github.com/adan-rodriguez" href="https://github.com/adan-rodriguez"><img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>       
        // </div>

    
        

//     )
// }

const CardContact = (props) => {

    return (
            <div className={styles.cards}>
                <div className={styles.content}>
                    <div className={styles.img}>
                        <img 
                            src={props.img}
                            alt="" />  
                    </div>
                    <div className={styles.details}>
                        <div className={styles.name}>{props.name}</div>
                        <div className={styles.job}>{props.job}</div>    
                    </div>
                    <div className={styles.media_icons}>
                        <a title="" href={props.git}>
                        <img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
                    </div>
                </div>
            </div>
     

    )
}

export default CardContact;