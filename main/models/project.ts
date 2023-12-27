export interface Project {
    project_id:string
    project_name:string,
    project_description:string,
    start_date:string | Date,
    end_date:string | Date,
    is_completed:boolean

}

export interface Tasks {
    task_id:string,
    task_name:string,
    task_description:string,
    task_start_date:string | Date,
    task_end_date:string | Date,
    is_completed:boolean
}

/**
 * start_date
		end_date
		project_name
		project_description
		project_tasks
			task_name
			task_description
			task_start
			task_end
 */