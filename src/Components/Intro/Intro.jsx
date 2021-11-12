import React from 'react'
import './Intro.scss'

export default  function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer"> 
          <img src="assets/Sether.png" className="picSeth"alt="Seth with Flamingos"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <img src="assets/SethMedeiros2021.png" alt="Resume"></img>
        </div>
      </div>
    </div>
)
}





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