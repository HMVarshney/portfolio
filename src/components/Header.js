import styles from './Header.module.css';

const Header = () => {
    return (  
        <div className={styles['wrapper']}>
            <div className={styles['container']}>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h2 style={{fontFamily:"'Parisienne', cursive"}}>HM Varshney</h2>
                    </div>
                    <div>
                        <a href='#footer'>
                            <button className={styles['contact-button']}>Contact Me!</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Header;