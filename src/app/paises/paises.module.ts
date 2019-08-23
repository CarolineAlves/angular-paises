import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { PaisComponent } from './pais/pais.component';

@NgModule({
    declarations: [ PaisComponent ],
    exports: [ PaisComponent ],
    imports: [ HttpClientModule ]
})
export class PhotosModule {}