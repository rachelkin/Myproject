import { Component } from '@angular/core';
import { FormsModule ,NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  summaryInput = 'stating value';
  titleInput='הכנס כותרת';
  dateInput='30/30/2000';

    onSubmit(form: NgForm) {
    console.log(this.titleInput);
    console.log(form);
  }


}
