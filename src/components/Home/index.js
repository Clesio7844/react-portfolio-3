import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = ( ) => {
  const [letterClass, setLetterCless] = useState('text-animate');
  const nameArray = ['d','e','c','a','s','t','r','o'];
  const jobsArray = ['w','e','b','','d','e','v','e','l','o','p','e','r', '.']

//   useEffect(() => {
//    return  setTimeout(() => {
//     setLetterCless('text-animate-hover')
//    }, 4000);
//   }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strAarray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strAarray={jobsArray} idx={22}/>
                <br />
                </h1>
                <h2>Front Developer / JavaScript Expert</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
};

export default Home;