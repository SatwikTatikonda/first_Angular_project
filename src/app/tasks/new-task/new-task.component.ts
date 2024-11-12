import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({ required: true }) userId !: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<{ title: string; summary: string; date: string }>;
  
  // dependency injection
  private taskService = inject(TaskService);
  
  // we dont need @input as we are using this in same component and template

  // without signals
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // using signals
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  


  onCancel() {
    this.close.emit();
  }

  onSubmit() {

    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // });

    this.taskService.addTask({

      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
      
    }, this.userId);
    
    this.close.emit()


  }
  
}
