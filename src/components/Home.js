


import React,{useState} from 'react';
import "./home.css";
import Typewriter from "typewriter-effect"


const Home =()=>{


const[state] =useState({
  title:"Welcome!",
  titletwo:"TO YAP",
  titleThree:"Nobody knows you better than you do.",
  image:"/images/cat.gif"
});
// "No one knows you better than you"
// Nobody knows you more than you know yourself

return (
  <div className="parent">
  <div className='home'>
    <div className='home-intro'>
      <h2>
        <div className='title'>{state.title}</div>
        <div className='titleTwo'>{state.titleTwo}</div>
        <div className='titleThree'>{state.titleThree}</div>
      </h2>
    <div className='text'>
      
        <Typewriter
        options={{
          autoStart:true,
          loop:true,
          delay:40,
          strings:[
            "WE BELIEVE",
            "You're Awesome.",
            "You're Beautiful.",
            "Hence, You're Perfect."
          ],
          
        }}
        ></Typewriter>
      </div>
  
  
  
  
      <div className="contact-me">
        <button className="button">Let us help you</button>
    </div>
   </div>
   <div className="home-image">
    <img className="cat.gif" src={state.image} alt="spiderman"/>
   </div>

   
</div>
</div>



































);
};






export default Home;













    
//   );
// }

// 














































// import React from 'react';
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

// function App() {
//   return (
//     <h1>
//       <span>I</span>M<span>POSSIBLE</span>
//     </h1>
//   );
// }

// export default App;

// import React from 'react';
// import { HoverEffect } from 'mdb-react-ui-kit';
// import stressbuster from "stressbuster.jpg";

// function HomePage() {
//   return (
//     <div>
//       <HoverEffect>
//         <img src={stressbuster.png } alt="floating image" />
//       </HoverEffect>
//     </div>
//   );
// }

// export default HomePage;









// import React from 'react';
// import Navbar from './Navbar';
// import './home.css';

// import image from 'my-app\public\images\stressbuster.jpg'; // import the image file

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <div className="home-container">
     
//       <img src="my-app\public\images\stressbuster.jpg" alt="example" className="home-image" />


//         <div className="home-text">
//           <h1>Welcome to Our Website</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;










