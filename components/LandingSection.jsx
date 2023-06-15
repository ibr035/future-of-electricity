import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function LandingSection() {
    
    return (
        
            <div className="bg-beige">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-36">

                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Finn en strømavatale som passer deg!
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                En side som sammenligner strømavataler! Laget for å hjelpe deg 
                                å velge den beste avtalen for dine behov og situasjon. 
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="/providers"
                                    className="rounded-md bg-yellow px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Velg strømavtale
                                </a>
                                <a href="./consumption" className="text-sm font-semibold leading-6 text-gray-900">
                                    Se gjennomsnittlig forbruk <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
     
    )
}