import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


// IMPORT ROUTES
import { Routes, RouterModule} from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { DrugsComponent } from './drugs/drugs.component';
import { DrugComponent } from './drugs/drug/drug.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { DiseaseComponent } from './diseases/disease/disease.component';
import { ConsulationsComponent } from './consulations/consulations.component';
import { ConsulationComponent } from './consulations/consulation/consulation.component';
// DEFINE ROUTES

const appRoutes: Routes = [

  {path: ''       ,       component: HomeComponent },
  {path: 'consulations',  component: ConsulationsComponent },
  {path: 'patients'  ,    component: PatientsComponent },
  {path: 'diseases',      component: DiseasesComponent },
  {path: 'drugs',         component: DrugsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientsComponent,
    PatientComponent,
    DrugsComponent,
    DrugComponent,
    DiseasesComponent,
    DiseaseComponent,
    ConsulationsComponent,
    ConsulationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
