import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLogadoComponent } from './tela-logado.component';

describe('TelaLogadoComponent', () => {
  let component: TelaLogadoComponent;
  let fixture: ComponentFixture<TelaLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaLogadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
