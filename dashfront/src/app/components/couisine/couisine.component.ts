import { Component } from '@angular/core';

@Component({
  selector: 'app-couisine',
  templateUrl: './couisine.component.html',
  styleUrls: ['./couisine.component.css']
})
export class CouisineComponent {
  recette1: String;
  recette1Ing: String;


  constructor(){
    this.recette1 = "";
    this.recette1Ing = "";
  };

  ngOnInit(): void {
    /*
    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '78d441e7c1mshacf7f6f61fc37a4p101a35jsn10e8d594b66f',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };
    fetch(url, options)
    .then(res => res.json())
    .then( res => {
      //Pour le nom
      
      this.recette1 = res.results[0].name 
      res.results[0].sections[0].components.forEach((element: any) => this.recette1Ing += " -" +element.ingredient.name+"\n");


      //alert(JSON.stringify(res.results[0].sections[0].components[0].ingredient.name));
      console.log(this.recette1);
    });
    */
    
  }
  
}

