import Banner from '../components/banner';
import styles from './page.module.css';
import give from '../assets/give.jpg'
import Image from 'next/image';

export default function Give(){
    
    return(
        <>
            <Banner prop="GIVE" />
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div>
                        <Image src={give} alt="" priority/>
                    </div>
                    <div>
                    <h1>Small Acts, Big Love</h1>
                    <h2>
                        Your generosity makes Unravel Church possible!
                    </h2> 
                    <h3>When you give to Unravel Church, you join God in changing 
                        lives and helping locally and globally.
                    </h3>
                    </div>
                </div>
                <p>
                        If you are attending at a service you can also give with cash, 
                        checks or cards during our service.
                    </p>
                <div className={styles.btn}>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="7VL3VXR78WC6G" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"  name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt=""  src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </div>
            </div>
    </> 
    );
}