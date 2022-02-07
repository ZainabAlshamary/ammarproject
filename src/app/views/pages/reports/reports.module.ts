import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { PaidBillsComponent } from './paid-bills/paid-bills.component';
import { UnpaidBillsComponent } from './unpaid-bills/unpaid-bills.component';
import { LateBillsComponent } from './late-bills/late-bills.component';
import { CancelBillsComponent } from './cancel-bills/cancel-bills.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbCollapseModule,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full',
      },
      {
        path: 'all',
        component: AllBillsComponent,
      },
      {
        path: 'paid',
        component: PaidBillsComponent,
      },
      {
        path: 'unpaid',
        component: UnpaidBillsComponent,
      },
      {
        path: 'late',
        component: LateBillsComponent,
      },
      {
        path: 'cancel',
        component: CancelBillsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ReportsComponent,
    AllBillsComponent,
    PaidBillsComponent,
    UnpaidBillsComponent,
    LateBillsComponent,
    CancelBillsComponent,
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
    FeahterIconModule,
    NgxDatatableModule,
    NgbNavModule,
    NgbCollapseModule,
    NgSelectModule,
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {},
    }),
  ],
})
export class ReportsModule {}
