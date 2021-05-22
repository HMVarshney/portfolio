import styles from './Banner.module.css';
import Typed from 'react-typed';

const headingStrings = ['Web Development Head at IOSD-NSUT', 'Front-End Web Developer', 'Back-End Web Developer'];
const subheaderStrings = ['JavaScript relaxes me. I love what I do.'];

const Banner = () => {
    return (  
        <div className={styles['container']}>
            <div style={{height:'100%'}} className='d-flex flex-column align-items-center'>
                <div>
                    <div>
                        <Typed 
                            strings={headingStrings}
                            typeSpeed={50}
                            backSpeed={30}
                            backDelay={4000}
                            loop
                            style={{
                                fontSize:'40px',
                                fontWeight:'600',
                                fontStyle:'italic'
                            }}
                        />
                    </div>
                    <div className='text-center mt-3'>
                        <Typed 
                            strings={subheaderStrings}
                            typeSpeed={20}
                            style={{
                                fontSize:'20px',
                            }}
                        />
                    </div>
                </div>
                <div style={{marginTop:'6em'}} className='row no-gutters justify-content-around align-items-center'>
                    <div className='col-3'>
                        <img src='/assets/images/avatar.png' alt='avatar' width='100%' /> 
                    </div>
                    <div className='col-6'>
                        <h2 style={{fontFamily:"'Parisienne', cursive"}}>HM Varshney</h2>
                        <h6 className='mt-3 font-family-text'>Web Development Head at Internation Organization of Software Developers - NSUT</h6>
                        <h6 className='font-family-text'>Web Development Project Lead at Yehlo Software Solutions</h6>
                    </div>
                </div>
                <div style={{marginTop:'5em'}}>
                    <a href='#work'><button className={styles['view-work-button']}>View My Work.</button></a>
                </div>
                {/* <div style={{marginTop:'7em'}} className='col-4'>
                    <img src='/assets/images/banner.svg' width='100%' alt='banner' />
                </div> */}
            </div>
        </div>
    );
}
 
export default Banner;