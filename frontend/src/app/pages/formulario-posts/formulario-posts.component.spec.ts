import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPostsComponent } from './formulario-posts.component';

describe('FormularioPostsComponent', () => {
  let component: FormularioPostsComponent;
  let fixture: ComponentFixture<FormularioPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
