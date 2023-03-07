import { Component, OnInit } from '@angular/core';
import { ApiCuisineService } from '../../services/api-cuisine.service'


@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})

export class CuisineComponent implements OnInit {
  recette1: String;
  recette1Ing: String;
  recetteImgUrl: String;
  listOfIng: any[] = [];



  constructor(private apiService: ApiCuisineService){
    this.recette1 = "";
    this.recette1Ing = "";
    this.recetteImgUrl = "";
  };
  
  ngOnInit(): void {
    this.apiService.GetCuisine().subscribe(data => {
      //let resultat = JSON.parse(data.toString());
      alert("Url: " + JSON.stringify(data));
  });
  
    /*
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '78d441e7c1mshacf7f6f61fc37a4p101a35jsn10e8d594b66f',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };
    fetch(url,options)
    .then(res => res.json())
    .then( res => {
      //Pour le nom
      
      this.recette1 = res.results[0].name;
      res.results[0].sections[0].components.forEach((element: { ingredient: { name: any; }; }) => this.listOfIng.push(element.ingredient.name));
      
      //temp =  result.results[0].sections[0].components.element.ingredient.name;

      alert(JSON.stringify(res.results[0].name));
      console.log(this.recette1);
    });
    */
    
    
  }

}

