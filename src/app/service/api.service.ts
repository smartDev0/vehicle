import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import Manufacturer from '../models/manufacturer.model';
import Model from '../models/model.model';
import Variant from '../models/variant.model';
import Chassis from '../models/chassis.model';
import Year from '../models/year.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private manufacturer = '/manufacturer';
  private model = '/model';
  private variant = '/variant';
  private chassis = '/chassis';
  private year = '/year';

  manufacturerRef: AngularFirestoreCollection<Manufacturer> | any;
  constructor(private db: AngularFirestore) {
    this.manufacturerRef = db.collection(this.manufacturer);
  }

  getAll(): AngularFirestoreCollection<Manufacturer> {
    return this.manufacturerRef;
  }

  getModalAll(manufacturerID: String): AngularFirestoreCollection<Model> {
    return this.db.collection(this.model, (ref) =>
      ref.where('manufacturer_id', '==', manufacturerID)
    );
  }

  getVariantAll(
    manufacturerID: String,
    modelID: String
  ): AngularFirestoreCollection<Variant> {
    return this.db.collection(this.variant, (ref) =>
      ref
        .where('manufacturer_id', '==', manufacturerID)
        .where('model_id', '==', modelID)
    );
  }

  getChassisAll(
    manufacturerID: String,
    modelID: String,
    variantID: String
  ): AngularFirestoreCollection<Chassis> {
    return this.db.collection(this.chassis, (ref) =>
      ref
        .where('manufacturer_id', '==', manufacturerID)
        .where('model_id', '==', modelID)
        .where('variant_id', '==', variantID)
    );
  }

  getYearAll(
    manufacturerID: String,
    modelID: String,
    variantID: String,
    chassisID: String
  ): AngularFirestoreCollection<Year> {
    return this.db.collection(this.year, (ref) =>
      ref
        .where('manufacturer_id', '==', manufacturerID)
        .where('model_id', '==', modelID)
        .where('variant_id', '==', variantID)
        .where('chassis_id', '==', chassisID)
    );
  }
}
