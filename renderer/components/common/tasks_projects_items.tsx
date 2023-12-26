import { TaskProps } from "../../types/interfaces";


export default function TaskProjectsItems(props: TaskProps) {
    return (
        <div className="p-5 bg-accent_black rounded-xl w-full mb-3">
            <div className="flex justify-between mb-3">
                {props.task_name}
                <button>
                    <i className="pi pi-ellipsis-h text-[#7D8089]"/>
                </button>
            </div>
            <div>
                {props.task_objective}
            </div>
            {props.project_name ?
                <div className="rounded-xl mt-4 w-fit px-1 py-1 bg-[#DAE0FF] font-semibold">
                    <span className="text-[#145361]">{props.project_name}</span>
                </div>
                : 
            null}

        </div>
    )
}