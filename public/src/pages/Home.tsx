import { useState } from "react";

import FormCard from "../components/FormCard";
import Modal from "../components/Modal";

import IFormCard from "../Interfaces/IFormCard";

function Home() {

    const [forms, setForms] = useState<IFormCard[]>([{
        _id: "1",
        title: "Untitled Form",
        questions: 0,
        responses: 0,
        published: false
    }, {
        _id: "2",
        title: "English Language Test",
        questions: 20,
        responses: 4,
        published: true
    }])
    const [deleteModal, setDeleteModal] = useState<string>("");

    const removeCard = (formId: string): void => {
        setDeleteModal(formId)
    };

    return <div>
        <div className="flex justify-between bg-white shadow p-4">
            <h1 className="text-gray-500 uppercase my-auto">Form Builder</h1>
            <button className="bg-purple-400 text-white text-sm shadow px-2 py-1 rounded-md hover-animation">Create new form</button>
        </div>

        <div className="p-4">
            <h1 className="mb-4">Forms</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {forms.map((form, index) => <FormCard key={index} form={form} remove={removeCard} />)}
            </div>
        </div>
        <Modal message={"Are you sure you want to delete this form?"} modal={deleteModal ? true : false} close={() => setDeleteModal("")} confirm={() => { }} />
    </div>
}

export default Home;