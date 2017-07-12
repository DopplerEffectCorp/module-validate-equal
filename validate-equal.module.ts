import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidateEqualDirective} from './validate-equal.directive';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [ValidateEqualDirective],
    exports: [ValidateEqualDirective],
})
export class ValidateEqualDirectiveModule {
}
