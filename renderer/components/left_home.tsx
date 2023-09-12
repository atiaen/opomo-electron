import HistoryTask from "./common/history_task";

export default function LeftSide() {
    return (
        <div className="mt-5 px-3">
            <div>
                <button className="px-4 py-3 bg-primary_blue rounded-l-xl">
                    <span className="font-semibold">
                        New Task
                    </span>
                    <i className="ml-3 pi pi-plus font-semibold" />
                </button>
                <button className="px-4 py-3 bg-primary_light_blue rounded-r-xl">
                    <span className="text-primary_blue font-semibold">
                        New Project
                    </span>
                    <i className="ml-3 pi pi-plus text-primary_blue font-semibold" />
                </button>
            </div>
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