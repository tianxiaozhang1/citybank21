'use client';

import Image from "next/image";
import React, { useState, useEffect } from 'react'
import { cinzel, aldrich, inter } from './fonts';
import Header from './components/Header';
import Footer from './components/Footer';

import home1 from './images/home1.jpg'
import home2 from './images/home2.jpg'
import home3 from './images/home3.jpg'
import home4 from './images/home4.jpg'
import home5 from './images/home5.jpg'
import home6 from './images/home6.jpg'
import home7 from './images/home7.jpg'

import card1a from './images/card1a.png'
import card5a from './images/card5a.png'
import card3a from './images/card3a.png'
import card4a from './images/card4a.png'

export default function Home() {

    let textBox = "bg-white border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:rouLan dark:focus:border-rouLan";
    
    const loginUser = async (e) => {
        e.preventDefault()

        const formData = new FormData();  
        formData.append('username', username)
        formData.append('password', password)

        let response = await fetch('http://127.0.0.1:8000/token/', {
            method: 'POST',
            body: formData
            
        })
        let data = await response.json()
        
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            console.log("data", data)

            navigate('/banking')
            
        } else {
            console.log("response.status != 200")
        }
    }

    var d = new Date();
    var time = d.getHours();
    var greetingPhrase;

    if (time > 5 && time < 12) {
        greetingPhrase = "Good morning."
    }
    else if (time >= 12 && time < 17) {
        greetingPhrase = "Good afternoon."
    }
    else if (time >= 17 && time <= 23) {
        greetingPhrase = "Good evening."
    }
    else {
        greetingPhrase = "Good day."
    }

    const segmentData = [
        {
            num: 0, 
            title: "Get tools. Get tips. Get peace of mind.",
            info: "Discover digital tools to help you budget, save, manage credit, and more.",
            image: home1,
            button: "Learn more",
            link: "/",
        },
        {
            num: 1, 
            title: "Get an account that gives you daily interest, tax-free",
            info: "With a City TFSA Tax Advantage Savings Account®, you can grow your money and access it at any time.",
            image: home2,
            button: "Learn more",
            link: "/",
        },
        {
            num: 2, 
            title: "Pack your suitcase with more savings",
            info: "Deposit and withdraw U.S. funds without converting currencies using the City US$ Personal Account.",
            image: home5,
            button: "Learn more",
            link: "/",
        },
        {
            num: 0, 
            title: "Get up to $4,500 cash back when you switch to a City mortgage.",
            info: "Help cover your costs when you switch your mortgage from another financial institution.",
            image: home3,
            button: "Learn more",
            link: "/",
        },
        {
            num: 1, 
            title: "Get 4.50% on a 1-year City Bonus Rate GIC",
            info: "Put your hard-earned money into a secure investment where your returns are guaranteed.",
            image: home4,
            button: "Learn more",
            link: "/",
        },
        {
            num: 2, 
            title: "Get up to $3,500 cash back on select City mortgages",
            info: "Plus, enjoy an extra $1,000 if you switch your mortgage to City.",
            image: home6,
            button: "Learn more",
            link: "/",
        },
    ]

    const ThirdSegment = () =>
        <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 space-y-2`}>
            {segmentData.map((item) => (
                <div item={item} key={item.num} className="rounded-xl shadow-[0_2px_4px_-2px_rgba(0,0,0,0.8)] text-rouLan mx-2 lg:mx-2 lg:my-1.5 mb-2">
                        <Image
                            src={item.image}
                            alt=""
                            className="rounded-t-xl"
                        />
                    <div className="px-6 bg-white my-1">
                        <div className="text-xl text-slate-600 font-semibold mt-2 lg:mt-3 lg:leading-6 cursor-default">{item.title}</div>
                        <div className="my-1 lg:my-3 text-slate-600 text-sm cursor-default">{item.info}</div>
                        <div className="flex text-md lg:text-xl font-semibold items-center mb-3 hover:underline hover:cursor-pointer">{item.button}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-3 lg:size-5 mt-0.5 ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}


        </div>

    const helpButtonData = [
        {
            num: 0,
            text: "Saving and Investing", 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 ml-3.5">
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                    </svg> ,
            colour: "cuiWei",
        },
        {
            num: 1,
            text: "Compare Credit Cards", 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 ml-3.5">
                        <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                        <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
                    </svg>,
            colour: "rouLan",
        },
        {
            num: 2,
            text: "Learn About Loans", 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#576470" class="size-10 ml-3.5">
                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                        <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                        <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                    </svg>,
            colour: "[#576470]",
        },
        {
            num: 3,
            text: "What Is Inflation?", 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#955A42" className="size-10 ml-3.5">
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                    </svg>,
            colour: "tangLiHe",
        },
        {
            num: 4,
            text: "Today&apos;s Rates", 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D3A237" className="size-10 ml-3.5">
            <path fillRule="evenodd" d="M6.32 1.827a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93ZM7.5 11.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H8.25Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75H8.25Zm1.748-6a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.007Zm-.75 3a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.007Zm1.754-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.008Zm1.748-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-8.25-6A.75.75 0 0 1 8.25 6h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75Zm9 9a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-2.25Z" clip-rule="evenodd" />
          </svg>,
            colour: "juYi",
        },
        {
            num: 5,
            text: "Foreign Exchange", 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#A64036" className="size-10 ml-3.5">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.902 7.098a3.75 3.75 0 0 1 3.903-.884.75.75 0 1 0 .498-1.415A5.25 5.25 0 0 0 8.005 9.75H7.5a.75.75 0 0 0 0 1.5h.054a5.281 5.281 0 0 0 0 1.5H7.5a.75.75 0 0 0 0 1.5h.505a5.25 5.25 0 0 0 6.494 2.701.75.75 0 1 0-.498-1.415 3.75 3.75 0 0 1-4.252-1.286h3.001a.75.75 0 0 0 0-1.5H9.075a3.77 3.77 0 0 1 0-1.5h3.675a.75.75 0 0 0 0-1.5h-3c.105-.14.221-.274.348-.402Z" clip-rule="evenodd" />
          </svg>
          ,
            colour: "zhuCao",
        },
        {
            num: 6,
            text: "My Mortgage Payments", 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#615EA8" className="size-10 ml-3.5">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>,
            colour: "youTanRui",
        },
        {
            num: 7,
            text: "Boost My RRSP Savings", 
            icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 ml-3.5">
                        <path fillRule="evenodd" d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6ZM8.625 9a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm5.625 3.375a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clip-rule="evenodd" />
                    </svg>,
            colour: "tianShuiBi",
        },
    ]

    const helpButtonColours = ["cuiWei", "rouLan","yuYangRan","tangLiHe","juYi","zhuCao","youTanRui","tianShuiBi"]
    const HelpButtons = () =>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {helpButtonData.map((item) => (
                <div item={item} key={item.num} className={`text-${helpButtonColours[1]} hover:border-slate-200 rounded-lg border-2 cursor-pointer border-slate-100 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.8)] mx-2 lg:mx-2 lg:my-1.5 mb-2 px-0 py-3 lg:py-5 flex justify-start items-center`}>
                    {item.icon}
                    <div className={`text-lg font-semibold ml-2 text-${helpButtonColours[0]}`}>{item.text}</div>
                </div>
            ))}
        </div>

    return (

        <div>
            
            <Header/>

            <div className="lg:flex max-w-7xl mx-auto lg:space-x-2 py-2">

                <div className="mx-3 mt-1 lg:mt-0 lg:mx-0 lg:w-3/4 lg:flex lg:shadow lg:border-2 lg:border-slate-200 text-white rounded-xl py-2 lg:py-8 lg:pl-12 px-6">
                    <div className="lg:w-1/2 text-slate-600 mr-0 -ml-2">
                        <div className="text-slate-400 mb-1 lg:mb-2 text-center lg:text-start font-semibold lg:ml-0.5">CITY® CREDIT CARDS</div>
                        <div className="text-2xl lg:text-4xl lg:mt-1 leading-7 lg:leading-9 font-bold text-center lg:text-start mx-2 lg:mx-0 text-rouLan">Choose the right <x className={`font-semibold ${aldrich.className}`}><y className="font-bold">City</y></x>® credit card for you</div>
                            
                        <div className="text-sm lg:text-xl lg:mt-4 mt-2 lg:mb-1 text-center lg:text-start mx-2 lg:mx-0 leading-4 lg:leading-6">Whether you want Cash Back, Great Airline Miles, Rewards for Costco Members, or a Low Intro Rate, the choice is all yours.</div>
                        <div className="flex justify-center lg:justify-start">
                            <div className="bg-slate-50 hover:bg-white cursor-pointer rounded-3xl border-2 border-slate-200 px-6 py-2 lg:px-6 lg:py-3 text-rouLan text-sm lg:text-xl mt-3 mb-1 lg:mt-5 font-semibold -mr-4 lg:mr-0">Learn More</div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 lg:mr-4 ml-3 mt-2">
                        <div className="flex w-full justify-center">
                            <Image
                                src={card1a}
                                alt=""
                                className="rounded-md w-1/2"
                            />
                            <Image
                                src={card5a}
                                alt=""
                                className="rounded-md ml-0.5 lg:ml-2 w-1/2"
                            />
                        </div>
                        <div className="flex w-full justify-center mt-0.5 lg:mt-2">
                            <Image
                                src={card3a}
                                alt=""
                                className="rounded-md w-1/2"
                            />
                            <Image
                                src={card4a}
                                alt=""
                                className="rounded-md ml-0.5 lg:ml-2 w-1/2"
                            />
                        </div>
                    </div>
                </div>
                
                <div className={`hidden lg:flex lg:w-1/4 hover:bg-white items-center justify-center px-6 py-4 w-full bg-white rounded-xl shadow border-2 border-slate-200`}>
                    <div >
                        <p className='mt-0 text-lg font-semibold text-rouLan'>{greetingPhrase}</p>
                        <h1 class="text-xl font-semibold leading-tight tracking-tight text-gray-500 md:text-2xl mb-4 dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-0 md:space-y-2" action="#">
                            <div>
                                <input type="username" name="username" id="username" onChange={event => setUsername(event.target.value)} class={textBox} placeholder="Username" required="" />
                            </div>
                            <div>
                                
                                <input type="password" name="password" id="password" placeholder="Password" onChange={event => setPassword(event.target.value)} class={textBox} required="" />
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500 dark:text-gray-300 -ml-1">Remember me</label>
                                    </div>
                                </div>
                                
                            </div>
                            <button type="submit" value="Login" onClick={window.open("https://github.com/tianxiaozhang1/citybank2")} className="w-full text-rouLan bg-slate-50 hover:bg-white hover:bg-biCheng focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium shadow-sm border-2 border-slate-200 rounded-3xl text-xl px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-md font-semibold text-gray-500 dark:text-gray-400 space-y-6 hover:underline cursor-pointer">Forgot password?</p>
                            <p className="text-md font-light text-gray-500 dark:text-gray-400 mb-6">
                                Don&apos;t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>

            </div>

            {/* <div className="lg:flex max-w-7xl mx-auto lg:space-x-2 py-2 space-y-2 lg:space-y-0">
                
                <div className="mx-3 lg:mx-0 lg:w-1/4 rounded-xl shadow border-2 border-slate-200 p-6 text-rouLan">
                    <div className="flex justify-center -mt-2 my-2 lg:-mt-2 lg:mb-2">
                        {walletIcon}
                    </div>
                    <div className="text-xl text-slate-600 font-semibold ">Want a $125 checking bonus?</div>
                    <div className="my-1 lg:my-3 text-slate-600 text-sm">Open a new Clear Access Banking account and complete the qualifying requirements</div>
                    <div className="flex text-md lg:text-xl font-semibold items-center -mb-1">Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-3 lg:size-5 mt-0.5 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>

                <div className="mx-3 lg:mx-0 lg:w-1/4 rounded-xl shadow border-2 border-slate-200 p-6 text-cuiWei">
                    <div className="flex justify-center -mt-2 my-2 lg:-mt-2 lg:mb-2 -px-6">
                        {creditCardIcon}
                    </div>
                    <div className="text-xl text-slate-600 font-semibold ">A credit card like no other</div>
                    <div className="my-1 lg:my-3 text-slate-600 text-sm">Earn 4% cash rewards for taking care of yourself and the world around you</div>
                    <div className="flex text-md lg:text-xl font-semibold items-center -mb-1">Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-3 lg:size-5 mt-0.5 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>

                <div className="mx-3 lg:mx-0 lg:w-1/4 rounded-xl shadow border-2 border-slate-200 p-6 text-tianShuiBi">
                    <div className="flex justify-center -mt-2 my-2 lg:-mt-2 lg:mb-2">
                        {userIcon}
                    </div>
                    <div className="text-xl text-slate-600 font-semibold ">Find an offer that’s made just for you</div>
                    <div className="my-1 lg:my-3 text-slate-600 text-sm">Take advantage of our special offers for our chequing and savings accounts</div>
                    <div className="flex text-md lg:text-xl font-semibold items-center -mb-1">Explore offers
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-3 lg:size-5 mt-0.5 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div className="mx-3 lg:mx-0 lg:w-1/4 rounded-xl shadow border-2 border-slate-200 p-6 text-rouLan">
                    <div className="flex justify-center -mt-2 my-2 lg:-mt-2 lg:mb-2">
                        {creditCardIcon}
                    </div>
                    <div className="text-xl text-slate-600 font-semibold ">Easy US banking with no fee for transactions</div>
                    <div className="my-1 lg:my-3 text-slate-600 text-sm">Get the City Bank USA Smart Account™ and bank as much as you want</div>
                    <div className="flex text-md lg:text-xl font-semibold items-center -mb-1 text-rouLan">Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-3 lg:size-5 mt-0.5 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div> */}

            {/* <div className="lg:flex max-w-7xl mx-auto lg:space-x-2 py-2 space-y-2 lg:space-y-0">
                
                <div className="mx-3 lg:mx-0 lg:w-1/4 rounded-xl shadow border-2 border-slate-200 pb-6 text-cuiWei">
                    <div className="flex justify-center -mt-2 my-2 lg:-mt-2 lg:mb-2 -px-6">
                        <Image
                            src={home6}
                            alt=""
                            className="rounded-t-xl"
                        />
                    </div>
                    <div className="px-6 pt-2 pb-0">
                        <div className="text-xl text-slate-600 font-semibold ">A credit card like no other</div>
                        <div className="my-1 lg:my-3 text-slate-600 text-sm">Earn 4% cash rewards for taking care of yourself and the world around you</div>
                        <div className="flex text-md lg:text-xl font-semibold items-center -mb-1">Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-3 lg:size-5 mt-0.5 ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div> */}


            <div className="flex justify-center text-center text-slate-500 -mt-0 mb-4 lg:mt-5 lg:mb-5 lg:px-2">
                <div className={`${aldrich.className}`}><div className="text-2xl lg:text-3xl font-semibold cursor-default">Do more with your money.</div></div>
            </div>
            <div className="lg:flex max-w-7xl mx-auto mb-2">
                <div className="mx-auto w-5/6 md:w-3/4 lg:w-full"><ThirdSegment/></div>
            </div>

            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex justify-center text-center text-2xl lg:text-3xl font-semibold text-slate-500 mt-0.5 mb-2 md:py-8 md:leading-none lg:mt-5 lg:mb-5 px-12 cursor-default leading-7">
                    Help is here. Whenever and however you need it.
                </div>

                <div className="w-2/3 mx-auto lg:w-full"><HelpButtons/></div>
            </div>

            <Footer/>

        </div>
        

        
    );
}
