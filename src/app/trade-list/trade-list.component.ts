import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';


@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

  tradesObservable: Observable<any>;
  tradesList: any;
  @Input() lid: string;
  
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.tradesObservable = this.trades('/' + this.lid + '/trades/')
    .subscribe(result => {
      this.tradesList = result;
      console.log(this.tradesList);
    });
  }

  trades(tradesPath): any {
    return this.db.object(tradesPath).valueChanges();
  }

}
