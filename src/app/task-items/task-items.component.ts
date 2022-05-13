import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { task } from '../task-interface';
import { myTask } from '../mock-task';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {
  @Input() task: task | any;
  @Output() btnDelete: EventEmitter<task> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:task) {
    this.btnDelete.emit()
  }

}
