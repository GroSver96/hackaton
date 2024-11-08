import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioParamedicoComponent } from './inicio-paramedico.component';

describe('InicioParamedicoComponent', () => {
  let component: InicioParamedicoComponent;
  let fixture: ComponentFixture<InicioParamedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioParamedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioParamedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
