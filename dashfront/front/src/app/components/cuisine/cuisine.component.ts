import { Component, OnInit } from '@angular/core';
import { ApiCuisineService } from '../../services/api-cuisine.service'


@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})

export class CuisineComponent implements OnInit {
  recette: String;
  recetteIng: String;
  recetteImgUrl: String[] = [];
  recetteTag: String;
  recetteTime: String;
  listOfIng: any[] = [];
  listOfEtapes: any[] = [];
  recetteUrlVideo: String;



  constructor(private apiService: ApiCuisineService){
    this.recette = "";
    this.recetteIng = "";
    this.recetteUrlVideo = "";
    this.recetteTag = "";
    this.recetteTime = "";
  };
  
  ngOnInit(): void {
    this.apiService.GetCuisine().subscribe(data => {
      let id = 2;
      let resultat = JSON.parse(JSON.stringify(data));
      this.recette = resultat.results[id].name
      this.recetteImgUrl[0] = resultat.results[id].thumbnail_url;
      this.recetteImgUrl[1] = resultat.results[id].renditions[0].poster_url;
      this.recetteUrlVideo = resultat.results[id].original_video_url;
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
      alert(JSON.stringify(this.listOfEtapes));
      
    });
  }

  selectPage(event: any) {
    const pageButtons = document.querySelectorAll('.pagination .page-item');
    pageButtons.forEach(function(button) {
      button.classList.add('active');
    });
    const clickedButton = event.target as HTMLElement;
    clickedButton.classList.remove('active');
  }

}

