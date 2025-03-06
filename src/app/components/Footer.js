import React from 'react';
import Image from "next/image";
import { cinzel, aldrich, inter, tektur } from '../fonts';
import { facebook, instagram, linkedin, twitter, XLogo, X_logo_2023 } from "../assets";
import cdic from '../images/cdic-badge.svg';

  const footerLinks1 = [
    {
      title: "About City Bank",
      links: [
        {
          name: "Investor Relations",
          link: "/content/",
        },
        {
          name: "Media Newsroom",
          link: "/how-it-works/",
        },
        {
          name: "Economics",
          link: "/create/",
        },
      ],
    },
  ];
  const footerLinks2 = [
    {
      title: "Customer Service",
      links: [
        {
          name: "Apply Online",
          link: "/content/",
        },
        {
          name: "Voluntary Codes",
          link: "/create/",
        },
        {
          name: "Public Commitments",
          link: "/explore/",
        },
        {
          name: "1-800-800-CITY",
          link: "/terms-and-services/",
        },
      ],
    },
  ];
  const footerLinks3 = [
    {
      title: "Daily Numbers",
      links: [
        {
          name: "Foreign Exchange",
          link: "/help-center/",
        },
        {
          name: "Rates",
          link: "/partners/",
        },
        {
          name: "Mortgage Rates",
          link: "/suggestions/",
        },
        {
          name: "Mutual Funds",
          link: "/blog/",
        },
      ],
    }
  ];
  const footerLinks4 = [
    {
      title: "Work at City Bank",
      links: [
        {
          name: "Careers at City Bank",
          link: "/our-partner/",
        },
      ],
    },
  ];

//   const XLogo = () => {
//     return (
//         <svg width="300" height="300.251" version="1.1" xmlns="http://www.w3.org/2000/svg">
//     <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
// </svg>
//     )
//   }
  
  const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/tianxiaozhang",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.instagram.com/tianxiaozhang",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.instagram.com/tianxiaozhang",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.instagram.com/tianxiaozhang",
    },
  ];

function Footer() {
    let textBox = "bg-white text-slate-800 sm:text-lg rounded-l-3xl active:ring-slate-50 focus:ring-slate-50 focus:border-slate-50 block p-2 pl-6 lg:px-6 w-3/4";
    
    let footerTitle = "text-slate-100 cursor-default text-sm lg:text-lg leading-3 font-semibold"
    let footerText = "my-2 leading-2 text-sm lg:text-lg lg:leading-8 text-slate-200"
    
    return (
        <div className='home-main-gradient mt-4 pt-2 lg:pt-0'>
            <div className='lg:max-w-7xl mx-auto'>

                <div className='lg:flex'>
                    <div className='lg:w-1/2 lg:my-2 lg:pt-4 lg:pb-6'>
                        <div className='flex justify-center items-center mb-1 text-slate-50 lg:mb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 lg:size-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <div className='text-md lg:text-xl ml-1 cursor-default'>
                                Find a branch or ATM
                            </div>
                        </div>

                        <div className='flex justify-center mb-4 lg:mb-0'>
                            <input type="address" name="address" id="address" className={`${textBox}`} placeholder="Enter address or postal code" required=""/>
                            <div className='bg-white rounded-r-3xl flex items-center pr-2'>
                                <div className='bg-rouLan p-1 rounded-full text-slate-50 cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4 lg:size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="flex lg:hidden h-0.5 mt-6 mb-3 bg-slate-300 mx-6 border-0"/>

                    <div className='lg:w-1/2 lg:my-2 lg:pt-4 lg:pb-6'>
                        <div className='flex justify-center items-center mb-1 text-slate-50 lg:mb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 lg:size-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                            </div>
                            <div className='text-md lg:text-xl ml-1.5 cursor-default'>
                                Make an appointment
                            </div>
                        </div>

                        <div className='flex justify-center mb-4 lg:mb-0 space-x-4 text-rouLan hover:text-blue-800 lg:font-semibold text-md lg:text-lg'>
                            <div className='bg-white rounded-3xl px-3 lg:px-5 py-2 cursor-pointer'>Meet with us</div>
                            <div className='bg-white rounded-3xl px-3 lg:px-5 py-2 cursor-pointer'>Manage your meeting</div>
                        </div>
                    </div>
                </div>

                <hr className="h-0.5 bg-slate-300 lg:bg-slate-400 mx-6 border-0"/>

                <section className={`flex justify-center items-center flex-col mt-2  lg:mt-6`}>

                    <div className="w-full justify-center text-center flex-wrap md:mt-0 mt-2 text-md lg:px-12 text-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                        {footerLinks1.map((footerlink) => (
                            <div key={footerlink.title} className={`text-center justify-center `}>
                                <h4 className={footerTitle}>
                                    {footerlink.title}
                                </h4>
                                <ul className={footerText}>
                                    {footerlink.links.map((link, index) => (
                                        <li
                                            key={link.name}
                                            className={`font-normal  hover:text-white hover:underline cursor-pointer ${
                                                index !== footerlink.links.length - 1 ? "mb-0" : "mb-0"
                                            }`}
                                        >
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {footerLinks2.map((footerlink) => (
                            <div key={footerlink.title} className={`text-center justify-center `}>
                                <h4 className={footerTitle}>
                                    {footerlink.title}
                                </h4>
                                <ul className={footerText}>
                                    {footerlink.links.map((link, index) => (
                                        <li
                                            key={link.name}
                                            className={`font-normal  hover:text-white hover:underline cursor-pointer ${
                                                index !== footerlink.links.length - 1 ? "mb-0" : "mb-0"
                                            }`}
                                        >
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {footerLinks3.map((footerlink) => (
                            <div key={footerlink.title} className={`text-center justify-center `}>
                                <h4 className={footerTitle}>
                                    {footerlink.title}
                                </h4>
                                <ul className={footerText}>
                                    {footerlink.links.map((link, index) => (
                                        <li
                                            key={link.name}
                                            className={`font-normal hover:text-white hover:underline cursor-pointer ${
                                                index !== footerlink.links.length - 1 ? "mb-0" : "mb-0"
                                            }`}
                                        >
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {footerLinks4.map((footerlink) => (
                            <div key={footerlink.title} className={`text-center justify-center `}>
                                <h4 className={footerTitle}>
                                    {footerlink.title}
                                </h4>
                                <ul className={footerText}>
                                    {footerlink.links.map((link, index) => (
                                        <li
                                            key={link.name}
                                            className={`font-normal hover:text-white hover:underline cursor-pointer ${
                                                index !== footerlink.links.length - 1 ? "mb-0" : "mb-0"
                                            }`}
                                        >
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-2 border-t-[1px] border-t-slate-400 mt-2 lg:mt-6"></div>

                    <div className="flex justify-center text-center">
                        <div>
                            <div className="text-md lg:text-lg text-slate-200 lg:mb-1 mb-3 lg:mt-0.5 cursor-default">City Bank is a member of Canada Deposit Insurance Corporation (CDIC).</div>
                            <div className="flex justify-center lg:mt-2">
                                <Image
                                    src={cdic}
                                    alt=""
                                    className="lg:-mb-2.5"
                                    width="80 lg:120"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:flex justify-between items-center lg:pt-4 lg:pb-6 border-t-[1px] border-t-slate-400 mt-2 lg:mt-6">
                        <p className="mt-2 font-normal text-center text-white lg:-mt-1 cursor-default">
                            Copyright Ⓒ 2023 City Bank. All Rights Reserved.
                        </p>

                        <div className="flex flex-row justify-center md:mt-0 mt-6 text-white mb-6 lg:mb-0">
                            {socialMedia.map((social, index) => (

                                <Image
                                    key={social.id}
                                    src={social.icon}
                                    alt={social.id}
                                    className={` object-contain cursor-pointer fill-white ${
                                    index !== socialMedia.length - 1 ? "mr-3" : "mr-0"
                                    }`}
                                    onClick={() => window.open(social.link)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                

            </div>
        </div>
    )
}

export default Footer
