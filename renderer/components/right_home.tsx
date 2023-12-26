import { useState } from "react";
import TaskProjectsItems from "./common/tasks_projects_items";

export default function RightSide() {
    const [selectedType, setSelectedType] = useState<string>('all');


    return (
        <div className="mt-0 px-3 w-2/6">
            <div className="flex w-[70%] justify-start">
                <button
                    className={selectedType === "all" ? `px-3 py-1 bg-primary_blue rounded-2xl` : `px-3 py-1 `}
                    onClick={() => {
                        setSelectedType('all');
                    }}
                >
                    All
                </button>
                <button
                    className={selectedType === "tasks" ? `px-3 py-1 bg-primary_blue rounded-2xl` : `px-3 py-1 `}
                    onClick={() => {
                        setSelectedType('tasks');
                    }}
                >
                    Tasks
                </button>
                <button
                    className={selectedType === "proj" ? `px-3 py-1 bg-primary_blue rounded-2xl` : `px-3 py-1 `}
                    onClick={() => {
                        setSelectedType('proj');
                    }}
                >
                    Projects
                </button>
            </div>
            <div className="h-[350px] lg:h-[650px] overflow-y-scroll overflow-x-hidden no-scrollbar mt-5">
                <TaskProjectsItems
                    task_name={"Something"}
                    task_objective={"Obj"}
                    project_name={"Some Project 1"}
                />

                <TaskProjectsItems
                    task_name={"Something"}
                    task_objective={"Obj"}
                    project_name={"Some Project 1"}
                />


                <TaskProjectsItems
                    task_name={"Something"}
                    task_objective={"Obj"}
                />


                <TaskProjectsItems
                    task_name={"Something"}
                    task_objective={"Obj"}
                />

                <TaskProjectsItems
                    task_name={"Something"}
                    task_objective={"Obj"}
                />


                <TaskProjectsItems
                    task_name={"Something"}
                    task_objective={"Obj"}
                />


                <TaskProjectsItems
                    task_name={"Something"}
                    task_objective={"Obj"}
                />


                <TaskProjectsItems
                    task_name={"Something"}
                    task_objective={"Obj"}
                />

                <TaskProjectsItems
                    task_name={"Something"}
                    task_objective={"Obj"}
                />
            </div>

        </div>
    )
}