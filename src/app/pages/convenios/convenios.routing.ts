import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConveniosListaComponent } from "./convenios-lista/convenios-lista.component";
import { ConvenioCadastroComponent } from "./convenio-cadastro/convenio-cadastro.component";


const routes: Routes = [
    {
        path: '', component: ConveniosListaComponent
    },
    {
        path: 'novo', component: ConvenioCadastroComponent
    },
    {
        path: ':id', component: ConvenioCadastroComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ConveniosRoutingModule {}