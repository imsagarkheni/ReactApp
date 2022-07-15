import React from 'react'
import './Home.css';
import web from "../Component2/Img/image2.gif"
import Common from './Common';
import SellIcon from '@mui/icons-material/Sell';
import ExploreIcon from '@mui/icons-material/Explore';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Home = () => {
    return (
        <>
                <div className="container my-md-5">
                    <div className="row ">
                                <div className="col-md-6 col-sm-12 order-1 order-lg-1 image1">
                                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/605c7078364175.5ca3009cb6420.gif' className="image1" alt="Image" />
                                </div>
                                <div className="col-md-6 col-sm-12  pt-5 pt-lg-0 order-2 order-lg-2">
                                    <h1>
                                        Trello helps teams move work forward.  <br /> <strong className='brand'>React App</strong>
                                    </h1>
                                    <h2 className='my-3'>
                                        We are the team of talented developer making website.
                                    </h2>
                                    <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
                                    <div className="mt-5">
                                        {/* <NavLink to='/home' className='btn-get-started'>{props.btname}</NavLink> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                   
            <hr/>

            <section className='d-flex  align-items-center' id='header'>
                <div className="container my-5">
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className="row ">
                                <div className="col-4">
                                     <img src="https://images.ctfassets.net/rz1oowkt5gyp/2ozLp25HsHeANpiNqAwzGI/d60a017d2f214c28f774b35d03499782/tag.svg" style={{width:'10%'}} alt="" className='my-2' />
                                    <h3>See Trello pricing</h3>
                                    <p>Whether you’re a team of 2 or 2,000, Trello can be customized for your organization. Explore which option is best for you.</p>
                                    <button className='btn btn-primary'>Compare Pricing</button>
                                </div>
                                <div className="col-4">
                                    {/* <h1><ExploreIcon/></h1> */}
                                    <img src="https://images.ctfassets.net/rz1oowkt5gyp/6rRWTcHzPKupQ3ZDqBaxu6/aecd045f4b31a92288a85bdb4a9dfe2c/compass.svg" alt="" style={{width:'15%'}} className='my-2' />
                                    <h3>What is Trello?</h3>
                                    <p>Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.</p>
                                    <button className='btn btn-primary'>Tour Trello</button>
                                </div>
                                <div className="col-4">
                                    {/* <h1><TravelExploreIcon/></h1> */}
                                    <img src="https://images.ctfassets.net/rz1oowkt5gyp/5AE4nXLOennRxmmUMcgMLM/747e96bdd16cf4113e4ef867bd85fd29/solutions.svg" alt="" style={{width:'15%'}} className='my-2' />
                                    <h3>Discover Trello Enterprise</h3>
                                    <p>The productivity tool teams love, paired with the features and security needed for scale.
                                    </p>
                                    <button className='btn btn-primary'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
<div className="container">
    <div className="row text-center my-5">
        <h1>It’s more than work. It’s a way of working together.</h1>
        <p>Start with a Trello board, lists, and cards. Customize and expand with more features as your<br/> teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
    </div>
</div>
<div className="container">
    <div className="row d-flex  justify-content-center text-center ">
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/7pYWhpQ3vnntxoShaImNws/777fabbf069416489167ab92027ce086/board.png?w=1200&fm=webp" alt="" style={{width:'80%'}}/>
        <h5>Join over 2,000,000 teams worldwide that are using Trello to get more done.</h5>
    </div>
</div>
<div className="container  ">
    <div className="row d-flex  justify-content-center text-center">
        <div className="col-12">
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/7nR3kQlx8IP5mfCCBTatsy/0b3952a6be3ebb10116d62aa93be7bbb/coinbase.svg" alt="" style={{width:'15%'}} />
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/6VwRn7PI4zrZo84Uoa8rnt/b0ae3da34916a3ff02d26e2120efe9b8/johnDeere.svg" alt="" style={{width:'15%'}}/>
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/5KdQPApAFJpLMv9AntiNLk/530cef2a4b56ad758c1e91fad5c3e7ac/Grand-Hyatt.svg" alt="" style={{width:'15%'}} />
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/2zdwHAyV1sdTRtu3VZWrnp/cdabf13fb68d433667812689add7cdc8/Google.svg" alt="" style={{width:'15%'}} />
    </div></div>
    <div className="row d-flex  justify-content-center text-center">
        <div className="col-12">
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/1zdBcYqeqkDsLUfggfKFRO/a732e0001ca5153ef7195eea63ff6a3b/Visa.svg" alt="" style={{width:'15%'}}/>
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/2Im844Kon73pvCD2ljoxeL/4073e041eb8eb961a0f9505965dec09b/Zoom.png?w=1200&fm=webp" alt="" style={{width:'15%'}}/>
    </div></div>
</div>

<div className="container my-5">
    <div className="row">
        <h1>Features to help your team succeed</h1>
        <p>Powering a productive team means using a powerful tool<br/> (and plenty of snacks). From meetings and projects to events and goal setting, <br/>1,Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
    </div>
</div>

<div className="container  ">
    <div className="row ">
        <div className="col-5">
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/4gcdup5C0Z1rQEQDGfeWth/71156837ac2d75293bf0eec8010aeb6e/view.svg" alt="" />
        </div>
        <div className="col-7">
            <p className='my-2'>CHOOSE A VIEW</p>
            <h1 className='my-4'>The board is just the beginning</h1>
            <h5 className='my-4'>Lists and cards are the building blocks of organizing work on a <br/>Trello board. Grow from there with task assignments, timelines,<br/> productivity metrics, calendars, and more.</h5>
            <h4 className='my-4'> + Learn More</h4>
        </div>
    </div>
</div>

        </>
    )
}

export default Home
