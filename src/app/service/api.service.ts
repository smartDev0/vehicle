import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import Manufacturer from '../models/manufacturer.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private dbPath = '/manufacturer';

  manufacturerRef: AngularFirestoreCollection<Manufacturer> | any;
  constructor(private db: AngularFirestore) {
    this.manufacturerRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Manufacturer> {
    return this.manufacturerRef;
  }
}
