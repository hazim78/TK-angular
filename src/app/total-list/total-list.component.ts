import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
//import 'howler';

@Component({
  selector: 'total-list',
  templateUrl: 'total-list.component.html',
  styleUrls: ['./total-list.component.css']
})
export class TotalListComponent implements OnInit {
  coursesObservable: Observable<any>;
  totalIn: string;
  totalOut: string;
  expireSoon: string;
  expire: string;
  year: string;
  month: string;
  day: string;
  @Input()  lid: string
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private alertService: AlertService,
  ) {}

  ngOnInit() {
    console.log("Recieved:"+this.lid);
    this.coursesObservable = this.Courses('/'+this.lid+'/total/')
      .subscribe(result =>{
        this.totalIn = result['totalIn'],
        this.expireSoon = result['expireSoon'],
        this.expire = result['expire'],
        console.log(result);
        this.success();
      });
  }

  beep(){
    // var sound = new Howl({
    //   src: ['./test.mp3']
    // });
    //
    // sound.play();
  }
  Courses(listPath): any {
    return this.db.object(listPath).valueChanges();
  }

  success() {
        this.alertService.success("Success");
    }
}
