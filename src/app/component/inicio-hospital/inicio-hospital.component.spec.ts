import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioHospitalComponent } from './inicio-hospital.component';

describe('InicioHospitalComponent', () => {
  let component: InicioHospitalComponent;
  let fixture: ComponentFixture<InicioHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioHospitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
