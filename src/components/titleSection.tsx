import useMediaQuery from "../hooks/useMediaQuery";

interface TitleSectionProps{
    itemNumber?: string,
    title: string
}

export function TitleSection({title, itemNumber} : TitleSectionProps) {
    const isSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <div className="flex items-center gap-2 mb-4">
            <h1 className="text-primary-100 text-3xl font-bold "><span className="text-secondary-100">{itemNumber}.</span> {title}</h1>
            {isSmallScreens && <div className="h-[1px] w-56 bg-primary-100/30 mt-2" />}
        </div>
    )
}