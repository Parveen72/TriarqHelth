import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  url: string = 'https://devservices.qpathways.com/otc/test/user';
  url1:string =' https://devservices.qpathways.com/otc/test/user/save';
  constructor(private http: HttpClient) { }
  
  // 1. Get Data from JSON File
  getMyData(){
    return this.http.get(this.url);
  }


  // 3. Add New User 
  createpost() {
  let postdata = {

    "firstname": "Madhav",
    "middlename": "",
    "lastname": "Gosi",
    "gender": "Male",
    "birthdate": "07/02/1977",
    "city": "Pune",
    "state": "Maharashtra",
    "country": "Indiaa",
    "zip":"000"
    }

    return this.http.post(this.url1,postdata);
  }
//5. Detele User
deletPost(id:string):any {
  
 return this.http.delete('https://devservices.qpathways.com/otc/test/user/delete/${id}');
  

}
}