import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, Subscription} from "rxjs";

@Component({
  selector: 'lib-carebox-search',
  template: `
    <mat-form-field class="example-form-field" appearance="outline">
      <mat-label>Search text</mat-label>
      <input matInput type="date" [formControl]="search">
      <button *ngIf="search.value" matSuffix mat-icon-button aria-label="Clear">
        <mat-icon (click)="clear()">close</mat-icon>
      </button>
    </mat-form-field>
  `,
  styles: []
})
export class CareboxSearchComponent implements OnInit, OnDestroy {
  search: FormControl = new FormControl('');
  sub$: Subscription = new Subscription();
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.sub$.add(
      this.search.valueChanges.pipe(
        debounceTime(800),
        distinctUntilChanged()
      )
        .subscribe(text => {
          this.onSearch.emit(text);
        })
    );
  }

  clear(): void {
    this.search.reset();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
