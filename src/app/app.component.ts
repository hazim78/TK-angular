import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css'],
})
export class AppComponent {
    public items: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.items = db.collection('customization').valueChanges();
    }
}
