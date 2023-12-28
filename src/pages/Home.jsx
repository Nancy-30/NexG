import React from 'react'
import NavBar from '../sections/NavBar'
import Landing from '../sections/Landing'
import About from '../sections/About'
import Services from '../sections/Services'
import Qualities from '../sections/Qualities'
import FirstStep from '../sections/FirstStep'
import Guarantee from '../sections/Guarantee'
import Footer from '../sections/Footer'

export default function Home() {

    return (
        <div className='bg-[#050520]'>
            <NavBar />
            <Landing />
            <div className="relative z-10 w-full overflow-x-clip">
                <About />
                <Services />
                <Qualities />
            </div>
            <FirstStep />
            <Guarantee />
            <Footer />
        </div>
    )
}
