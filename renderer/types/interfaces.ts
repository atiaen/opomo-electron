export interface TaskProps {
    task_name:string,
    task_objective:string,
    completed_date_time:string | Date;
    // total_sets:number
    project_name?:string;
}