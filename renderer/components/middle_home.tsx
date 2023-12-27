// import { CircularProgressbarbuildStyles } from "react-circular-progressbar";
import ProgressBar from "./progress_bar";

export default function MiddleSide() {
    return (
        <div className="mt-5 px-3 w-2/6">
            <div className="flex content-center justify-center">
                <ProgressBar
                    size={200}
                    progress={85}
                    trackWidth={0}
                    trackColor={`#ddd`}
                    indicatorWidth={12}
                    indicatorColor="#A0342F"
                    indicatorCap="round"
                    label={`22:10`}
                    labelColor="#fffff"
                />
            </div>
            <div className="w-full flex content-center justify-between mt-3 px-8 lg:px-20">
                <button className="px-2 py-1 h-1/2 rounded-md bg-primary_blue">
                    <i className="pi pi-pause" />
                </button>
                <div className="text-center">
                    <p className="text-lg">Some text</p>
                    <h6 className="text-xs">1 Set done uwu</h6>
                </div>
                <button className="px-2 py-1 h-1/2 rounded-md bg-primary_blue">
                    <i className="pi pi-stop" />
                </button>
            </div>
            <div className="mb-5">
                <div>
                    Complete
                </div>
            </div>
            <div className="w-full bg-[#6666666B] rounded-3xl p-5">
                <div className="flex justify-between mb-3">
                    Title here
                    <button>
                        <i className="pi pi-ellipsis-h text-[#7D8089]" />
                    </button>
                </div>
                <div>
                    <p className="text-sm">
                        Objective here
                    </p>
                </div>
                <div className="rounded-xl mt-4 w-fit px-1 py-1 bg-[#DAE0FF] font-semibold">
                    <span className="text-[#145361]">PROJECT NAME</span>
                </div>
            </div>
        </div>
    )
}