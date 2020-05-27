import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCollectionComponent } from './pet-collection.component';

describe('PetCollectionComponent', () => {
  let component: PetCollectionComponent;
  let fixture: ComponentFixture<PetCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
