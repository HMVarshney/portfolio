import WorkCard from "./MyWorkCard"

const RecentWork = () => {
    return (  
        <div id='work' className='d-flex flex-column align-items-center my-5'>
            <h1>My Recent Work</h1>
            <div style={{width:'50%'}}>
                <div className='row no-gutters mt-5'>
                    <div className='col-4'>
                        <WorkCard />
                    </div>
                    <div className='col-4'>
                        <WorkCard />
                    </div>
                    <div className='col-4'>
                        <WorkCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RecentWork;