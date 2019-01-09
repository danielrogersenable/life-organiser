import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material.module';
import { MccColorPickerModule } from 'material-community-components';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        SharedMaterialModule,
        MccColorPickerModule.forRoot({
            empty_color: 'transparent'
        })
    ],
    exports: [SharedMaterialModule, MccColorPickerModule, LoaderComponent],
    declarations: [LoaderComponent]
})
export class SharedModule {}
