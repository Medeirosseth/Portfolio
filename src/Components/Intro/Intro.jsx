import React from 'react'
import './Intro.scss'

export default  function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer"> 
          <img src="assets/Sether.png" className="picSeth" alt="Seth green background"/>
          <div className="overlay">
            <div className="text"> 
              <span className="constant"> Const </span><span className="fullName">  SethPaulMedeiros <span className="equal"> = </span> <span className="curlyBracket">&#123;</span> </span><br />
              <span className="skills">skills</span>: <span className="bracket">[</span>'<span className="aboutMeItem">JavaScript</span>', '<span className="aboutMeItem">React.js</span>'<span className="bracket">]</span>,<br />
              <span className="skills">status</span>: <span className="aboutMeItem">'Seeking employment</span>',<br />
              <span className="skills">hobbies</span>: <span className="bracket">[</span>'<span className="aboutMeItem">Coding</span>', '<span className="aboutMeItem">Cooking</span>', '<span className="aboutMeItem">Guitar</span>'<span className="bracket">]</span>,<br />
              <span className="skills pets">pets</span>:<span className="bracket"> &#123; </span> < br/>
              <span className="skills">status</span>: <span className="constant">true</span> < br/>
              <span className="skills">species</span>: '<span className="aboutMeItem">Dog</span>' < br/>
              <span className="skills">name</span>: '<span className="aboutMeItem">Pizza Guy</span>' < br/>
              <span className="bracket"> &#125; </span> < br/>
              <span className="curlyBracket"> &#125;</span>
              
            </div>
          </div>
        </div>
      </div>
        <div className="right">
          <div className="wrapper">
            <img className="resume" src="assets/Resume.png" alt="Resume"></img>
          </div>
        </div>
    </div>
  )
}

const SethPaulMedeiros = {
  skills: ['javaScript', 'React'],
  status: 'Seeking employment',
  hobbies: ['Coding', 'Cooking', 'Guitar'],
  pets: {
    status: true,
    breed: 'dog',
    name: 'Pizza Guy'
  }
}
      console.log(SethPaulMedeiros)
      
      // <div className="container">
      //   <div className="box">
      //     <h1> Seth Medeiros<span>.</span></h1>
      //   </div>
      // </div>
      // <div className="role">
      //   <div className="block">
      //     <p>Appetite for Construction</p>
      //   </div>
      // </div>
      
      
      
      // import React from 'react'
      // import "./Intro.scss"
      // // import { init } from 'ityped'
      // // import { useEffect, useRef } from 'react'
      
// export default function Intro() {
//   // const textRef = useRef();

//   // useEffect(() => {
//   //   init(textRef.current, {
//   //     showCursor: true,
//   //     backDelay: 1500,

//   //     strings: ["Developer", "Designer", "Musician", "Curator"]
//   //   })
//   // }, [])

//   return (

//   <div className="intro" id="intro">
//     <div className="left"> 
//     <img src="assets/Seth.png" alt=""></img>
//     </div>
//     <div className="slidebar">
//       <div className="container">
//         <div className="item">
//           <div className="right">
//           <img src="assets/SethMedeiros2021.png" alt=""></img> 
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   //   <div className="intro" id="intro">
//   //     <div className="left">
//   //       <div className="imgContainer">
//   //         <img src="assets/Sether.png" alt=""></img>
//   //       </div>
//   //     </div>
//   //     <div className="right">
//   //       <div className="wrapper">
//   //         <h2>Console.log("Hello world,") I'm</h2>
//   //         <h1>Seth Medeiros</h1>
//   //         <h3><span ref={textRef}>Designer</span></h3>
//   //       </div>
//   //       <a href="#portfolio">
//   //         <h3>RESUME</h3>
//   //       </a>
//   //     </div>
//   //   </div>
//   )
// }