import { Database } from "sqlite3";
import { Project } from "../models/project";
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
}


