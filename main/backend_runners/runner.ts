import { Database } from "sqlite3";
import { Project, Tasks } from "../models/project";
import { Background } from "../background";
/**
 * 
 * 	start_date
		end_date
		project_name
		project_description
		is_completed?
 */
export class Runners{

    static async createTables() {
        Background.db.serialize(() => {
            Background.db.run
            (`CREATE TABLE IF NOT EXISTS 
            project (
                project_id TEXT PRIMARY KEY,
                project_name TEXT,
                project_description,
                is_completed INTEGER,
                start_date TEXT,
                end_date TEXT
            )`);

            Background.db.run
            (`CREATE TABLE IF NOT EXISTS 
            tasks (
                task_id TEXT,
                task_name TEXT,
                task_description,
                is_completed INTEGER,
                start_date TEXT,
                end_date TEXT,
                project_id TEXT,
                FOREIGN KEY (project_id) REFERENCES project (project_id) 
            )`);
        });
    }
/**{
  project_id: 'asda',
  project_name: 'asda',
  project_description: 'asd',
  is_completed: 'asd',
  start_date: 'asda',
  end_date: 'adad'
} */
    static async getAllProjects(){
        let projects:Project[] = []
        Background.db.serialize(() => {
          Background.db.each("SELECT * FROM project", (err, row:any) => {
                let proj:Project = {
                    project_id: row.project_id,
                    project_name: row.project_name,
                    project_description: row.project_description,
                    start_date: row.start_date,
                    end_date: row.end_date,
                    is_completed: row.is_completed === 1 ? true : false,
                }
                projects.push(proj);
                //console.log(row);
            });
        })

        return projects;
    }

    static async getAllTasks(){
        let tasks:Tasks[] = []
        Background.db.serialize(() => {
          Background.db.each("SELECT * FROM tasks", (err, row:any) => {
                let t:Tasks = {
                    task_id:row.task_id,
                    task_name: row.task_name,
                    task_description: row.task_description,
                    task_start_date: row.start_date,
                    task_end_date: row.end_date,
                    is_completed: row.is_completed === 1 ? true : false,
                }
                tasks.push(t)
                //console.log(row);
            });
        })

        return tasks
    }
}


