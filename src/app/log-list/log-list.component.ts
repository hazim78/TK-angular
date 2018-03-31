import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'log-list',
  templateUrl: 'log-list.component.html',
  styles: []
})
export class LogListComponent implements OnInit {
  year: string;
  month: string;
  day: string;
  list: Observable<any[]>;
  @Input()  lid: string;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    console.log("Recieved:"+this.lid);
    this.year='2018';
    this.month='3';
    this.day='29';
    this.list = this.lists('/'+this.lid+'/expired/');
    console.log("Table:"+this.list);
  }

  lists(route): Observable<any[]>{
    return this.db.list(route).valueChanges();
  }


}
