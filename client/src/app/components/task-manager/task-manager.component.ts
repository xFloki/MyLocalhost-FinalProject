import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../shared/services/task.service';
import { WeekTaskService } from './../../shared/services/weektask.service';
import { AuthService } from './../../shared/services/auth.service';
import { HouseService } from './../../shared/services/house.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  tasks;
  weekTasks;
  owner:boolean = false;

  constructor(
    private taskService: TaskService,
    private weekTaskService: WeekTaskService,
    private authService: AuthService,
    private houseService: HouseService,
    private router: Router   ) { }

  ngOnInit() {
    this.listByUser();
    this.houseService.currentUserHouse().subscribe(
      (house) => {
        this.houseService.house = house;
        if(this.authService.user.id == this.houseService.house.owner)
          this.owner = true;
      }
    )

  }

  listByUser() {
    this.weekTaskService.listByUser().subscribe(
      (tasks) => {
        this.weekTasks = tasks,
        console.log(tasks);
      }
    )
  }

  listUnassigned(){
    this.taskService.listUnassigned().subscribe(
      (tasks) => this.tasks = tasks
    )
  }




}
