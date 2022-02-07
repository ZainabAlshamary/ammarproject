import { InvoicesComponent } from './invoices.component';
import { FormsModule } from '@angular/forms';
import { InvoiceComponent } from './../general/invoice/invoice.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllInvoicesComponent } from './all-invoices/all-invoices.component';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbCollapseModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';
import { SetionsComponent } from './setions/setions.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent,
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full',
      },
      {
        path: 'all',
        component: AllInvoicesComponent,
      },
      {
        path: 'setions',
        component: SetionsComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      }
    ],
  },
];

@NgModule({
  declarations: [
    InvoicesComponent,
    AllInvoicesComponent,
    SetionsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FullCalendarModule, // import the FullCalendar module! will make the FullCalendar component available
    PerfectScrollbarModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbDatepickerModule,
    NgbNavModule,
    NgbCollapseModule,
    FeahterIconModule,
    NgSelectModule,
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {},
    }),
  ],
})
export class InvoicesModule {}
