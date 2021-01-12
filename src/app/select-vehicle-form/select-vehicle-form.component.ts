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
  public makeOptions: any = [];
  public modelOptions: any = [];
  // public trimOptions: Array<any>;

  public loadingMakes: boolean = false;
  public loadingModels: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.selectVehicleForm = this.formBuilder.group({
      manufacturer_id: ['', Validators.required],
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
        console.log(data);
      });
  }

  ngOnInit(): void {}
  onChange() {
    console.log(this.selectVehicleForm.value);
  }
}
