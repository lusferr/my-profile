import { FiGithub } from 'react-icons/fi';
import { GoFileDirectory } from "react-icons/go";

interface technology {
    name: string;
}

interface WidgetOutherProjectProps {
    name: string;
    descript: string;
    technologies: technology[];
    link: string;
}

export function WidgetOutherProject({ technologies, name, descript, link }: WidgetOutherProjectProps) {
    return (
        <a href={link} target='_blank' className="flex flex-col gap-4 group">
            <div className="flex justify-between items-center  text-primary-100">
                <div className='cursor-pointer text-secondary-100 hover:text-secondary-100 transition duration-300'><GoFileDirectory size={30} /></div>
                <a href={link} className='cursor-pointer hover:scale-110 text-white hover:text-secondary-100 transition duration-300'><FiGithub /></a>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold text-primary-100 group-hover:text-secondary-100 transition duration-300'>{name}</h1>
                <p className=' text-primary-300'>{descript}</p>
            </div>

            <div className='flex flex-wrap gap-2 mt-auto'>
                {technologies?.map((item, i) => (
                    <p key={i} className='text-primary-300/70 text-sm'>{item.name}</p>
                ))}
            </div>
        </a>
    )
}