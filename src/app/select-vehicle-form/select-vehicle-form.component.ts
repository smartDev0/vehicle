import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../service/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-select-vehicle-form',
  templateUrl: './select-vehicle-form.component.html',
  styleUrls: ['./select-vehicle-form.component.scss'],
})
export class SelectVehicleFormComponent implements OnInit {
  public selectVehicleForm: FormGroup;

  public manufacturerOptions: any = [];
  public modelOptions: any = [];
  public variantOptions: any = [];
  public chassisOptions: any = [];
  public yearOptions: any = [];
  // public trimOptions: Array<any>;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.selectVehicleForm = this.formBuilder.group({
      manufacturer_id: ['', Validators.required],
      model_id: ['', Validators.required],
      variant_id: ['', Validators.required],
      chassis_id: ['', Validators.required],
      year_id: ['', Validators.required],
    });
    this.apiService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.manufacturerOptions = data;
      });
  }

  ngOnInit(): void {}
  onChange() {
    this.apiService
      .getModalAll(this.selectVehicleForm.value.manufacturer_id)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((d) => ({
            id: d.payload.doc.id,
            ...d.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.modelOptions = data;
      });
  }
  onModelChange() {
    console.log(this.selectVehicleForm.value);
    this.apiService
      .getVariantAll(
        this.selectVehicleForm.value.manufacturer_id,
        this.selectVehicleForm.value.model_id
      )
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((d) => ({
            id: d.payload.doc.id,
            ...d.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.variantOptions = data;
        console.log(data);
      });
  }
  onVariantChange() {
    this.apiService
      .getChassisAll(
        this.selectVehicleForm.value.manufacturer_id,
        this.selectVehicleForm.value.model_id,
        this.selectVehicleForm.value.variant_id
      )
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((d) => ({
            id: d.payload.doc.id,
            ...d.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.chassisOptions = data;
        console.log(data);
      });
  }
  onChassisChange() {
    this.apiService
      .getYearAll(
        this.selectVehicleForm.value.manufacturer_id,
        this.selectVehicleForm.value.model_id,
        this.selectVehicleForm.value.variant_id,
        this.selectVehicleForm.value.chassis_id
      )
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((d) => ({
            id: d.payload.doc.id,
            ...d.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.yearOptions = data;
        console.log(data);
      });
  }
}
