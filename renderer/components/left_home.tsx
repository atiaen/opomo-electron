import { useState } from "react";
import HistoryTask from "./common/history_task";

export default function LeftSide() {

    const [newState, setNewState] = useState<string>('');

    return (
        <div className="mt-5 px-3 w-2/6">
            {newState === 'task' ?
                (<div className="rounded bg-accent_black px-3 py-2">
                    <div className="mb-2">
                        <input
                            className="bg-white rounded px-2 py-2 text-black font-[#000] w-3/6"
                            type="text"
                            placeholder="Title...."
                            style={{
                                outline: 'none',
                                WebkitAppearance: 'none',
                                boxShadow: 'none !important',
                            }}
                        />

                    </div>
                    <div className="mb-2">
                        <input
                            className="bg-white rounded px-2 py-2 text-black font-[#000] w-3/6"
                            type="text"
                            placeholder="Goal and objective"
                            style={{
                                outline: 'none',
                                WebkitAppearance: 'none',
                                boxShadow: 'none !important',
                            }}

                        />

                    </div>
                    <div className="mb-3">
                        <select
                            className="text-black px-2 py-2 w-3/6"
                            style={{
                                outline: 'none',
                                WebkitAppearance: 'none',
                                boxShadow: 'none !important',
                            }}
                        >
                            <option>Select an option....</option>
                            <option>Short Break</option>
                            <option>Long Break</option>
                        </select>
                    </div>
                    <div className="block">
                        <button className="rounded-xl bg-[#687099]">
                            Save
                        </button>
                        <button onClick={() => {
                            setNewState('')
                        }}>
                            Cancel
                        </button>
                    </div>

                </div>) : null}

            {newState === 'proj' ?
                (<div className="rounded bg-accent_black px-3 py-2">
                    <div>
                        <input type="text" placeholder="Title...." />

                    </div>
                    <div>
                        <input type="text" placeholder="Goal and objective" />

                    </div>
                    <div>
                        <select>
                            <option>Select an option....</option>
                            <option>Short Break</option>
                            <option>Long Break</option>
                        </select>
                    </div>
                    <div className="block">
                        <button className="rounded-xl bg-[#687099]">
                            Save
                        </button>
                        <button onClick={() => {
                            setNewState('')
                        }}>
                            Cancel
                        </button>
                    </div>

                </div>) : null}
            {newState === '' ? <div>
                <button
                    className="px-4 py-3 bg-primary_blue rounded-l-xl"
                    onClick={() => {
                        setNewState('task')
                    }}
                >
                    <span className="font-semibold">
                        New Task
                    </span>
                    <i className="ml-3 pi pi-plus font-semibold" />
                </button>
                <button
                    className="px-4 py-3 bg-primary_light_blue rounded-r-xl"
                    onClick={() => {
                        setNewState('proj')
                    }}
                >
                    <span className="text-primary_blue font-semibold">
                        New Project
                    </span>
                    <i className="ml-3 pi pi-plus text-primary_blue font-semibold" />
                </button>
            </div> : null}
            <div className="mt-5">
                <div className="flex justify-start mt-4 content-center">
                    <p className="mr-3 font-semibold">History</p>
                    <button className="px-3 py-1">
                        <i className="pi pi-eye text-primary_blue" />
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <div className="bg-primary_blue_2 text-center p-1 justify-center rounded-xl w-5/6">
                    <p className="">
                        {new Date().toDateString()}
                    </p>
                </div>

                <div className="h-[310px] lg:h-[520px] overflow-y-scroll overflow-x-hidden no-scrollbar mt-5">
                    <HistoryTask
                        task_name={"Test"}
                        task_objective={"Some objective here"}
                        completed_date_time={"2023/09/07"}
                    />

                    <HistoryTask
                        task_name={"Test"}
                        task_objective={"Some objective here"}
                        completed_date_time={"2023/09/07"}
                    />

                    <HistoryTask
                        task_name={"Test"}
                        task_objective={"Some objective here"}
                        completed_date_time={"2023/09/07"}
                    />

                    <HistoryTask
                        task_name={"Test"}
                        task_objective={"Some objective here"}
                        completed_date_time={"2023/09/07"}
                    />

                    <HistoryTask
                        task_name={"Test"}
                        task_objective={"Some objective here"}
                        completed_date_time={"2023/09/07"}
                    />


                    <HistoryTask
                        task_name={"Test"}
                        task_objective={"Some objective here"}
                        completed_date_time={"2023/09/07"}
                    />

                    <HistoryTask
                        task_name={"Test"}
                        task_objective={"Some objective here"}
                        completed_date_time={"2023/09/07"}
                    />
                </div>
            </div>
        </div>
    )
}