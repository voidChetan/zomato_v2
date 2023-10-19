import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-restaurant-food-item',
  templateUrl: './restaurant-food-item.component.html',
  styleUrls: ['./restaurant-food-item.component.css']
})
export class RestaurantFoodItemComponent {

  restaurantId: number = 0;
  categoryId: number = 0;
  foodItemsList: any[] = [];
  loggedUseData: any;
  cartItems: any[] = [];
  totalAmount: number  = 0;
  deliveryAddres: string = '';
  constructor(private actiavtedRoute: ActivatedRoute, private foodService: FoodService) {
    this.actiavtedRoute.params.subscribe((res: any) => {
      debugger;
      this.categoryId = res.categoryId;
      this.restaurantId = res.restaurantId;
      this.GetFoodItemOfRestaurantByCategory();
      const localData = localStorage.getItem('zomato_user');
      if (localData !== null) {
        this.loggedUseData = JSON.parse(localData);
      }
      this.GetCartItemsByCustomerIdForRestaurant();
    })

  }

  GetFoodItemOfRestaurantByCategory() {
    this.foodService.GetFoodItemOfRestaurantByCategory(this.restaurantId, this.categoryId).subscribe((res: any) => {
      this.foodItemsList = res.data;
    })
  }
  GetCartItemsByCustomerIdForRestaurant() {
    this.foodService.GetCartItemsByCustomerIdForRestaurant(this.loggedUseData.userId, this.restaurantId).subscribe((res: any) => {
      this.cartItems = res.data;
      this.cartItems.forEach(element => {
        this.totalAmount =  this.totalAmount + element.price;
      });
      
    })
  }
  onOrder() {
    const obj = {
      "userId": this.loggedUseData.userId,
      "totalAmount": this.totalAmount,
      "restaurantId": this.restaurantId,
      "deliveryAddress": this.deliveryAddres
    };
    this.foodService.placeOrder(obj).subscribe((Res:any)=>{
      if(Res.result) {
        alert('Order Placed Success');
        this.GetCartItemsByCustomerIdForRestaurant();
        this.deliveryAddres = '';
        this.totalAmount = 0;
      }  else {
        alert(Res.message)
      }
    })



  }
  addtoCart(itemId: number) {
    const localData = localStorage.getItem('zomato_user');
    if (localData == null) {
      alert('Please Login')
    } else {
      this.loggedUseData = JSON.parse(localData);
      const obj = {
        "customerId": this.loggedUseData.userId,
        "itemId": itemId,
        "quantity": 1
      };
      this.foodService.addtocart(obj).subscribe((Res: any) => {
        if (Res.result) {
          alert(Res.message);
          this.GetCartItemsByCustomerIdForRestaurant();
        } else {
          alert(Res.message)
        }
      })
    }
  }

} 
