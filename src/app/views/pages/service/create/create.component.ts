import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/core/services/api/services.service';
import { isThisTypeNode } from 'typescript';
const verticalCenteredModal = {
  htmlCode: 
`<!-- Button trigger modal -->
<button class="btn btn-primary" (click)="openVerticalCenteredModal(verticalCenteredModal)">Launch demo modal</button>
<!-- Modal -->
<ng-template #verticalCenteredModal let-modal>
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    <button type="button" class="btn-close" (click)="modal.close('by: close icon')" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <p>Modal body</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="modal.close('by: close button')">Close</button>
    <button type="button" class="btn btn-primary" (click)="modal.close('by: save button')">Save changes</button>
  </div>
</ng-template>`,
  tsCode: 
`import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  
  constructor(private modalService: NgbModal) { }

  openVerticalCenteredModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true}).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => {});
  }
}`
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  verticalCenteredModalCode: any;
  startPage = 0;
  nextPage= 10;
  allServices: any[]
  providerId: any;
  serviceName: any;
  serviceNote: any
  constructor(private modalService: NgbModal, private serviceServices: ServicesService) { }

  ngOnInit(): void {
    this.verticalCenteredModalCode = verticalCenteredModal;
    this.getSeriveces(0,10);
    this.getProviderInfromation()
  }
  openVerticalCenteredModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true}).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => {});
  }

  getSeriveces(start: any, end: any){
    this.allServices = []
    this.serviceServices.getServices(start, end).subscribe((res:any)=>{
      this.allServices = res.data;
      console.log(this.allServices)
    })
  }

  getProviderInfromation(){
    this.serviceServices.getProviderInformation().subscribe((res:any)=>{
      this.providerId = res.data.id
      console.log(this.providerId)
    })
  }
  addService(){
    const data = {
      id: this.providerId,
      name: this.serviceName,
      note: this.serviceNote
    }
    this.serviceServices.addService(data).subscribe((res:any)=>{
      this.getSeriveces(0,10)
      this.serviceNote = "";
      this.serviceName = "";
    })
  }
  getServiceprevious(){
    this.startPage
    if(this.startPage==0){
      this.getSeriveces(0,10)
    }else{
      this.startPage = this.startPage - 10
      this.getSeriveces(this.startPage,10)
    }

  }
  getServicesmore(){
    this.startPage = this.startPage - this.nextPage;
    this.getSeriveces(this.startPage,10)
  }
}
