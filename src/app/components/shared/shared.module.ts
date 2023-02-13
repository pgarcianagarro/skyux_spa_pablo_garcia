import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//SKY UX
import { SkyAgGridModule } from "@skyux/ag-grid";
import { SkyIdModule } from '@skyux/core';
import { SkyDataManagerModule, SkyDataManagerService } from '@skyux/data-manager';
import { SkyDatepickerModule } from '@skyux/datetime';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyAlertModule, SkyHelpInlineModule, SkyIconModule, SkyStatusIndicatorModule } from '@skyux/indicators';
import { SkyBoxModule, SkyFluidGridModule, SkyToolbarModule } from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';
import { SkyNavbarModule } from '@skyux/navbar';
import { SkyEmailValidationModule } from '@skyux/validation';
import { AgGridModule } from 'ag-grid-angular';

//COMPONENTS
import { ContactsFormComponent } from '../contacts/contacts-form/contacts-form.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from "../navbar/navbar.component";

@NgModule({
    declarations: [HomeComponent, ContactsComponent, ContactsFormComponent, NavbarComponent],
    providers: [SkyDataManagerService],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        SkyInputBoxModule,
        SkyIconModule,
        SkyBoxModule,
        SkyFluidGridModule,
        SkyIdModule,
        SkyHelpInlineModule,
        SkyStatusIndicatorModule,
        SkyDatepickerModule,
        SkyEmailValidationModule,
        SkyAlertModule,
        SkyAgGridModule,
        AgGridModule,
        SkySearchModule,
        SkyToolbarModule,
        SkyDataManagerModule,
        SkyNavbarModule
    ],
    exports:[HomeComponent,ContactsComponent,ContactsFormComponent, NavbarComponent]
  })
  export class SharedModule {}
