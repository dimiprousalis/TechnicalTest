import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandItemComponent } from './stand-item.component';

describe('StandItemComponent', () => {
  let component: StandItemComponent;
  let fixture: ComponentFixture<StandItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
