import { Component, OnInit, HostBinding  } from '@angular/core';
import { Poke } from 'src/app/models/toter';
import {ToterService} from '../../service/toter.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-toter-form',
  templateUrl: './toter-form.component.html',
  styleUrls: ['./toter-form.component.css']
})
export class ToterFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  
  toter: Poke = {

    id: 0,
    nome: '',
    edade: '',
    area: '',
    local: '',
    image: '',

  }
    edit: boolean = false;

  constructor(private toterService: ToterService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.toterService.getToter(params.id).subscribe(
        res =>{
          console.log(res)
          this.toter = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  
  addToter() {
    this.toterService.addToter(this.toter)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/toters']);
        },
        err => console.error(err)
      )
  }

  updateToter() {
    this.toterService.updateToter(this.toter.id, this.toter)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/toters']);
        },
        err => console.error(err)
      )
  }

  

}
