import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCriacaoUsuarioComponent } from './tela-criacao-usuario.component';

describe('TelaCriacaoUsuarioComponent', () => {
  let component: TelaCriacaoUsuarioComponent;
  let fixture: ComponentFixture<TelaCriacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaCriacaoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaCriacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
