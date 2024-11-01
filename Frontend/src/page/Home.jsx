import React from 'react'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import './css/home.css'

function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <div id="total">
        <div className="container" id="page1">
            <div id="box11">
                <div id="box111">Srijeet Gupta</div>
                <div id="box112">software developer</div>


            </div>

            <div id="box12">Welcome to my digital haven! As a passionate software developer, I'm proficient in MERN, Python, Java, and more. I thrive on crafting end-to-end applications that seamlessly blend innovation with functionality. With an adventurous spirit and a knack for quick learning, I'm always eager to explore new technologies and solve complex problems. Let's embark on a coding journey together!

            </div>
        </div>
        
        
        <div id="page2">

            <div className="cc container" id="cc1">
                <div className="ccc1">skill</div>
                <div className="ccc2">
                    <li>java</li>
                    <li>aws</li>
                    <li>c++</li>
                    <li>mern stack</li>
                    <li>linux</li>
                    <li>shell scripting</li>
                    <li>dsa</li>
                </div>
            </div>


            <div className="cc container" id="cc2">
                <div className="ccc1">education</div>
                <div className="ccc2">
                    <li>bachelor in computer science and engineering</li>

                </div>
            </div>



            <div className="cc container" id="cc3">
                <div className="ccc1">experience</div>
                <div className="ccc2">
                    <li>MERN:</li>
                    <li>Potfolio Website</li>
                    <li>Bloging Application</li>
                    <li><h5></h5></li>
                    <li>PYTHON:</li>
                    <li>Snake Game</li>
                    <li>Pong Game</li>
                    <li>Password Manager</li>
                    <li>pomodora and more....</li>
                    <li><h5></h5></li>
                    <li>Java:</li>
                    <li>Bank management System</li>

                </div>
            </div>
        </div>
        


        <Footer/>

    </div>
    </div>
    </>
  )
}

export default Home