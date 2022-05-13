import { Component, OnInit } from '@angular/core';
//  import task interface from the app component folder
import { task } from '../task-interface';
import { myTask } from '../mock-task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : task [] = []
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => this.tasks = task)
  }

  deleteItem(task: task) {
    console.log(task)
    console.log(task.id)
    myTask.filter((item)=> {
      if(item.id === task.id) {
        this.deleteItem
      }
    })
  }
}
