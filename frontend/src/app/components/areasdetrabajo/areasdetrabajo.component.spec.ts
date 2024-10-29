import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasDeTrabajoComponent } from './areasdetrabajo.component';

describe('AreasdetrabajoComponent', () => {
  let component: AreasDeTrabajoComponent;
  let fixture: ComponentFixture<AreasDeTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreasDeTrabajoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasDeTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
