'use client'

import Link from "next/link";
import { useRef, useState } from "react";
import { Transition } from '@headlessui/react'
import { BiGridAlt, BiListUl, BiLogoFlask, BiLogoRedux, BiSolidAdjust, BiTrash, BiWrench } from "react-icons/bi";
import { Header } from "./Header";
import Toggle from "./Toggle";


export default function SideBar({ title, subtitle, children, button } : any) {
    const [state, setState ] = useState(false);
    const [openMasterFile, setOpenMasterFile ] = useState(false);
    const [openUserManager, setOpenUserManager ] = useState(false);
    const appendClass = state ? "w-80 items-end pr-8 ease-out translate-x-0 pl-8" : "pl-2 w-24 items-end pr-4 ease-in";
    const Nav = state ? "w-64 p-4" : "p-4";

    function handleClik(value: any){
        if(state == false){
            setState(!state);
        }
        
        let handle = eval(value);
       
    }

    function handleMenu(){
        setState(!state);
        setOpenMasterFile(false);
        setOpenUserManager(false);
    }

    const menus = [
        {
            key: 'master',
            icon: <BiLogoRedux className="text-xl"/>,
            name: "Master File",
            set: 'setOpenMasterFile(!openMasterFile)',
            state: openMasterFile,
            child: [
                {
                    url: '/form',
                    nama: 'Form'
                },
                {
                    url: '/table',
                    nama: 'Table'
                },
            ]
        },
        {
            key: 'um',
            name: "User Manager",
            open: false,
            icon:  <BiSolidAdjust className="text-xl"/>,
            set: 'setOpenUserManager(!openUserManager)',
            state: openUserManager,
            child: [
                {
                    url: '/user',
                    nama: 'User'
                },
                {
                    url: '/setting',
                    nama: 'Setting'
                }
            ]
        },
    ]

    return(
        <div className="flex gap-4">
            <aside className={`bg-white rounded-tr-3xl rounded-br-3xl h-screen sticky flex flex-col py-8 gap-3 duration-500 transition-all inset-0 ${appendClass}`}>
                <button className={`text-3xl text-gray-400 mb-10 ${state ? "" : "pr-3"}`} onClick={handleMenu}><BiListUl/></button>
                    {menus.map((menu) => (
                        <>
                        <button 
                            onClick={() => handleClik(menu.set)} 
                            className={`${Nav} ${menu.state ? "nav-control-select" : "nav-control"}`}>{menu.icon}
                            <label className={state ? "cursor-pointer" : "hidden"}>
                                {menu.name}
                            </label>
                        </button>
                        <Transition
                                show={menu.state}
                                enter="transition-opacity duration-100"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-75"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                            <div className={`flex flex-col w-60 px-2 py-1 gap-1 items-star ${menu.state ? "delay-500" : "hidden"}`}>
                                {menu.child.map((ex) => (
                                    <Link href={ex.url} className="text-gray-400 hover:text-blue-500 py-1">{ex.nama}</Link>
                                ))}
                            </div>
                        </Transition>
                        </>
                    ))}
                <div className="absolute bottom-2">
                    <Toggle/>
                </div>
            </aside>
            <div className="w-full pr-4">
                <Header />
                <div className="bg-white rounded-t-3xl p-8 h-auto min-h-screen no-scrollbar">
                    {children}
                </div>
            </div>
        </div>

    )
}