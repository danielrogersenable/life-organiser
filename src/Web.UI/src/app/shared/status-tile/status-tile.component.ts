import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-tile',
  templateUrl: './status-tile.component.html',
  styleUrls: ['./status-tile.component.scss']
})
export class StatusTileComponent implements OnInit {
  @Input() statusClass: string;
  @Input() tileName: string;
  @Input() tileValue: string;
  @Input() dateValue: Date;
  @Input() timeValueInMinutes: number;

  constructor() { }

  ngOnInit() {
  }

  public hasTimeValue(): boolean {
    return !!this.timeValueInMinutes || this.timeValueInMinutes === 0;
  }

  public getRelativeDateValue(){
    return this.getRelativeDateText(new Date(this.dateValue));
  }

  public getTimeValue(): string {
    return this.timeValueInMinutes + ' minutes';
  }

  private getRelativeDateText(comparisonDate: Date): string {
    const now = new Date();
    comparisonDate.setHours(0,0,0);
    now.setHours(0,0,0);

    if (comparisonDate == now){
      return 'Today';
    }

    const timeDiff = Math.abs(comparisonDate.getTime() - now.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const isFutureDate = now < comparisonDate;

    if (daysDiff == 1){
      if (isFutureDate){
        return `Tomorrow`;
      }
      else {
        return `Yesterday`;
      }
    }

    if (daysDiff <= 14)
    {
      if (isFutureDate){
        return `In ${daysDiff} days`;
      }
      else {
        return `${daysDiff} days ago`;
      }
    }

    const weeksDiff = Math.ceil(daysDiff / 7);

    if (isFutureDate) {
      return `In ${weeksDiff} weeks`;
    }
    else {
      return `${weeksDiff} weeks ago`;
    }
  }
}
