import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-artforms',
  templateUrl: './artforms.component.html',
  styleUrls: ['./artforms.component.css']
})
export class ArtformsComponent  {

  constructor(private router: Router,
    private hero:HeroService) { }
  artforms=this.hero.givData();
  goToNextPage(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepage']);
  
  }
}
