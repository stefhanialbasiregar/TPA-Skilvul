import {useEffect, useState} from 'react';
import BlogList from './BlogList';

const Blog = () => {

    const [blogs] = useState([
        { title: 'Stefhani Curriculum Vitae', body: 'lorem ipsum...', author: 'Stefhani', id:1}
    ]);

    return(
       <div className="blog">
            <h1>HI!</h1>
            <p>Meet me, Stefhani Alba, a 5th semester student who is trying to understand web 
                development - frontend. Get to know about me
            </p>
            <a href="https://sites.google.com/mhs.unsyiah.ac.id/cv-stefhani-alba-siregar/home"><BlogList blogs={blogs} /></a>
            
       </div>
    );
}

export default Blog;