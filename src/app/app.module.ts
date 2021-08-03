import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermisosComponent } from './permisos/permisos.component';
import { PermisoComponent } from './permisos/permiso/permiso.component';
import { PermisoListComponent } from './permisos/permiso-list/permiso-list.component';
import { PermisoService } from './shared/permiso.service';



@NgModule({
  declarations: [
    AppComponent,
    PermisosComponent,
    PermisoComponent,
    PermisoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PermisoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
