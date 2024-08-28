import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAtencionComponent } from './consulta-atencion.component';

describe('ConsultaAtencionComponent', () => {
  let component: ConsultaAtencionComponent;
  let fixture: ComponentFixture<ConsultaAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaAtencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
