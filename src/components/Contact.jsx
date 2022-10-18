import styles from "./styles/Contact.module.css"


export default function Contact(){
    return (
        <div className={styles.container}>
            <div className={styles.main_card}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.img}>
                                <img src="https://i.postimg.cc/5y4XS0b0/Adan.png" alt="" />  
                            </div>
                            <div className={styles.details}>
                                <div className={styles.name}>Adan Rodriguez</div>
                                <div className={styles.job}>Tuki's Collaborator</div>    
                            </div>
                            <div className={styles.media_icons}>
                                <a title="github.com/adan-rodriguez" href="https://github.com/adan-rodriguez"><img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                 

                        <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.img}>
                                <img src="https://i.postimg.cc/gjgnSW2K/Cecilia.jpg" alt="" />  
                            </div>
                            <div className={styles.details}>
                                <div className={styles.name}>Cecilia Kuckiewicz</div>
                                <div className={styles.job}>Tuki's Collaborator</div>    
                            </div>
                            <div className={styles.media_icons}>
                            <a title="github.com/kucki90" href="https://github.com/kucki90"><img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
              

                           <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.img}>
                                <img src="https://i.postimg.cc/59gYNwSF/Gabriel.png" alt="" />  
                            </div>
                            <div className={styles.details}>
                                <div className={styles.name}>Perez Mariano</div>
                                <div className={styles.job}>Tuki's Collaborator</div>    
                            </div>
                            <div className={styles.media_icons}>
                            <a title="github.com/Gabrielmaguna00" href="https://github.com/Gabrielmaguna00"><img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                  

                              <div className={styles.card}>
                        <div className={styles.content}>
                            <div className={styles.img}>
                                <img src="https://i.postimg.cc/qRfny4Nh/Mariano.jpg" alt="" />  
                            </div>
                            <div className={styles.details}>
                                <div className={styles.name}>Perez Mariano</div>
                                <div className={styles.job}>Tuki's Collaborator</div>    
                            </div>
                            <div className={styles.media_icons}>
                            <a title="github.com/marianorp" href="https://github.com/marianorp"><img src="https://i.postimg.cc/ncz89QNW/github.png" alt=""/></a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            
        </div>


        


    )
}