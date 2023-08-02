import { useEffect } from "react";
import IFormCard from "../Interfaces/IFormCard";

interface Props {
    form: IFormCard,
    remove: (form: string) => void
}

function FormCard(props: Props) {

    useEffect(() => {
        console.log(`rendered:${props.form._id}`);
    }, []);

    return <div className="w-full p-4 flex flex-col justify-between bg-white rounded shadow cursor-default hover-animation">
        <div className="my-auto">
            <div className="flex justify-between">
                <h2>{props.form.title}</h2>
                <span className={`h-fit px-2 my-auto inline-block ${props.form.published ? "bg-green-600" : "bg-red-600"} text-white rounded-md text-xs`}>{props.form.published ? "Published" : "Draft"}</span>
            </div>
            <div className="my-2">
                <span className="text-sm text-gray-500 mr-2 block">Questions {props.form.questions} </span>
                <span className="text-sm text-gray-500 mr-2 block">Submissions {props.form.responses}</span>
            </div>
        </div>
        <div className="flex justify-end">
            <span className="cursor-pointer md:text-sm fas fa-pencil"></span>
            <span className="ml-4 cursor-pointer md:text-sm fas fa-copy"></span>
            <span className="ml-4 cursor-pointer md:text-sm text-red-500 fas fa-trash" onClick={() => props.remove(props.form._id)}></span>
        </div>
    </div>
}

export default FormCard;