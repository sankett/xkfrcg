import {Component} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

/**
 * @title Testing with MatExpansionPanelHarness and MatAccordionHarness
 */
@Component({
  selector: 'expansion-harness-example',
  templateUrl: 'expansion-harness-example.html',
  standalone: true,
  imports: [MatExpansionModule],
})
export class ExpansionHarnessExample {}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */