import { Component } from '@angular/core';

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(true)
  greet() {
    console.log(`Hello, ${this.greeting}`);
  }
}

const zaq = new Greeter('You');

console.log(zaq.greet())

interface LabelledValue {
  label: string;
  text?: string;
  size?: number;
  readonly color?: string;
  width?: number;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
  console.log(labelledObj.text);
  console.log(labelledObj.size);
}



const myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

const defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
const search = { ...defaults, food: 'rich' };

console.log(defaults)
console.log(search)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'List TODO';
  newTask: string;

  tasksList: Array<string> = [];
  tasksListDone: Array<string> = [];

  addNewTask() {
    this.tasksList.push(this.newTask)
    this.newTask = "";
  }

  taskDone(task: string) {
    this.removeTask(task)
    this.tasksListDone.push(task)
  }

  removeTask(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

}

