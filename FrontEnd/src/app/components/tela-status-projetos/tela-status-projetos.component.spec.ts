import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaStatusProjetosComponent } from './tela-status-projetos.component';

describe('TelaStatusProjetosComponent', () => {
  let component: TelaStatusProjetosComponent;
  let fixture: ComponentFixture<TelaStatusProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaStatusProjetosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaStatusProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
