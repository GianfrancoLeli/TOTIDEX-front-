import { Component, OnInit, HostBinding } from '@angular/core';
import {ToterService} from '../../service/toter.service'
import { Poke } from 'src/app/models/toter';

@Component({
  selector: 'app-toter-list',
  templateUrl: './toter-list.component.html',
  styleUrls: ['./toter-list.component.css']
})
export class ToterListComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  
  toters: any= [];

  constructor(private toterService: ToterService) { }

  ngOnInit(): void {
    this.getToters();
  }

  getToters() {
    this.toterService.getToters()
      .subscribe(
        res => {
          this.toters = res;
        },
        err => console.error(err)
      );
  }

  deleteToter(id: string) {
    this.toterService.deleteToter(id)
      .subscribe(
        res => {
          console.log(res);
          this.getToters();
        },
        err => console.error(err)
      )
  }

}


