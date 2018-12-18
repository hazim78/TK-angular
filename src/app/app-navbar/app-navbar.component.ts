import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  totalIn: any;
  expireSoon: any;
  expire: any;
  timeIn: string;
  timeOut: any;
  date: string;
  name: string;
  contractIn: string;
  contractOut: string;
  postKey: any;
  upDate: any;
  year: string;
  month: string;
  day: string;
  lid: string;
  dashboardType: any;

  constructor(
    private db: AngularFireDatabase,
    private modalService: NgbModal,
    private route: ActivatedRoute
    ) {
    console.log('Called Constructor');
  }
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
        this.lid = params['lid'];
        console.log(this.lid);

        if (this.lid) {
          this.getDashboardType('/' + this.lid + '/dashboard_type').subscribe( result => {
            this.dashboardType = result;
          });
        }

    });

  }

  clicked(){
    console.log("Redirect to TimeKeeper");
  }

  checkIn(){
    console.log(this.year);
    console.log(this.month);
    console.log(this.day);
    console.log(this.contractIn);
    console.log(this.timeOut);
    this.getTotal('/1/total/')
      .subscribe(result =>{
        this.totalIn = result[2],
        this.expireSoon = result[1],
        this.expire = result[0],
        console.log("Old Total:"+result);
        if(this.contractIn=="Expired"){
          this.expire++;
        }else if(this.contractIn=="About Expire"){
          this.expireSoon++;
        }else if(this.contractIn=="Valid"){
          this.totalIn++;
        }
        else{};
        let newUpdate = {};
        newUpdate['/staff/'+this.year+'/'+this.month+'/'+this.day+'/total'] =
        {
          totalIn: this.totalIn,
          expire: this.expire,
          expireSoon: this.expireSoon
        };
        this.contractIn=null;
        console.log(this.contractIn);
        this.db.object('/').update(newUpdate);
      });
  }

  getTotal(listPath): any {
    console.log("Triggered");
    return this.db.list(listPath).valueChanges();
  }

  getDashboardType(listPath): any {
    console.log(listPath);
    return this.db.object(listPath).valueChanges();
  }

  checkOut(){
    this.upDate = this.db.database.ref('/staff/'+this.year+'/'+this.month+'/'+this.day+'/users/'+this.name+'/').remove();
    if(this.contractOut=='Expired'){
      console.log("Push Expired Notice")
    }else if(this.contractOut=='About Expire'){
      console.log("Push About Expired Notice")
    }
    console.log(this.contractOut);
    this.getTotal('/staff/'+this.year+'/'+this.month+'/'+this.day+'/total/')
      .subscribe(result =>{
        this.totalIn = result[2],
        this.expireSoon = result[1],
        this.expire = result[0],
        console.log("Old Total:"+result);
        if(this.contractOut=="Expired"){
          this.expire--;
        }else if(this.contractOut=="About Expire"){
          this.expireSoon--;
        }else if(this.contractOut=="Valid"){
          this.totalIn--;
        }else{}
        let newUpdate = {};
        newUpdate['/staff/'+this.year+'/'+this.month+'/'+this.day+'/total'] =
        {
          totalIn: this.totalIn,
          expire: this.expire,
          expireSoon: this.expireSoon
        };
        this.contractOut=null;
        console.log(this.contractOut);
        this.db.object('/').update(newUpdate);
      });
  }
  // writeLog(){
  //   var myDate = new Date("2016-01-16T16:00:00");
  //   this.time = myDate.getTime();
  //   var formatedTime=myDate.toJSON();
  //   console.log(this.time);
  //   var saveLog = this.db.database.ref('log/').push({
  //     timestamp: this.time,
  //     name : "Steve"
  //   });
  //   var keyGen = saveLog.key;
  //   console.log(keyGen);
  // }
}
