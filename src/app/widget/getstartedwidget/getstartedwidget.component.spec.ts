import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartedwidgetComponent } from './getstartedwidget.component';

describe('GetstartedwidgetComponent', () => {
  let component: GetstartedwidgetComponent;
  let fixture: ComponentFixture<GetstartedwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetstartedwidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetstartedwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
