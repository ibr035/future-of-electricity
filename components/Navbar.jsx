import React from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Articles', href: '/articles', current: false },
    { name: 'Consumption', href: '/consumption', current: false },
    { name: 'About', href: '/about', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (

        <Disclosure as="nav" className="bg-gray-600">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="text-white"> 
                                <Link href="/">
                                     Future of electricity
                                </Link>
                                   
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                              'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : true}
                                          >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </>
            )}
        </Disclosure>
    )
};

