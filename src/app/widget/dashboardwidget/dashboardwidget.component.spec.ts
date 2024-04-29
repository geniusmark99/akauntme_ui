import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardwidgetComponent } from './dashboardwidget.component';

describe('DashboardwidgetComponent', () => {
  let component: DashboardwidgetComponent;
  let fixture: ComponentFixture<DashboardwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardwidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
