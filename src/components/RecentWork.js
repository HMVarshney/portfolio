import WorkCard from "./MyWorkCard"

const myWorks = [
    {
        title: "MAD APP",
        desc: "Online contest website for Music, Art and Dance. Has been shut down. :(",
        imgURL: "/assets/works/mad.jpg",
        href: 'https://www.madapp.in'
    },
    {
        title: "High Adventure",
        desc: "Tourism Website vastly related to MakeMyTrip.",
        imgURL: "/assets/works/high_adventure.png",
        href: 'https://www.highadventure.in'
    },
    {
        title: "NESCII",
        desc: "Blogging platform exclusively for my college by our college society.",
        imgURL: "/assets/works/nescii.png",
        href: 'https://www.nescii.com'
    }
]

const RecentWork = () => {
    return (  
        <div id='work' className='d-flex flex-column align-items-center my-5'>
            <div style={{width:'100%'}}>
                <h1 className='text-center'>My Recent Work</h1>
                <div style={{width:'70%', margin: '0 auto'}}>
                    <div className='row no-gutters justify-content-center mt-5'>
                        {myWorks.map((item)=>(
                            <div className='col-4'>
                                <WorkCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{width:'100%'}} className='mt-5'>
                <h4 className='text-center'>NPM Package</h4>
                <div className='d-flex justify-content-center mt-5'>
                    <div className='col-5'>
                        <WorkCard 
                            title='chat-api-server' 
                            imgURL='/assets/works/npm.jpg' 
                            desc='Ready-to-go and easy-to-use chat server. Can be integrated with any project.' 
                            href='https://www.npmjs.com/package/@hmv007/chat-api-server' 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RecentWork;