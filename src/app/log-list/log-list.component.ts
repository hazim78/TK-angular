import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'log-list',
  templateUrl: 'log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  year: string;
  month: string;
  day: string;
  list: Observable<any[]>;
  @Input()  lid: string;

  constructor(
    private db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    console.log("Recieved:"+this.lid);
    this.year='2018';
    this.month='3';
    this.day='29';
    this.list = this.lists('/'+this.lid+'/expired/')
    this.lists('/'+this.lid+'/expired/')
      .subscribe(result =>{
        console.log("News update");
        this.playAudio();
      });
    console.log("Table:"+this.list);
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../assets/audio/alarm3-note.mp3";
    audio.load();
    audio.play();
  }

  lists(route): Observable<any[]>{
    let updateList = this.db.list(route).valueChanges();
    console.log("Updating");
    return updateList;
  }

}
