import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/house.model';
import { HousesService } from '../../houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.less']
})
export class HousesComponent implements OnInit {
  public houses: House[];
  public id = 15

  constructor(private housesService: HousesService) { }

  ngOnInit() {
    this.getHousesList()
    console.log(this.houses)
  }

  getHousesList(){
    this.housesService.getHouses()
    .subscribe((data)=>this.houses = data)
  }

  removeHouse(){
    this.housesService.deleteHouse(15).subscribe()
  }

}
