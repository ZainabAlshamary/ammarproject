import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CardsSellingComponent } from "./cards-selling/cards-selling.component";
import { CardsComponent } from "./cards.component";
import { AllCardsComponent } from "./all-cards/all-cards.component";
import { MovementsComponent } from "./movements/movements.component";
import { SliderComponent } from "./slider/slider.component";
import { SendNotificationsComponent } from "./send-notifications/send-notifications.component";

const routes: Routes = [
    {
        path: "",
        component: CardsComponent,
        children: [
            {
                path: '',
                redirectTo: "cardsSelling",
                pathMatch: "full"
            },
            {
                path: 'cardsSelling',
                component: CardsSellingComponent
            },
            {
                path: 'allcards',
                component: AllCardsComponent
            },
            {
                path: 'movements',
                component: MovementsComponent
            },
            {
                path: 'slider',
                component: SliderComponent
            },
            {
                path: 'sendNotifications',
                component: SendNotificationsComponent
            }
        ]
    }
]

@NgModule({
    declarations: [
        CardsComponent,
        CardsSellingComponent,
        AllCardsComponent,
        MovementsComponent,
        SliderComponent,
        SendNotificationsComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
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
export class CardssModule {}
