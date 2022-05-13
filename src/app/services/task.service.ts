import { Injectable } from '@angular/core';
import { task } from '../task-interface';
import { myTask } from '../mock-task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  constructor() { }

  getTasks(): Observable<task[]>{
    const tasks = of(myTask)
    return tasks
  }
}
