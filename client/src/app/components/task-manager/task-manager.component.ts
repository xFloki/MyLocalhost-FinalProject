import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../shared/services/task.service';
import { WeekTaskService } from './../../shared/services/weektask.service';
import { AuthService } from './../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  tasks;
  weekTasks;

  constructor(
    private taskService: TaskService,
    private weekTaskService: WeekTaskService,
    private authService: AuthService,
    private router: Router   ) { }

  ngOnInit() {
    this.listUnassigned();
    this.listByUser();

  }

  listByUser() {
    this.weekTaskService.listByUser().subscribe(
      (tasks) => {
        this.weekTasks = tasks,
        console.log(tasks);
      }
    );
  }

  listUnassigned(){
    this.taskService.listUnassigned().subscribe(
      (tasks) => this.tasks = tasks
    );
  }

  add(id) {
    this.weekTaskService.addToUser(id).subscribe(
      (e) => {
        this.listByUser();
        this.listUnassigned();
      }
    );
  }

}
