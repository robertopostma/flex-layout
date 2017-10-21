import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-responsive-flex-order',
  template: `
    <mat-card class="card-demo">
      <mat-card-title>Responsive Flex Ordering</mat-card-title>
      <mat-card-subtitle>Add the flex-order directive to a layout child to set its order position
        within the layout container:
      </mat-card-subtitle>
      <mat-card-content>
        <div class="containerX">
          <div fxLayout="row" class="coloredContainerX box">
            <div fxFlex fxFlexOrder="-1">
              <p>[flex-order="-1"]</p>
            </div>
            <div fxFlex fxFlexOrder="1" fxFlexOrder.gt-md="3">
              <p fxHide="false" fxHide.gt-md> [flex-order="1"] </p>
              <p fxShow="false" fxShow.gt-md> [flex-order.gt-md="3"] </p>
            </div>
            <div fxFlex fxFlexOrder="2">
              <p>[flex-order="2"]</p>
            </div>
            <div fxFlex fxFlexOrder="3" fxFlexOrder.gt-md="1">
              <p fxHide="false" fxHide.gt-md> [flex-order="3"] </p>
              <p fxShow="false" fxShow.gt-md> [flex-order.gt-md="1"] </p>
            </div>
          </div>
        </div>
      </mat-card-content>
      <mat-card-footer style="width:95%">
        <media-query-status></media-query-status>
      </mat-card-footer>
    </mat-card>
  `
})
export class DemoResponsiveFlexOrder {
}
