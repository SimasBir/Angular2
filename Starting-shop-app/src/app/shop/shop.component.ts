import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import {Data} from "./data.type";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public data: Data = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: Data) => {
      this.data = data;
    });
  }

  // onChangeSubject($event: MouseEvent, subject: string) {
  //   $event.preventDefault();
  //   this.subjectChange.emit(subject);
  // }
}
