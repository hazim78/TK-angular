import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { SendEmailService } from '../send-email.service';

@Component({
  selector: 'log-list',
  templateUrl: 'log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  year: string;
  month: string;
  day: string;
  imgs: boolean = true;
  list: Observable<any[]>;
  inc = 0;
  @Input()  lid: string;


  constructor(
    private db: AngularFireDatabase,
    private mailService: SendEmailService
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
        //this.playAudio();
        this.mailService.sendMail()
          .subscribe(res => {
            console.log("Triggered");
            console.log(res);
          })
      });
    console.log(this.list);
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
