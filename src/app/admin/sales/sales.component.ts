import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements AfterViewInit {
  @ViewChild('revealDashBoard')
  public revealDashBoard!: ElementRef;

  public ngAfterViewInit() {
    this.setRevealTheme();
    $.ig.RevealSdkSettings.ensureFontsLoaded()
      .then(() => {
        $.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");

        $.ig.RVDashboard.loadDashboard("Sales", (dashboard: any) => {
          const _revealDashBoard = new $.ig.RevealView(this.revealDashBoard.nativeElement);
          _revealDashBoard.dashboard = dashboard;
        });
      })
      .catch((err: any) => {
        console.warn('An error occurred during Reveal setup.', err);
      })
;  }

  private setRevealTheme() {
    const style = window.getComputedStyle(document.body);
    const theme = new $.ig.RevealTheme();
    theme.regularFont = style.getPropertyValue('--ig-font-family').replace(/\s/g, '+') ?? 'sans-serif';
    theme.mediumFont = theme.regularFont;
    theme.boldFont = theme.regularFont;

    theme.fontColor = style.getPropertyValue('--ig-surface-500-contrast');
    theme.isDark = theme.fontColor !== 'black';
    theme.dashboardBackgroundColor = `hsl(${style.getPropertyValue('--ig-gray-100')})`;
    theme.visualizationBackgroundColor = `hsl(${style.getPropertyValue('--ig-surface-500')})`;

    $.ig.RevealSdkSettings.theme = theme;
  }
}
