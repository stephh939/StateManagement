import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    this.count$.subscribe((value:any) => console.log(value));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
