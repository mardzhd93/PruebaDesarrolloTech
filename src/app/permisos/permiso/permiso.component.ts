import { Component, OnInit } from '@angular/core';
import { PermisoService } from 'src/app/shared/permiso.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css']
})
export class PermisoComponent implements OnInit {

  constructor(public service : PermisoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm;
  }
resetForm(form: NgForm){
  if (form != null)
  form.resetForm();
  this.service.formData ={
    Id: 0,
    NombreEmpleado:  '',
    ApellidosEmpleado :  '',
    TipoPermiso: 0,
    FechaPermiso: new Date('1995-12-17T03:24:00')
  }
}
onSubmit(form: NgForm){
this.insertRecord(form);
}
insertRecord(form: NgForm){
this.service.postPermiso(form.value).subscribe(res => {
  this.resetForm(form)
})
}
}
