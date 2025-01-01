import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent {
  constructor(private toastr: ToastrService) { }

    showSuccess(message:string) {
        this.toastr.success(message, 'Success');
    }

    showError(error:string) {
        this.toastr.error(error, 'Error');
    }
}
