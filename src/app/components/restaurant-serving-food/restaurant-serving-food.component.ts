import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-restaurant-serving-food',
  templateUrl: './restaurant-serving-food.component.html',
  styleUrls: ['./restaurant-serving-food.component.css']
})
export class RestaurantServingFoodComponent {

  currentCategoryId: number = 0;
  restaurantList: any []= [];
  constructor(private actiavtedRoute: ActivatedRoute,private router: Router, private foodService: FoodService) {
    this.actiavtedRoute.params.subscribe((res:any) => {
      debugger;
      this.currentCategoryId = res.id;
      this.GetRestaurantServingByCategoryId();
    })
  }

  GetRestaurantServingByCategoryId() {
    this.foodService.GetRestaurantServingByCategoryId(this.currentCategoryId).subscribe((res:any)=>{
      this.restaurantList =  res.data;
    })
  }

  navigate(restaurantID: number) {
    this.router.navigate(['/restaurant-food-item',restaurantID,this.currentCategoryId])
  }
}
