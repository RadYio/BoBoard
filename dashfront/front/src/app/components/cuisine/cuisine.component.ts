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
  recetteTag: String;
  recetteTime: String;
  listOfIng: any[] = [];
  listOfEtapes: any[] = [];



  constructor(private apiService: ApiCuisineService){
    this.recette1 = "";
    this.recette1Ing = "";
    this.recetteImgUrl = "";
    this.recetteTag = "";
    this.recetteTime = "";
  };
  
  ngOnInit(): void {
    this.apiService.GetCuisine().subscribe(data => {
      let id = 1;
      let resultat = JSON.parse(JSON.stringify(data));
      this.recette1 = resultat.results[id].name
      this.recetteImgUrl = resultat.results[id].thumbnail_url;
      //On récupère le dernier topics 
      this.recetteTag = resultat.results[id].topics.pop().name
      if(resultat.results[id].total_time_minutes != null){
        //this.recetteTime = JSON.stringify(resultat.results[id].total_time_minutes) + " minutes";
        this.recetteTime = JSON.stringify(resultat.results[id].total_time_minutes) + " fesse";
      }else{
        this.recetteTime = " ~ 1H"
      }
      //Ajout des ingrédeints
      resultat.results[id].sections[0].components.forEach((element: { raw_text: any; }) => this.listOfIng.push(element.raw_text));
      //Ajout des étapes de la recette
      resultat.results[id].instructions.forEach((element: { display_text: any; }) => this.listOfEtapes.push(element.display_text));

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

