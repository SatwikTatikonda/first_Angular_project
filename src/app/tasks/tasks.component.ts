import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  @Input({required: true}) userId!:string;
  @Input() name?: string;
  isAddingTask = false;
  private  taskService:TaskService;

  constructor( taskService: TaskService) {
    this.taskService = taskService;
   }
 

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  OnCompleteTask(id: string) {

    this.taskService.removeTask(id);
    
  }

  onStartAddTask() {

    this.isAddingTask = true;


  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: { title: string; summary: string; date: string }) {
 
    this.isAddingTask = false;
    
  }

}
