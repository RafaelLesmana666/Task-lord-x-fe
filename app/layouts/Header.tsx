import Link from "next/link";
import { Menu, Transition } from '@headlessui/react';
import { BiCloud } from "react-icons/bi";


export function Header(){
    return (
        <div className="bg-white px-8 py-9 mb-8 rounded-b-3xl flex relative">
            <div className="flex flex-col">
                
            </div>
            <div className="absolute right-12 bottom-2 w-auto">
            <Menu as="div" className="relative">
                <Menu.Button>
                    <div className="block px-4 py-3 bg-emerald-400 w-48">
                        user
                    </div>
                </Menu.Button>
                <Transition
                    enter="ease-out duration-150"
                    enterFrom = "translate-x-0"
                    enterTo = "translate-y-2"
                >
                    <Menu.Items className="font-semibold flex w-80 flex-col absolute  right-0 mt-2 bg-white border rounded-b-3xl py-4 px-8 text-gray-400 border-gray-200">
                        <Menu.Item>
                                {({ active }) => (
                                    <div className={`flex items-center gap-2 ${active && 'text-blue-500'}`}>
                                        <BiCloud/>
                                    
                                    <Link 
                                        href="/table"
                                    >Pengaturan Akun</Link>
                                    </div>
                                )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'text-blue-500'}`}
                            href="/account-settings"
                            >
                            Documentation
                            </a>
                        )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
            </div>
        </div>
    )
}