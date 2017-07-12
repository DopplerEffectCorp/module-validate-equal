import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {EqualValidatorDirective} from './validate-equal.directive';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [EqualValidatorDirective],
    exports: [EqualValidatorDirective],
})
export class EqualValidatorDirectiveModule {
}
