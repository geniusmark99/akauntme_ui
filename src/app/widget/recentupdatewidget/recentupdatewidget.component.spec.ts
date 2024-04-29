import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentupdatewidgetComponent } from './recentupdatewidget.component';

describe('RecentupdatewidgetComponent', () => {
  let component: RecentupdatewidgetComponent;
  let fixture: ComponentFixture<RecentupdatewidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentupdatewidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentupdatewidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
