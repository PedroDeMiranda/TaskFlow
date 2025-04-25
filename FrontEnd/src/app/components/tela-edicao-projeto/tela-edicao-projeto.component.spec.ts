import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEdicaoProjetoComponent } from './tela-edicao-projeto.component';

describe('TelaEdicaoProjetoComponent', () => {
  let component: TelaEdicaoProjetoComponent;
  let fixture: ComponentFixture<TelaEdicaoProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaEdicaoProjetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaEdicaoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
