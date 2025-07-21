import { ComponentFixture, TestBed } from '@angular/core/testing';
import { create } from './create';

describe('Create', () => {
  let component: create;
  let fixture: ComponentFixture<create>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [create]
    })
    .compileComponents();

    fixture = TestBed.createComponent(create);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
