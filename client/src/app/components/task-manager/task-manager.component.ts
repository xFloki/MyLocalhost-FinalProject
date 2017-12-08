import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../shared/services/task.service';
import { WeekTaskService } from './../../shared/services/weektask.service';
import { AuthService } from './../../shared/services/auth.service';

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
    private taskService: TaskService,
    private weekTaskService: WeekTaskService,
    private authService: AuthService  ) { }

  ngOnInit() {
    this.taskService.list().subscribe(
      (tasks) => this.tasks = tasks,
      (error) => this.error = error.message
    );
    this.listByUser();

  }

  listByUser() {
    this.weekTaskService.listByUser().subscribe(
      (tasks) => {
        this.weekTasks = tasks,
        console.log(tasks);
      },
      (error) => this.error = error.message
    );
  }

  add(id) {
    this.weekTaskService.addToUser(id,this.authService.user.id).subscribe(
      (e) => this.listByUser(),
      (error) => this.error = error.message
    );
  }

}
