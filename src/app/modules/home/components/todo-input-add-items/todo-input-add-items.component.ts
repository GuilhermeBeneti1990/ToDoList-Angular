import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addTask: string = "";
  public placeholderText: string = "Adicione uma tarefa e pressione enter";

  constructor() { }

  ngOnInit(): void {
  }

  public submitTask() {
    this.addTask = this.addTask.trim();

    if (this.addTask) {
      this.emitItemTaskList.emit(this.addTask);
      this.addTask = "";
    }
  }

}
