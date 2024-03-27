import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorItemComponent } from './sector-item.component';

describe('SectorItemComponent', () => {
  let component: SectorItemComponent;
  let fixture: ComponentFixture<SectorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectorItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
