import { Component,OnInit } from '@angular/core';
import { DemoService } from './myservice/demo.service';
import {MatDialog} from '@angular/material/dialog';
import { ProductComponent } from './product/product.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'myproject';
  email:string='';
  pass:string='';
  prodArray=[
    {
      pname:"product-1",
    
      img:"../../assets/img/apple.jpeg",
      amt:400,
      qunt:1
    }
  ];
  tblArr: any=[];

  // constructor(public dialog: MatDialog) {}
  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
tf:boolean=false;
  ngOnInit(): void {
    console.log(this.tblArr);
    
  }
  decrease(p:any){
    if(p.qunt>1)
    p.qunt = p.qunt - 1;
  }
  increase(p:any){
    p.qunt = p.qunt +  1;

  }
  login(){
    if(this.email=="Pari@gmail.com" && this.pass=="123")
    {
      alert('Congratulation!!!Success');
    }
    else{
      alert('Sorry!!Enter Correct Information');
    }
  }
  t : any=[];
  prodtot:any;
  tot:any=0;
  uptot:any;
  addtotbl(p:any){
         this.tf=true;

//  this.tot= this.tblArr.reduce((ini:any,val:any)=>{
// return ini.prodprice = ini+ (val.prodprice*val.prodqunt);
//   });

  this.prodtot=p.amt*p.qunt;

 this.tot =this.tot + (p.amt*p.qunt);

    this.tblArr.push({
      productname:p.pname,
      prodprice:p.amt,
      prodqunt:p.qunt,
      prodtot:this.prodtot,
      bill:this.tot
    });
    
    
    
    
    
    
    
    
    
    
    
    
    // this.t.push(this.prodtot);
    // console.log(this.t);
    // this.tot=this.t.reduce((i:any,val:any)=>{
    //   return i=i+val;
    // });

    // this.tblArr.push({
    //   bill:this.tot
    // })
    
  }
  remove(d:any){
    const index = this.tblArr.indexOf(d);
    this.tblArr.splice(index, 1);
    // this.tot =this.tot -(d.amt*d.qunt);

}
totalPrice:any=0;
totalQuantity:any=0;
// getColumnTotal() {
//   const { Quantity, Price } = this.tblArr.reduce((acc:any, item:any) => {
//     acc.Quantity += item.Quantity;
//     acc.Price += item.Price;
//     return acc;
//   }, {
//     Quantity: 0,
//     Price: 0
//   });
//   this.totalQuantity = Quantity;
//   this.totalPrice = Price;
// }
}


  

  // @Component({
  //   selector: 'dialog-content-example-dialog',
  //   templateUrl: 'dialog-content-example-dialog.html',
  // })
  // export class DialogContentExampleDialog {}
  