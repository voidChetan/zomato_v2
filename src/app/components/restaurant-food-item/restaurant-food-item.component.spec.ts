import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFoodItemComponent } from './restaurant-food-item.component';

describe('RestaurantFoodItemComponent', () => {
  let component: RestaurantFoodItemComponent;
  let fixture: ComponentFixture<RestaurantFoodItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantFoodItemComponent]
    });
    fixture = TestBed.createComponent(RestaurantFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
