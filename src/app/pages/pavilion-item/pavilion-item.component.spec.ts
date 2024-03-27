import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavilionItemComponent } from './pavilion-item.component';

describe('PavilionItemComponent', () => {
  let component: PavilionItemComponent;
  let fixture: ComponentFixture<PavilionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PavilionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PavilionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
