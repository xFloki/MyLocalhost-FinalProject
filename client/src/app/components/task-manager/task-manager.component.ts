import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../shared/services/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  tasks;
  error;
  constructor(private taskService: TaskService) { }

  ngOnInit() {

    console.log('GG')
    this.taskService.list().subscribe(
      (tasks) => this.tasks = tasks,
      (error) => this.error = error.message
    );
  }

}
