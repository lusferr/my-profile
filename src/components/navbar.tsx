import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';

// cv pdf
import my_cv from '../assets/my_cv.pdf';

export function Navbar() {
    const links = [
        { name: "Sobre", route: "#About" },
        { name: "Experiência", route: "#Experience" },
        { name: "Projetos", route: "#Projects" },
        { name: "Contato", route: "#Contact" },
    ]

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const isSmallScreens = useMediaQuery("(min-width: 768px)");
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

    return (
        <nav className={`${isNonMobileScreens ? "px-16" : "px-4"} py-3 sticky top-0 z-50`}>
            <div className="flex justify-between items-center bg-slate-900/90 px-5 py-3 rounded shadow ">
                <div className="px-2 border-2 border-secondary-100 rounded">
                    <a href="#Presentation">
                        <h1 className="text-3xl text-primary-100 font-semibold hover:scale-110 transition duration-300">
                            L
                        </h1>
                    </a>
                </div>

                {isSmallScreens ? (
                    <div className="flex justify-between gap-2">
                        <ul className="flex justify-between gap-10">
                            {links.map((item, i) => (
                                <li key={i + item.name}>
                                    <a href={item.route} className="text-primary-100 hover:text-secondary-100 font-semibold transition duration-500">
                                        <span className="text-secondary-100/90">0{i + 1}.</span> {item.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button className="hover:scale-110 transition duration-500">
                                    <a
                                        href={my_cv}
                                        className="py-1 px-2 border-2 border-secondary-100 rounded text-secondary-100 hover:text-primary-100 font-semibold transition duration-500">
                                        Currículo
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                )
                    : (
                        <button
                            type="button"
                            className="rounded cursor-pointer transition duration-300 text-secondary-100/90 hover:scale-110 hover:text-secondary-100"
                            onClick={() => setIsMobileMenuToggled(true)}
                        >
                            <BiMenuAltRight size={35} />
                        </button>
                    )
                }
            </div>

            {!isSmallScreens && isMobileMenuToggled && (
                <div className="fixed right-0 bottom-0 h-[100%] w-screen z-40 backdrop-blur-sm transition duration-700">
                    <div className="fixed right-0 top-0 h-fit z-50 max-w-[500px] min-w-[300px] bg-primary-700 p-4 shadow rounded">
                        <div className="flex justify-start">
                            <button type="button" onClick={() => setIsMobileMenuToggled(false)}>
                                <MdOutlineClose size={35} className="cursor-pointer hover:scale-110 text-white" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center">
                            <ul className="flex flex-col justify-between gap-10 py-8">
                                {links.map((item, i) => (
                                    <li key={i + item.name}>
                                        <a href={item.route} className="text-primary-100 hover:text-secondary-100 font-semibold transition duration-500">
                                            <span className="text-secondary-100/90">0{i + 1}.</span> {item.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <button className="hover:scale-110 transition duration-500">
                                        <a
                                            href={my_cv}
                                            className="py-1 px-2 border-2 border-secondary-100 rounded text-secondary-100 hover:text-primary-100 font-semibold transition duration-500">
                                            Currículo
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}