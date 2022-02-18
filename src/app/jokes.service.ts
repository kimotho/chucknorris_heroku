import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JokesService {
private apiurl='https://api.chucknorris.io/jokes/';
  constructor(
    private http:HttpClient
  ) {
 
   }
   //Get Random Joke
   getRandomJoke(){
return this.http.get(this.apiurl + 'random');
   }
   //Get Categories
   getCategories(){
    return this.http.get(this.apiurl + 'categories');
       }
    //Get Joke By category
    getCategoryJoke(category: string){
     return this.http.get(this.apiurl + 'random?category= ${category}');
   }
   //Get Search Jokes
   getSearchJokes(searchTerm: string){
    return this.http.get(this.apiurl + 'search?query=${searchTerm}');
  }
}
 