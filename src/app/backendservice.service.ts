import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {
  userList : any =[];
  data: any;
  expresponse : string="";
  constructor(private http : HttpClient){

  }
  getAllUsers(){
    this.http.get('http://localhost:8002/DisplayAllUser').subscribe((response)=>{
      this.userList=response;
      console.log(this.userList);  
 
  }
    );
    return this.userList; 
  }
  addUser(udata:any):any
  {
    this.http.post('http://localhost:8002/AddUser',udata.value).subscribe((response)=>
    { 
      this.expresponse=response.toString();
      this.getAllUsers();
      
    })
    return this.expresponse;
  }

  getContact(){
    {
      this.http.get('http://localhost:8002/getAllContact').subscribe((response)=>{
        this.userList=response;
        console.log(this.userList);  
    }
      );
      return this.userList; 
    }
  }
    addContact(){
      this.http.get('http://localhost:8002/insertContact').subscribe((response)=>{
        this.userList=response;
        console.log(this.userList);  
    }
      );
      return this.userList; 
    }
    editContact(){
      this.http.get('http://localhost:8002/updateContact').subscribe((response)=>{
        this.userList=response;
        console.log(this.userList);  
    }
      );
      return this.userList; 
    }

    deleteContact(){
      this.http.get('http://localhost:8002/deleteContact').subscribe((response)=>{
        this.userList=response;
        console.log(this.userList);  
    }
      );
      return this.userList; 
    }
  

}
