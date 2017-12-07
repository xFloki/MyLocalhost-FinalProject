import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../shared/services/task.service';
import { WeekTaskService } from './../../shared/services/weektask.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  tasks;
  weekTasks;
  error;
  constructor(
    private taskService: TaskService,  private weekTaskService: WeekTaskService) { }

  ngOnInit() {
    this.taskService.list().subscribe(
      (tasks) => this.tasks = tasks,
      (error) => this.error = error.message
    );

    this.weekTaskService.listByUser().subscribe(
      (tasks) => {
        this.weekTasks = tasks,
        console.log(tasks);
      },
      (error) => this.error = error.message
    );
  }

  add(id) {
    console.log(id);
    // this.weekTaskService.addToUser(id).subscribe(
    //   (e) => console.log(),
    //   (error) => this.error = error.message
    // );
  }

}
