import styles from './MyWork.module.css';

const WorkCard = ({ imgURL, title, desc, href }) => {
    return (  
        <div style={{backgroundImage:`url(${imgURL})`}} className={styles['wrapper']}>
            <div className={styles['container']}>
                <div>
                    <h1>{title}</h1>
                    <h6 style={{lineHeight:'23px'}} className='mt-3'>
                        {desc}
                    </h6>
                    <a style={{display:'block'}} className='mt-5' href={href} target='_blank' rel='noreferrer'>
                        <button className={styles['visit-site-button']}>Visit the website.</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default WorkCard;