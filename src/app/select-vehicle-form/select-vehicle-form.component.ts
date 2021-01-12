
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-select-vehicle-form',
  templateUrl: './select-vehicle-form.component.html',
  styleUrls: ['./select-vehicle-form.component.scss'],
})
export class SelectVehicleFormComponent implements OnInit {
  public selectVehicleForm: FormGroup ;

  public yearOptions: any = [];
  public makeOptions: any = [];
  public modelOptions: any = [];
  // public trimOptions: Array<any>;

  public loadingMakes: boolean = false;
  public loadingModels: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.selectVehicleForm = this.formBuilder.group({
      year: ["",
        Validators.required,
      ],
    });
    this.yearOptions = [
      2021,
      2020,
      2019,
      2018,
      2017,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      1998,
      1997,
      1996,
      1995,
      1994,
    ];
  }

  ngOnInit(): void {}
}
