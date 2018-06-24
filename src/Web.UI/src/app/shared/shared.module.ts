import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material.module';
import { MccColorPickerModule } from 'material-community-components';

@NgModule({
    imports: [
        CommonModule,
        SharedMaterialModule,
        MccColorPickerModule.forRoot({
            empty_color: 'transparent'
        })
    ],
    exports: [SharedMaterialModule, MccColorPickerModule],
    declarations: []
})
export class SharedModule {}
