import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-view-all',
  templateUrl: './new-view-all.component.html',
  styleUrls: ['./new-view-all.component.css']
})
export class NewViewAllComponent {

  constructor(private api : ApiService)
  {
    api.fetchData().subscribe(

      (response)=>
      {
         this.news=response
      }

    )
  }

  news:any=[]
  


}
