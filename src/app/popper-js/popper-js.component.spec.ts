import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopperJsComponent } from './popper-js.component';

describe('PopperJsComponent', () => {
  let component: PopperJsComponent;
  let fixture: ComponentFixture<PopperJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopperJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopperJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
