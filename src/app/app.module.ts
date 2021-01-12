import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { SelectVehicleFormComponent } from './select-vehicle-form/select-vehicle-form.component'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';



const firebaseConfig = {
  apiKey: 'AIzaSyDefp1Pyai0aigFVE9UamF-7Z_67WjTqjw',
  authDomain: 'vehicle-5a79a.firebaseapp.com',
  projectId: 'vehicle-5a79a',
  storageBucket: 'vehicle-5a79a.appspot.com',
  messagingSenderId: '832100551033',
  appId: '1:832100551033:web:231af9fb90aff92e1c87a8',
  measurementId: 'G-8S7HE2HRF4',
};

@NgModule({
  declarations: [AppComponent, SelectVehicleFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
