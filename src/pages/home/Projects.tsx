import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";

// components
import { WidgetOutherProject } from "../../components/widgetOutherProject";
import { WidgetProject } from "../../components/widgetProject";
import { TitleSection } from "../../components/titleSection";

export function Projects() {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const projectsData = [
        {
            id: 1,
            imageSrc: "https://user-images.githubusercontent.com/91674018/284736788-6b5f957f-997e-4d50-840e-4e0c64331bfc.png",
            title: "Social",
            description: "Projeto fullstack de uma rede social aonde é possivel adicionar amigos, ver e curtir publicações e detalhes de outros perfis.",
            technologies: [{ name: "React" }, { name: "TypeScript" }, { name: "Material UI" }, { name: "Node" }, { name: "MongoDB" }, { name: "Express" },],
            githubLink: "https://github.com/lusferr/upload-ia",
        },
        {
            id: 2,
            imageSrc: "https://i.imgur.com/GLZQGKt.png",
            title: "Habits",
            description: "Projeto para monitoração de novos hábitos aonde é possivel adicionar e acompanhar as tarefas diárias. Projeto desenvolvido na NLW da Rocktseat.",
            technologies: [{ name: "React" }, { name: "React Native" }, { name: "TypeScript" }, { name: "Node.js" }],
            githubLink: "https://github.com/lusferr/habits",
        },
        {
            id: 3,
            imageSrc: "https://user-images.githubusercontent.com/91674018/267149499-55eefeff-07d4-4db2-9e41-ee7eca826e2f.png",
            title: "UI Spotify",
            description: "Clone Ui do Spotify com design responsivo.",
            technologies: [{ name: "Nextjs" }, { name: "TypeScript" }, { name: "Tailwind" }],
            githubLink: "https://github.com/lusferr/ui-clone-spotify",
        },
        {
            id: 4,
            imageSrc: "https://user-images.githubusercontent.com/91674018/282910043-a2518b80-397a-4951-b110-aaf376112b4f.png",
            title: "upload-ia",
            description: "Transcrição de videos, sugestoês de titulos e descrições. Upload-ia é um projeto que utiliza a inteligencia artificial para trabalhamos melhor com videos.",
            technologies: [{ name: "React" }, { name: "TypeScript" }, { name: "Tailwind" }, { name: "RadixUi" }, { name: "Axios" },],
            githubLink: "https://github.com/lusferr/upload-ia",
        },
        {
            id: 5,
            imageSrc: "https://i.imgur.com/crSyUBE.png",
            title: "Evogym",
            description: "Projeto desenvolvido utilizando React, TypeScript e Tailwind, uma landing page para uma academia com design responsivo.",
            technologies: [{ name: "React" }, { name: "TypeScript" }, { name: "Tailwind" }],
            githubLink: "https://github.com/lusferr/evogym-tailwind",
        },

    ];

    const outhersProjectsData = [
        {
            id: 1,
            title: "Mobile ToDo List",
            description: "Uma lista de afazeres para dispositivos mobile.",
            technologies: [{ name: "Flutter" }],
            githubLink: "https://github.com/lusferr/projeto-pokedex-mapadev-week",
        },
        {
            id: 1,
            title: "CRUD Nodejs",
            description: "Simples CRUD utilizando Nodejs",
            technologies: [{ name: "Node js" }, { name: "MySql" }, { name: "Express" },],
            githubLink: "https://github.com/lusferr/projeto-pokedex-mapadev-week",
        },
        {
            id: 1,
            title: "Body Calculator",
            description: "Aplicativo mobile para calcular o IMC (Índice de massa corporal)",
            technologies: [{ name: "Flutter" }],
            githubLink: "https://github.com/lusferr/projeto-pokedex-mapadev-week",
        },
        {
            id: 1,
            title: "Pokédex",
            description: "Criação de uma pokédex aonde pudessemos selecionar um pokemon e ver as suas informações e características.",
            technologies: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
            githubLink: "https://github.com/lusferr/projeto-pokedex-mapadev-week",
        },
        {
            id: 2,
            title: "Validação de formulários",
            description: "Validação de um formulario simples utilizando Formik + Yup.",
            technologies: [{ name: "React" }, { name: "Formik" }, { name: "Yup" }],
            githubLink: "https://github.com/lusferr/projeto-pokedex-mapadev-week",
        },
        {
            id: 3,
            title: "ToDo List",
            description: "Meu primeiro projeto utilizando react, para criar e editar uma lista de afazeres",
            technologies: [{ name: "React" }],
            githubLink: "https://github.com/lusferr/projeto-pokedex-mapadev-week",
        },
    ];



    return (
        <section id="Projects" className={`min-h-[100vh] py-[10vh] flex flex-col justify-center items-center ${isNonMobileScreens ? "px-8" : "px-4"} max-w-[1200px] w-full`}>
            <div className={`flex flex-col justify-center z-30 ${isNonMobileScreens ? "w-3/4" : "w-full"}`}>
                <TitleSection title="Projetos" itemNumber="03" />
            </div>

            <div className={`flex flex-col gap-36 justify-start relative mb-10 ${isNonMobileScreens ? "w-3/4" : "w-full mt-10"}`}>
                {projectsData.map((item, i) => (
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: i * 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 80 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <WidgetProject
                            key={i + item.id}
                            id={item.id}
                            name={item.title}
                            descript={item.description}
                            image={item.imageSrc}
                            link={item.githubLink}
                            technologies={item.technologies}
                        />
                    </motion.div>
                ))}
            </div>

            <div className={`flex flex-col justify-center mt-36 z-30 ${isNonMobileScreens ? "w-3/4" : "w-full"}`}>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-primary-100 text-xl font-bold">Outros projetos</h1>
                    <div className="h-[1px] bg-primary-100/30 mt-2" />
                </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 ${isNonMobileScreens ? "w-3/4" : "w-full mt-10"}`}>
                {outhersProjectsData.map((item, i) => (
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 80 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{
                            translateY: -8,
                            transition: { delay: 0 },
                        }}
                        className="h-auto shadow-md bg-primary-700 rounded p-4">
                        <WidgetOutherProject
                            key={i + item.id}
                            name={item.title}
                            descript={item.description}
                            link={item.githubLink}
                            technologies={item.technologies}
                        />
                    </motion.div>
                ))}
            </div>
        </section>

    )
}