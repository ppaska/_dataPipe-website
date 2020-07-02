import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  guides$: Observable<ScullyRoute[]>;

  constructor(public scully: ScullyRoutesService) {}

  ngOnInit(): void {
    this.guides$ = this.scully.available$.pipe(map(guides => guides.filter(g => g.title)));
    this.guides$.subscribe(g => console.log('ggg', g));
  }

}
