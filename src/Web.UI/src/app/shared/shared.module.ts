import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material.module';
import { MccColorPickerModule } from 'material-community-components';
import { LoaderComponent } from './loader/loader.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StatusTileComponent } from './status-tile/status-tile.component';

@NgModule({
    imports: [
        CommonModule,
        SharedMaterialModule,
        MccColorPickerModule.forRoot({
            empty_color: 'transparent'
        }),
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        SharedMaterialModule, 
        MccColorPickerModule, 
        LoaderComponent,
        StatusTileComponent,
        ReactiveFormsModule, 
        FormsModule
    ],
    declarations: [LoaderComponent, StatusTileComponent]
})
export class SharedModule {}
