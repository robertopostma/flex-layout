import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'demo-flex-align-self',
  styleUrls: [
    'layoutAlignment.demo.css',
  ],
  template: `
    <mat-card class="card-demo">
      <mat-card-title>Flex with Align-Self</mat-card-title>
      <mat-card-subtitle>Click on 'target' to explore how 'flex-align' can change the alignment
        for a single element only.
      </mat-card-subtitle>
      <mat-card-content>
        <div class="containerX">
          <div class="box" style="height:200px;">
            <div fxLayout="row" fxLayoutAlign="center center" fxLayoutGap="5px"
                 style="height:100%;padding: 5px;">
              <div fxFlex class="black one"> 1</div>
              <div fxFlex class="black two_h target" [fxFlexAlign]="alignTo"
                   (click)="toggleAlignment()"> target
              </div>
              <div fxFlex class="black three"> 3</div>
              <div fxFlex class="black four_h"> 4</div>
              <div fxFlex class="black fives"> 5</div>
            </div>
          </div>
        </div>
      </mat-card-content>
      <mat-card-footer style="width:95%;">
        <div class="hint">
          &lt;div fxFlexAlign="{{ alignTo }}"&gt;
        </div>
      </mat-card-footer>
    </mat-card>
  `
})
export class DemoFlexAlignSelf {
  alignTo = 'center';

  toggleAlignment() {
    let j = ALIGN_OPTIONS.indexOf(this.alignTo);
    this.alignTo = ALIGN_OPTIONS[(j + 1) % ALIGN_OPTIONS.length];
  }
}

const ALIGN_OPTIONS = ['auto', 'start', 'center', 'baseline', 'end', 'stretch'];
