import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Presentation } from "./Presentation";
import { Projects } from "./Projects";


export function Home() {



    return (
        <div className="flex flex-col justify-center items-center">
            <Presentation />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}