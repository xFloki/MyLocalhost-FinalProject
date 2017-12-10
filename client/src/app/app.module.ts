import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { TaskService } from './shared/services/task.service';
import { WeekTaskService } from './shared/services/weektask.service';
import { LoginComponent } from './components/login/login.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DebtsComponent } from './components/debts/debts.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component'


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'task', component: TaskManagerComponent, canActivate: [IsAuthenticatedGuard]  },
  { path: 'profile', component: ProfileComponent, canActivate: [IsAuthenticatedGuard]  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskManagerComponent,
    RegisterComponent,
    ProfileComponent,
    NavigationComponent,
    DebtsComponent,
    ShoplistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,TaskService,WeekTaskService,IsAuthenticatedGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
