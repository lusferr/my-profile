import { FiGithub, FiLinkedin } from 'react-icons/fi';
import useMediaQuery from '../hooks/useMediaQuery';

export function Footer() {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    return (
        <footer className={`${isNonMobileScreens ? "px-16 py-6" : "px-4 py-4"} sticky bottom-2 w-fit z-50`}>
            <div className="flex justify-center gap-4 items-center bg-slate-800/80 px-5 py-3 rounded shadow">
                <a href='https://github.com/lusferr'
                    className='cursor-pointer hover:scale-110 text-primary-100 hover:text-secondary-100 transition duration-300'>
                    <FiGithub />
                </a>
                <a
                    href='https://www.linkedin.com/in/luis-fernando-da-silva-1a24a2189/'
                    className='cursor-pointer hover:scale-110 text-primary-100 hover:text-secondary-100 transition duration-300'>
                    <FiLinkedin />
                </a>
            </div>
        </footer>
    )
}