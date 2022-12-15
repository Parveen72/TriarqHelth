import { Component, OnInit } from '@angular/core';
import { DemoService } from '../myservice/demo.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-triark',
  templateUrl: './triark.component.html',
  styleUrls: ['./triark.component.css']
})
export class TriarkComponent implements OnInit {
  mydata:any={};

  constructor(private demo:DemoService) { }

  ngOnInit(): void {

    this.getData();
  }
  getData(){
     this.demo.getMyData().subscribe((posts) => {
          this.mydata=posts;
          console.log(this.mydata);
          
           
        })
}

createPost(){
  this.demo.createpost().subscribe((res)=>{
    console.log(res);
    
  })
}

deteteNewPost(){
  this.demo.deletPost('515c7536-4b64-11ed-997f-65378a56b163').
  subscribe((res:any)=>console.log(res));

}
}