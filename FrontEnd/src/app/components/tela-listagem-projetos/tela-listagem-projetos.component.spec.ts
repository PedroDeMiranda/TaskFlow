import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaListagemProjetosComponent } from './tela-listagem-projetos.component';

describe('TelaListagemProjetosComponent', () => {
  let component: TelaListagemProjetosComponent;
  let fixture: ComponentFixture<TelaListagemProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaListagemProjetosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaListagemProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
