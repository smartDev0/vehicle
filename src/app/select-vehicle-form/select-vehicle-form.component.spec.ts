import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVehicleFormComponent } from './select-vehicle-form.component';

describe('SelectVehicleFormComponent', () => {
  let component: SelectVehicleFormComponent;
  let fixture: ComponentFixture<SelectVehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectVehicleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
