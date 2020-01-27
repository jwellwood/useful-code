import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderIconComponent } from './card-header-icon.component';

describe('CardHeaderIconComponent', () => {
  let component: CardHeaderIconComponent;
  let fixture: ComponentFixture<CardHeaderIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeaderIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
