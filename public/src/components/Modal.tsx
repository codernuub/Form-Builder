interface Props {
    message: string,
    modal: boolean,
    close: () => void
    confirm: () => void
}
function Modal(props: Props) {
    return <div className={`w-full h-full absolute top-0 left-0 ${props.modal ? "flex" : "hidden"} items-center bg-gray-100/75`}>
        <div className="opacity-100 sm:w-full md:w-1/2 lg:w-1/5 m-4 p-8 bg-white rounded-lg shadow">
            <p className="mb-4">{props.message}</p>
            <div className="flex justify-end">
                <button className="px-4 py-1 rounded-md border-2 border-blue-600 text-blue-600 text-sm" onClick={props.close}>Close</button>
                <button className="px-4 py-1 rounded-md bg-red-600 text-white text-sm ml-4" onClick={props.confirm}>Delete</button>
            </div>
        </div>
    </div>
}

export default Modal;