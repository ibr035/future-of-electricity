import React from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from "next/navigation"


const navigation = [
    { name: 'Hjem', href: '/' },
    { name: 'Artikler', href: '/articles' },
    { name: 'Forbruk', href: '/consumption' },
    { name: 'Om strømavataler', href: '/about'},
    { name: 'Velg strømavtale', href: '/providers'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer(current) {
    let pathname = usePathname();
    return (
        <Disclosure className="bg-yellow height-100 footer  ">
            <div className="items-center justify-center">
                <div className="hidden sm:block items-center justify-center">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Disclosure>
    )
}