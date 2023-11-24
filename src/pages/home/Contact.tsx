import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
    return (
        <section
            id="Contact"
            className={`min-h-[10vh] flex flex-col justify-center items-center px-4 max-w-[1200px]`}
        >
            <p className="text-secondary-100/70 font-bold text-2xl mb-3">
                Entre em contato comigo
            </p>
            <div className="flex gap-4 flex-wrap">
                <a
                    href="https://github.com/lusferr"
                    className="p-2 border border-secondary-100/70 rounded hover:scale-110 text-secondary-100"
                >
                    <FiGithub size={25} />
                </a>

                <a
                    href="https://www.linkedin.com/in/luis-fernando-da-silva-1a24a2189/"
                    className="p-2 border border-secondary-100/70 rounded hover:scale-110 text-secondary-100"
                >
                    <FiLinkedin size={25} />
                </a>

                <a
                    href="https://wa.me/5515981449343"
                    className="p-2 border border-secondary-100/70 rounded hover:scale-110 text-secondary-100"
                >
                    <FaWhatsapp size={25} />
                </a>
            </div>
        </section>
    );
}
