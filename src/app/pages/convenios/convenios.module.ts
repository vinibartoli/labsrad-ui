import { NgModule } from "@angular/core";
import { ConveniosListaComponent } from "./convenios-lista/convenios-lista.component";
import { ConvenioCadastroComponent } from "./convenio-cadastro/convenio-cadastro.component";
import { PrimeNGModule } from "src/app/primeng.module";
import { ConveniosRoutingModule } from "./convenios.routing";



@NgModule({
    declarations: [
        ConveniosListaComponent,
        ConvenioCadastroComponent
    ],
    imports:[
        PrimeNGModule,
        ConveniosRoutingModule
    ]
})

export class ConveniosModule {}