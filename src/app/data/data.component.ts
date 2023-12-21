import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public names:any;
  public address:any;
  public birth:any;
  public namelist:any;
  public dataTable:any[]=[]; 


  constructor(private route:Router) { }
  ngOnInit() {
    }
onSubmit(){
  let form:any={};
  form['name']= this.names;
  form['email']=this.address;
  form['dob']=this.birth;
  form['namelist']=this.namelist
  this.dataTable.push(form);

  console.log("data ",this.dataTable)
}


}
