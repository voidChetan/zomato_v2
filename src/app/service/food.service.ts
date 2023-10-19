import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  apiEndPoint: string = "https://freeapi.miniprojectideas.com/api/zomato/";

  constructor(private http: HttpClient) { }

  getAllFoods(): Observable<any> {
    return this.http.get(this.apiEndPoint + "GetAllFoodCategory")
  }

  GetRestaurantServingByCategoryId(foodCategoryId: number): Observable<any> {
    return this.http.get(this.apiEndPoint + 'GetRestaurantServingByCategoryId?categoryId=' + foodCategoryId)
  }

  GetFoodItemOfRestaurantByCategory(restaurantId: number, categoryId:number):Observable<any> {
    return this.http.get(this.apiEndPoint + 'GetFoodItemOfRestaurantByCategory?restaurantId='+restaurantId+'&categoryId='+categoryId)
  } 

  onRegister(obj: any) : Observable<any> {
   return this.http.post(this.apiEndPoint + "AddNewUser",obj );
  }
  onLogin(obj: any) : Observable<any> {
    return this.http.post(this.apiEndPoint + "login",obj );
   }
   addtocart(obj: any) : Observable<any> {
    return this.http.post(this.apiEndPoint + "addtocart",obj );
   }

   GetCartItemsByCustomerIdForRestaurant(custId: number,resId: number) {
    return this.http.get(this.apiEndPoint + 'GetCartItemsByCustomerIdForRestaurant?customerId='+custId+'&restaurantId='+resId)
   }
   placeOrder(obj: any) : Observable<any> {
    return this.http.post(this.apiEndPoint + "addneworder",obj );
   }
   
}
