import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-invoices',
  templateUrl: './all-invoices.component.html',
  styleUrls: ['./all-invoices.component.scss']
})
export class AllInvoicesComponent implements OnInit {
  simpleItems: any = [];
  selectedSimpleItem: any = null;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.simpleItems = [ 'سحب', 'ايداع'];
  }
openLgModal(content: TemplateRef<any>) {
    this.modalService.open(content, {size: 'lg'}).result.then((result: string) => {
      console.log("Modal closed" + result);
    }).catch((res: any) => {});
  }
}
