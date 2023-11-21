import perfil from "../../assets/foto-perfil.png";
import { TitleSection } from "../../components/titleSection";
import useMediaQuery from "../../hooks/useMediaQuery";

export function About() {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const isSmallScreens = useMediaQuery("(min-width: 768px)");

    const technologies = [
        { name: "React" },
        { name: "Tailwind" },
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "Node.js" },
        { name: "Git" },
    ];
    return (
        // ADICONAR UM MAX WIDTH AS MINHAS section
        <section id="About" className={`min-h-[90vh] flex flex-col justify-center items-center ${isNonMobileScreens ? "px-8" : "px-4"} max-w-[1200px]`}>
            <div className={`flex flex-col justify-center ${isNonMobileScreens ? "w-3/4" : "w-full"}`}>
                <TitleSection title="Sobre mim" itemNumber="01" />

                <div className={`flex justify-between gap-8 ${!isSmallScreens && "flex-col items-center"}`}>
                    <div className="flex-1">
                        <p className="text-primary-300 md:text-lg text-base text-left mb-2">
                            Desenvolvedor com experiência em <span className="text-secondary-100">React</span>, JavaScript, Typescript, consumo de <span className="text-secondary-100">APIs REST</span>, além de experiência no uso de bibliotecas como Tailwind e Bootstrap. No backend, conhecimentos na construção de APIs REST utilizando <span className="text-secondary-100">Nodejs</span>, MySQL e Mongodb. Gosto de destacar em mim a organização, proatividade e clareza na comunicação. Acredito na importância de trabalhar em equipe e colaborar eficazmente para alcançar objetivos comuns. Além disso, me considero resiliente e apaixonado por enfrentar desafios
                        </p>
                        <p className="text-primary-100 md:text-lg text-base text-left mb-2">
                            Tecnologias que tenho visto recentemente:
                        </p>
                        <ul className="list-disc pl-6 text-secondary-100 grid grid-cols-2">
                            {technologies.map((item, i) => (
                                <li key={i}><span className="text-primary-300">{item.name}</span></li>
                            ))}
                        </ul>
                    </div>

                    {/* INICIO MINHA IMAGEM */}
                    <div className="group w-2/5 flex flex-wrap justify-center relative md:mb-64 mb-40">
                        <div className="md:w-64 md:h-64 w-40 h-40 rounded mt-1 ml-1 absolute bg-secondary-100/50 group-hover:bg-transparent transition-colors duration-200 z-10" />
                        <div
                            className="md:w-64 md:h-64 w-40 h-40 rounded absolute mt-4 ml-4 group-hover:mt-6 group-hover:ml-6 border-2 border-secondary-100 group-hover:border-secondary-100/40 transition-all duration-500
                        flex justify-end items-end px-2.5 py-2 text-xs text-secondary-100" >
                            <a href="https://www.linkedin.com/in/luis-fernando-da-silva-1a24a2189/" target="_blank">@linkedin</a>
                        </div>
                        <div className="md:w-64 md:h-64 w-40 h-40 absolute transition-all duration-500 mt-1 ml-1 group-hover:mt-0 group-hover:ml-0">
                            <img src={perfil} alt="foto de perfil" className="rounded" />
                        </div>
                    </div>
                    {/* FINAL MINHA IMAGEM */}
                </div>
            </div>
        </section>
    )
}