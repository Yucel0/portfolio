import { Experience } from "@/app/experiences/page"

interface Item {
    item: Experience;
}

export default function Card({ item }:Item){
    return (
        <article className="flex flex-col px-4 py-6 border border-solid border-[#ccc] rounded-md gap-3 select-none hover:shadow-customShadow transition duration-300 ease-in-out">
            <span className="text-[#ff642d]">{item.date}</span>
            <h2 className="text-2xl">{item.company}</h2>
            <p>{item.description}</p>
            <p>{item.techStack}</p>
        </article>
    )
}