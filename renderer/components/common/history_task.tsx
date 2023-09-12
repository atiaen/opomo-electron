import { TaskProps } from "../../types/interfaces";


export default function HistoryTask(props: TaskProps) {
    return (
        <div className="p-5 bg-accent_black rounded-xl w-full mb-3">
            <div>
                {props.task_name}
            </div>
            <div>
                {props.task_objective}
            </div>
            <div className="text-green-900 font-semibold">
                <span>Completed at {new Date(props.completed_date_time).toDateString()}</span>
            </div>
        </div>
    )
}