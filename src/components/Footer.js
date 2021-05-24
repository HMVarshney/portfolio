import styles from './Footer.module.css';

const socialItems = [
    {name: 'github', href:'https://github.com/HMVarshney'},
    {name: 'instagram', href:'https://www.instagram.com/hm_varshney/'},
    {name: 'linkedin', href:'https://www.linkedin.com/in/hm-varshney/'},
    {name: 'mail', href:'mailto:hmv0071@outlook.com'}
];

const Footer = () => {
    return (  
        <div id='footer' className={styles['container']}>
            <div style={{height:'100%'}} className='d-flex align-items-center justify-content-center'>
                <div className='text-center'>
                    <h4 style={{maxWidth:'400px', margin:'0 auto'}}>Living, learning, & leveling up one day at a time.</h4>
                    {/* <p>I am an enthusiastic learner. </p> */}
                    <div className='d-flex justify-content-center mt-5'>
                        {socialItems.map((item, index)=>(
                            <i className={styles['social-icon']} key={index}>
                                <a href={item.href} target='_blank' rel='noreferrer'><img src={`/assets/icons/${item.name}.svg`} width='100%' alt='github' /></a>
                            </i>
                        ))}
                    </div>
                    {/* <div className='mt-5'>
                        <h6>Made with React</h6>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
 
export default Footer;