import useMediaQuery from "../../hooks/useMediaQuery";

export function Presentation() {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    return (
        <section id="Presentation" className={`min-h-[75vh] flex justify-center items-center ${isNonMobileScreens ? "px-8" : "px-4"} max-w-[1200px]`}>
            <div 
            className={`flex flex-col gap-4 md:w-full`}>
                <p className="text-secondary-100 text-xl">Prazer, eu sou o</p>
                <h1 className="text-primary-100 md:text-7xl text-4xl font-bold">Luis Fernando</h1>
                <h2 className="text-primary-300 md:text-5xl text-3xl font-bold">Desenvolvedor web</h2>
                <p className={`text-primary-300/80 md:text-xl text-base font-semibold ${isNonMobileScreens ? "w-3/5" : "w-full"}`}>
                    Sou um entusiasta do desenvolvimento web apaixonado por desafios e inovação. Com uma mentalidade resiliente, estou sempre em busca de superar obstáculos e aprender algo novo a cada dia. Atualmente, estou imerso no mundo do React e Node, aprimorando minhas habilidades para criar experiências incríveis.
                </p>
            </div>
        </section>
    )
}