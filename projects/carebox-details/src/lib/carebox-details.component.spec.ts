import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareboxDetailsComponent } from './carebox-details.component';

describe('CareboxDetailsComponent', () => {
  let component: CareboxDetailsComponent;
  let fixture: ComponentFixture<CareboxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareboxDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareboxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
