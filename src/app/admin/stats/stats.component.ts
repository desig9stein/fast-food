import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../../models/financial/box-office-revenue-type';
import { FinancialService } from '../../services/financial.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    this.financialService.getData('BoxOfficeRevenueType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialBoxOfficeRevenue = data,
      error: (_err: any) => this.financialBoxOfficeRevenue = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
