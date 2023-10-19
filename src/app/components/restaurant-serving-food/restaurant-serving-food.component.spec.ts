import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantServingFoodComponent } from './restaurant-serving-food.component';

describe('RestaurantServingFoodComponent', () => {
  let component: RestaurantServingFoodComponent;
  let fixture: ComponentFixture<RestaurantServingFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantServingFoodComponent]
    });
    fixture = TestBed.createComponent(RestaurantServingFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
