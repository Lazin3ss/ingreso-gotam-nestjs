import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEmpleadoFormComponent } from './agregar-empleado-form.component';

describe('AgregarEmpleadoFormComponent', () => {
  let component: AgregarEmpleadoFormComponent;
  let fixture: ComponentFixture<AgregarEmpleadoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEmpleadoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEmpleadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
