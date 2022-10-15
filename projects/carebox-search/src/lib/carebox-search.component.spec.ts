import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareboxSearchComponent } from './carebox-search.component';

describe('CareboxSearchComponent', () => {
  let component: CareboxSearchComponent;
  let fixture: ComponentFixture<CareboxSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareboxSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareboxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
