import React from 'react';
import { cinzel, aldrich, inter, tektur } from '../fonts';

const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "banking",
      title: "Banking",
    },
    {
      id: "mortgage",
      title: "Mortgage",
    },
    {
      id: "investment",
      title: "Investment",
    },
    {
      id: "insurance",
      title: "Insurance",
    },
    {
      id: "register",
      title: "Open An Account",
    },
    ];

function Header() {
    let inputBoxClass = "bg-white border border-slate-100 text-slate-900 rounded-md block p-1 px-2"
    return (
        <div className="sticky top-0 start-0 z-20 shadow-md lg:shadow-none bg-white">

            <div className="lg:max-w-7xl mx-auto pb-2 lg:pb-0">
                <div className={`flex justify-between items-center md:py-0 mx-6 md:mx-0 lg:mx-0 cursor-default px-0 text-slate-500 ${cinzel.className}`}>
                    <div className='flex justify-start py-2 items-center mt-1 md:mt-0 '>

                        <div className={`bg-rouLan text-slate-100 p-1 text-xl mr-2 rounded-lg ${aldrich.className}`}>CB</div>

                        <a href="/" className={`${aldrich.className} mt-1`}>
                            <div className={`text-2xl md:text-4xl font-bold text-rouLan`}>CITY BANK</div>
                        </a>
                    </div>

                    <div className={`hidden lg:flex justify-end space-x-10  text-[16px] ${inter.className} py-2`}>
                        <a href={"/locations"} className='flex cursor-pointer items-center '>
                            Branch Locator
                        </a>
                        <p className='flex cursor-pointer items-center'>
                            About Us
                        </p>
                        <p className='flex cursor-pointer items-center'>
                            Help
                        </p>
                        <p className='flex cursor-pointer items-center'>
                            中文
                        </p>
                    </div>

                    <div className='flex lg:hidden items-center'>

                        <div className={`${aldrich.className} flex lg:hidden mr-4 border-2 border-slate-400 rounded-lg text-sm px-3 py-0.5 mt-4`}>Sign In</div>

                        <label className="relative z-40 cursor-pointer lg:hidden mt-3.5" for="mobile-menu">
                            <input className="peer hidden" type="checkbox" id="mobile-menu" />
                            <div
                                className="relative z-50 block h-[2px] w-6 bg-stone-400 bg-transparent content-['']
                                            before:absolute before:top-[-0.25rem] before:z-50 before:block before:h-full before:w-full 
                                            before:bg-stone-500 before:-mb-1 before:transition-all before:duration-800 before:ease-out before:content-[''] 
                                            after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-stone-500 
                                            after:transition-all after:duration-800 after:ease-out after:content-[''] 
                                            peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full 
                                            before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full 
                                            after:peer-checked:-rotate-45 after:peer-checked:transform"
                            >
                            </div>
                            <div
                                className="fixed inset-0 z-40 hidden h-full w-full bg-white backdrop-blur-sm peer-checked:block"
                            >
                                &nbsp;
                            </div>
                            <div
                                className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
                            >
                                <div className="float-top min-h-full w-[100%] bg-white">

                                    <div className='px-6 z-50'>
                                        <div className='max-w-sm lg:max-w-6xl mx-auto justify-between flex mt-1 md:mt-2'>
                                            <div className={`md:w-1/4 flex justify-center items-center text-white md:py-4 md:mx-6 cursor-default ${cinzel.className}`}>
                                                <div className='mb-1 md:mb-0'>
                                                    <div className={`text-2xl md:text-2xl font-semibold `}>VENUS</div>
                                                    <div className='flex text-sm md:text-lg font-semibold text-center justify-center -mt-2'>Jewellery</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <menu className={`flex justify-start mx-6 mt-6 text-2xl font-semibold ${inter.className}`}>
                                        <div className='space-y-4 px-6'>
                                            <li><a href="/wedding">Banking</a></li>
                                            <li><a href="/personalized">Mortgage</a></li>
                                            <li><a href="/about">Investment</a></li>
                                            <li><a href="/contact">Insurance</a></li>
                                            <li><a href="/contact">Open An Account</a></li>

                                            <li><a href="/contact">Branch Locator</a></li>
                                            <li><a href="/contact">About Us</a></li>
                                            <li><a href="/contact">Help</a></li>
                                            <li><a href="/contact">中文</a></li>
                                        </div>
                                    </menu>
                                </div>
                            </div>
                        </label>

                    </div>

                </div>

                
            </div>

            <div className={`hidden md:flex home-main-gradient`}>
                <div className="lg:max-w-7xl w-full mx-auto flex py-2 text-lg px-1">

                    <div className="flex text-slate-100 w-2/3 space-x-10 font-semibold items-center">
                        {navLinks.map((nav, index) => (
                            <div
                                key={nav.id}
                                className={`cursor-pointer ${index===navLinks.length-1?'mr-0':'mr-2'} text-slate-100 hover:text-white`}
                            >
                                <a href={`${nav.id}`}>
                                    {nav.title}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end text-slate-100 w-1/3 ">
                        <div className='flex text-slate-100 items-center'> <input className={`${inputBoxClass}`} placeholder="How can we help?" />&nbsp;
                                                                            <button type="submit" class="text-rouLan bg-slate-50 hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-md px-2.5 py-1 text-center">Search</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header
