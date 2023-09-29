import React from 'react'
import img from './static/coder-image.png';
import Button from '@mui/material/Button';
// import DownloadForOfflineSharpIcon from '@mui/icons-material/DownloadForOfflineSharp';
import resume from './static/Mahesh_ResumeV3.00.pdf';
import './About.css';


const About = () => {
    return (
        <>
            <div className='px-5 sm:px-28 my-32' id='About' style={{backgroundColor:"#f7f7f7"}}>
                <br /><br />
                <h1 class="stylish-h1">ABOUT ME</h1>
                <p className='text-center'>My introduction</p>
                <div className='flex sm:flex-row flex-col justify-center' id='aboutimg' >
                    <div>
                        <img src={img} alt='coderimg'  />
                    </div>
                    <div className='sm:w-96 text-xl sm:pt-20' style={{margintop: '82px', padding: '86px'}}>
                        <p>A passionate Full Stack Software Developer
                            having an good knowleage of building Web Applications with HTML / CSS/ JavaScript / Reactjs / Nodejs / Expressjs / MongoDB and some other cool libraries and frameworks.
                        </p>
                        <br/>
                       
                        <Button className='text-white'  href={resume} download={resume} variant="contained" >
                          Download Resume 
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;