import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroProjetoComponent } from './tela-cadastro-projeto.component';

describe('TelaCadastroProjetoComponent', () => {
  let component: TelaCadastroProjetoComponent;
  let fixture: ComponentFixture<TelaCadastroProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaCadastroProjetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaCadastroProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
