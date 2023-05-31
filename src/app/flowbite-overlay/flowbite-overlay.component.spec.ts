import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowbiteOverlayComponent } from './flowbite-overlay.component';

describe('FlowbiteOverlayComponent', () => {
  let component: FlowbiteOverlayComponent;
  let fixture: ComponentFixture<FlowbiteOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowbiteOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowbiteOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
