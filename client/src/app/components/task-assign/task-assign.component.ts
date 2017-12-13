import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../shared/services/task.service';
import { HouseService } from './../../shared/services/house.service';
import { AuthService } from './../../shared/services/auth.service';
import { WeekTaskService } from './../../shared/services/weektask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.css']
})
export class TaskAssignComponent implements OnInit {

  tasks;
  members;

  selectedValue;

  constructor(
    private taskService: TaskService,
    private houseService: HouseService,
    private weekTaskService: WeekTaskService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listUnassigned();
    this.houseService.currentUserHouse().subscribe(
      (result) => {
        this.houseService.house = result;
        this.selectedValue = result.owner;
        this.members = result.members;
      }
    )

  }

  listUnassigned(){
    this.taskService.listUnassigned().subscribe(
      (tasks) => this.tasks = tasks
    );
  }

  add(userId, taskId) {
    this.weekTaskService.addToUser(userId, taskId).subscribe(
      (e) => {
        this.listUnassigned();
      }
    );
  }

  prueba(pene){
    console.log(pene)
  }

}
