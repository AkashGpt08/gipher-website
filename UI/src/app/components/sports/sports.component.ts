import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/api/giphy.service';
import { Fav } from 'src/app/models/db';
import { ModifierService } from 'src/app/services/favorites/modifier.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private gs:GiphyService,private ms:ModifierService) { }
  gifs:any[]=[];
  holder:string='sports';
  ngOnInit(): void {
    this.gs.getGifbyparameters(this.holder).subscribe(data=>{
      console.log(data.data);
      this.gifs=data.data;
    });
  }
addtofavs(value:string){
  this.addtofavorites(value);
}
addtofavorites(value:string){
  this.ms.addtofavs(new Fav(value)).subscribe(data=>{
    console.warn(data);
  });
}
}
