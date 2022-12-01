import {useState} from 'react';

const Home = () => {

    const [blogs] = useState([
        { title: 'Stefhani Curriculum Vitae', body: 'lorem ipsum...', author: 'Stefhani', id:1}
    ]);    

    return(
       <div className="home">
            <h1>HI!</h1>
            <p>Meet me, Stefhani Alba, a 5th semester student who is trying to understand web 
                development - frontend. Get to know about me
            </p>
            <img src={require('./bersandar.png')} />
       </div>
    );
}

export default Home;