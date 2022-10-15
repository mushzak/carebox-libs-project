import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CareboxDetailsService} from "./carebox-details.service";
import {Subscription} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {DailyData} from "./us-daily.intervace";

@Component({
  selector: 'lib-carebox-details',
  templateUrl: 'carebox-details.component.html',
  styles: [
    `table {
      width: 100%;
    }`
  ]
})
export class CareboxDetailsComponent implements OnInit, OnDestroy {
  @Input() text: string = '';
  sub$: Subscription = new Subscription();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  elementData: DailyData[] = [];
  displayedColumns: string[] = ['date', 'cases', 'testing', 'outcomes'];

  constructor(
    private careboxDetailsService: CareboxDetailsService
  ) {
  }

  ngOnInit(): void {
    this.sub$.add(
      this.careboxDetailsService.getData().subscribe((res: DailyData[]) => {
        this.elementData = res;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
