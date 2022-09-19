import { Popover, Transition } from '@headlessui/react'
import {Fragment} from "react";

const CategoriesNavbar = () => {
    return (
        <Popover.Group className="flex flex-row items-center font-Poppins">
            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={` ${open ? '' : 'text-opacity-90'}
                 group inline-flex items-center border-b-2 border-gray-300 px-5 py-2 text-base font-medium text-black 
                 hover:text-opacity-100 focus:border-red-700 focus:outline-none
                
                `}
                        >
                            <span>DOGS</span>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-2 bg-white p-4 lg:grid-cols-2">
                                            <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                            >
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        Food
                                                    </p>
                                                </div>
                                            </a>
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Accesories
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="relative grid gap-2 bg-white p-4 lg:grid-cols-2">
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-gray-50 p-4">
                                        <a
                                            href="/"
                                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                          <span className="flex items-center">
                                            <span className="text-sm font-medium text-gray-900">
                                              Documentation
                                            </span>
                                          </span>
                                                                <span className="block text-sm text-gray-500">
                                            Start integrating products and tools
                                          </span>
                                        </a>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={` ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center border-b-2 border-gray-300 px-5 py-2 text-base font-medium text-black 
                 hover:text-opacity-100 focus:border-red-700 focus:outline-none`}
                        >
                            <span>CATS</span>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-2 bg-white p-4 lg:grid-cols-2">
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="relative grid gap-2 bg-white p-4 lg:grid-cols-2">
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-gray-50 p-4">
                                        <a
                                            href="/"
                                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                          <span className="flex items-center">
                                            <span className="text-sm font-medium text-gray-900">
                                              Documentation
                                            </span>
                                          </span>
                                            <span className="block text-sm text-gray-500">
                                            Start integrating products and tools
                                          </span>
                                        </a>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className={` ${open ? '' : 'text-opacity-90'}
                 group inline-flex items-center border-b-2 border-gray-300 px-5 py-2 text-base font-medium text-black 
                 hover:text-opacity-100 focus:border-red-700 focus:outline-none
                
                `}
                        >
                            <span>ACCESORIES</span>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-2 bg-white p-4 lg:grid-cols-2">
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="relative grid gap-2 bg-white p-4 lg:grid-cols-2">
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                        <a href="/" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Algo
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-gray-50 p-4">
                                        <a
                                            href="/"
                                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                          <span className="flex items-center">
                                            <span className="text-sm font-medium text-gray-900">
                                              Documentation
                                            </span>
                                          </span>
                                            <span className="block text-sm text-gray-500">
                                            Start integrating products and tools
                                          </span>
                                        </a>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </Popover.Group>




    // <ul className="font-PTSans menu menu-horizontal gap-x-10 flex flex-row place-content-center items-center w-full bg-rose-50">
        //     <li tabIndex={0} className="flex w-40 relative">
        //         <span className="hover:bg-red-100 w-40 justify-center font-bold">Dogs</span>
        //         <ul className="bg-base-100 w-96 items-center shadow-lg absolute z-10">
        //             <li>
        //                 <a className="w-full hover:bg-red-100 py-2 font-semibold">Food</a>
        //             </li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Accesories</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Beds</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Bowls & Feeders</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Collars, Leads & Harnesses</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Grooming</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Kennels</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Toys</a></li>
        //         </ul>
        //     </li>
        //     <li tabIndex={1} className="flex w-40">
        //         <span className="hover:bg-red-100 w-40 justify-center font-bold">Cats</span>
        //         <ul className="bg-base-100 w-96 items-center shadow-lg absolute z-10">
        //             <li>
        //                 <a className="w-full hover:bg-red-100 py-2 font-semibold">Food</a>
        //             </li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Accesories</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Beds</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Bowls & Feeders</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Collars, Leads & Harnesses</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Grooming</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Kennels</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Toys</a></li>
        //         </ul>
        //     </li>
        //     <li tabIndex={2} className="flex w-40">
        //         <span className="hover:bg-red-100 w-40 justify-center font-bold">Accesories</span>
        //         <ul className="bg-base-100 w-96 items-center shadow-lg absolute z-10">
        //             <li><a className="w-full hover:bg-red-100 py-2">Bags & Purses</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Jewellery</a></li>
        //             <li><a className="w-full hover:bg-red-100 py-2">Clothing</a></li>
        //         </ul>
        //     </li>
        // </ul>
    )
}

export default CategoriesNavbar