import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-issue-5345',
  styleUrls: ['issue.5345.demo.css'],
  template: `
    <mat-card class="card-demo" (click)="toggleDirection()" style="cursor: pointer;">
      <mat-card-title><a href="https://github.com/angular/material/issues/5345" target="_blank">
        Issue #5345
      </a></mat-card-title>
      <mat-card-subtitle>Visualize the affects of 'flex' and 'flex-offset' with %, px, or raw
        values.
      </mat-card-subtitle>
      <mat-card-content>
        <div class="containerX">
          <div [fxLayout]="direction" class="mat-whiteframe-2dp">
            <div fxFlex fxFlexOffset="20" class="one">&lt;div <b>fxFlexOffset="20"</b> fxFlex &gt;
            </div>
            <div fxFlex="150px" class="two">&lt;div fxFlex="150px"&gt;</div>
          </div>
          <div [fxLayout]="direction" class="mat-whiteframe-3dp">
            <div fxFlex fxFlexOffset="50%" class="three">&lt;div <b>fxFlexOffset="50%"</b> fxFlex
              &gt;
            </div>
            <div fxFlex class="four">&lt;div fxFlex&gt;</div>
          </div>
          <div [fxLayout]="direction" class="mat-whiteframe-3dp">
            <div fxFlex="25%" fxFlexOffset="25" class="five">&lt;div <b>fxFlexOffset="25"</b>
              fxFlex="25%" &gt;
            </div>
            <div fxFlex="50" fxFlexOffset="20" class="six">&lt;div <b>fxFlexOffset="20"</b>
              fxFlex="50" &gt;
            </div>
          </div>
        </div>
      </mat-card-content>
      <mat-card-footer>
        <div class="hint">&lt;div fxLayout="{{ direction }}" &gt;</div>
      </mat-card-footer>
    </mat-card>
  `
})
export class DemoIssue5345 {
  direction = 'row';

  toggleDirection() {
    let next = (DIRECTIONS.indexOf(this.direction) + 1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
}

const DIRECTIONS = ['row', 'row-reverse'];
