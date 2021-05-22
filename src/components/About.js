import styles from './About.module.css';

const About = () => {
    return (  
        <div className={styles['container']}>
            <div className='d-flex justify-content-center'>
                <div className={styles['about-container']}>
                    <h2>Hi, I'm HM Varshney. Nice to meet you!</h2>
                    <h6 style={{fontSize:'18px'}} className='mt-4'>
                        Since beginning my journey as a freelance designer nearly 10 years ago, 
                        I've done remote work for agencies, consulted for startups, and collaborated 
                        with talented people to create digital products for both business and consumer use. 
                        I'm quietly confident, naturally curious, and perpetually working on improving my 
                        chops one design problem at a time.
                    </h6>
                </div>
            </div>
        </div>
    );
}
 
export default About;