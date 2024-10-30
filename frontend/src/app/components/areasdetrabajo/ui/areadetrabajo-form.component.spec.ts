import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeTrabajoFormComponent } from './areadetrabajo-form.component';

describe('AreaDeTrabajoFormComponent', () => {
  let component: AreaDeTrabajoFormComponent;
  let fixture: ComponentFixture<AreaDeTrabajoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaDeTrabajoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaDeTrabajoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
