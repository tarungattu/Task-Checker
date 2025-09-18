import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='flex bg-[#5e2597] items-center justify-between text-white'>
                <img src="src/assets/cody.png" alt="coder-turtle" className='max-w-[12%] translate-x-4' />

                <div className="Heading text-center text-2xl sm:text-5xl cursor-pointer hover:font-bold transition-all duration-100 color-cycle-hover w-full sm:w-auto sm:translate-x-0 -translate-x-4">Task Checker</div>
                
                <div className="Taskers mr-[3%] text-3xl cursor-pointer transition-colors color-cycle-hover duration-100 hidden sm:block">Check off your Tasks</div>
            
            </nav>
        </div>
    )
}

export default Navbar
