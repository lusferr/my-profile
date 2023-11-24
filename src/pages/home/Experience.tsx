import { motion } from "framer-motion";
import { TitleSection } from "../../components/titleSection";
import useMediaQuery from "../../hooks/useMediaQuery";

export function Experience() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const technologies = [
    { name: "React" },
    { name: "PHP" },
    { name: "Figma" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Tailwind" },
    { name: "Bootstrap" },
    { name: "Git" },
  ];

  return (
    <section
      id="Experience"
      className={`min-h-[90vh] flex flex-col justify-center items-center ${isNonMobileScreens ? "px-8" : "px-4"
        }  max-w-[1200px] w-full`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        transition={{ delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        className={`flex flex-col justify-center ${isNonMobileScreens ? "w-3/4" : "w-full"
          }`}
      >
        <TitleSection title="Experiência" itemNumber="02" />
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-col">
            <p className="text-primary-300 text-lg font-semibold">
              Stairs Digital Sistemas Avançados
            </p>
            <p className="text-primary-300/80 text-lg font-semibold">
              Desenvolvedor Front-end
            </p>
          </div>

          <ul className="list-disc pl-6 text-primary-300">
            <li>Desenvolvimento de aplicações utilizando React</li>
            <li>
              Manutenção e criação de novas funcionalidades em projetos PHP
            </li>
            <li>Design de interfaces utilizando Figma</li>
            <li>Estruturação de projetos no Azure DevOps</li>
            <li>Consumo de APIs REST</li>
            <li>Escrever códigos limpos e funcionais no front-end</li>
            <li>Controle de versionamento com Git</li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {technologies.map((item, i) => {
              return (
                <div
                  key={i}
                  className="rounded-xl w-fit px-2 py-1 bg-secondary-300/80 text-secondary-100 font-semibold"
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
