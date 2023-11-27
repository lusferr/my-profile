import { FiGithub } from 'react-icons/fi';
import useMediaQuery from '../hooks/useMediaQuery';

interface technology {
    name: string;
}

interface WidgetProjectProps {
    id: number;
    image: string;
    name: string;
    descript: string;
    technologies: technology[];
    link: string;
}

export function WidgetProject({ id, image, name, descript, technologies, link }: WidgetProjectProps) {
    const isMediumScreens = useMediaQuery("(min-width: 760px)");

    if (!isMediumScreens) {
        return (
            <div className='flex justify-center items-center group p-4 bg-primary-700/70 group shadow'>
                <img src={image} alt="foto do projeto" className='w-full h-auto absolute rounded opacity-20 group-hover:opacity-60 transition duration-500' />
                <div className="w-full flex flex-col gap-2 z-30">
                    <div className="text-start mb-2 shadow rounded bg-primary-800/70 group-hover:bg-primary-800/40 p-4">
                        <p className="text-secondary-100 group-hover:text-primary-100/70 font-semibold transition duration-500">Projeto realizado</p>
                        <h2 className="text-3xl font-semibold text-primary-100 group-hover:text-secondary-100">{name}</h2>
                    </div>
                    <div className="bg-primary-700 p-4 shadow rounded group-hover:opacity-0 transition duration-500">
                        <div className="h-auto text-start text-primary-100">
                            {descript}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start gap-4 mt-4 text-primary-100 font-bold bg-primary-800/70 group-hover:bg-primary-800/40 group-hover:text-primary-100/50 p-4 rounded shadow">
                        {technologies.map((item, i) => (
                            <p key={i}>{item.name}</p>
                        ))}
                    </div>
                    <div className="flex justify-start gap-4 mt-4">
                        <a href={link} className='cursor-pointer hover:scale-110 text-white hover:text-secondary-100 transition duration-300'><FiGithub /></a>
                    </div>
                </div>
            </div>
        )
    }

    if (id % 2 != 0) {
        return (
            <div className="flex items-center">
                <a href={link} target='_blank' className="w-[560px] overflow-hidden rounded">
                    <div className="w-[560px] h-80 bg-secondary-100/50 z-10 absolute hover:bg-transparent transition-colors duration-500 rounded" />
                    <div className="w-[560px] h-80 z-10 rounded">
                        <img src={image} alt="foto do projeto" className="w-full h-full" />
                    </div>
                </a>

                <div className="flex flex-col items-end gap-2 max-w-[400px] absolute right-0 z-20">
                    <div className="text-end mb-2 w-fit">
                        <p className="text-secondary-100 font-semibold">Projeto realizado</p>
                        <h2 className="text-3xl font-semibold text-primary-100">{name}</h2>
                    </div>
                    <div className="bg-primary-700 p-4 shadow rounded">
                        <div className="h-auto text-end text-primary-100">
                            {descript}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-end gap-4 mt-4 bg-primary-700 p-2 rounded shadow">
                        {technologies.map((item, i) => (
                            <p key={i} className='text-primary-300 font-bold'>{item.name}</p>
                        ))}
                    </div>
                    <div className="flex justify-end gap-4 mt-4">
                        <a href={link} target='_blank' className='cursor-pointer hover:scale-110 text-white hover:text-secondary-100 transition duration-300'><FiGithub /></a>
                    </div>
                </div>
            </div>
        )
    }
    if (id % 2 === 0) {
        return (
            <div className="flex items-center">
                <div className="max-w-[400px] z-20 flex flex-col gap-2">
                    <div className="text-start mb-2">
                        <p className="text-secondary-100 font-semibold">Projeto realizado</p>
                        <h2 className="text-3xl font-semibold text-primary-100">{name}</h2>
                    </div>
                    <div className="bg-primary-700 p-4 shadow rounded">
                        <div className="h-auto text-start text-primary-100">
                            {descript}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start gap-4 mt-4 bg-primary-700 p-2 rounded shadow w-fit">
                        {technologies.map((item, i) => (
                            <p key={i} className='text-primary-300 font-bold'>{item.name}</p>
                        ))}
                    </div>
                    <div className="flex justify-start gap-4 mt-4">
                        <a href={link} target='_blank' className='cursor-pointer hover:scale-110 text-white hover:text-secondary-100 transition duration-300'><FiGithub /></a>
                    </div>
                </div>

                <a href={link} target='_blank' className="w-[560px] overflow-hidden absolute right-0">
                    <div className="w-[560px] h-80 bg-secondary-100/50 z-10 absolute hover:bg-transparent transition-colors duration-500 rounded" />
                    <div className="w-[560px] h-80 z-10 rounded">
                        <img src={image} alt="foto do projeto" className="w-full h-full" />
                    </div>
                </a>
            </div>
        )
    }
}