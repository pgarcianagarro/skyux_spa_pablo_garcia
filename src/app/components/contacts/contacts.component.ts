import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact-data.model';
import { ContactService } from 'src/app/services/contact.service';

import { SkyAgGridService, SkyCellType } from '@skyux/ag-grid';

import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent
} from 'ag-grid-community';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public columnDefs: ColDef[] = [
    {
      field: 'firstName',
      headerName: 'First name'
    },
    {
      field: 'lastName',
      headerName: 'Last name'
    },
    {
      field: 'email',
      headerName: 'Email'
    },
    {
      field: 'dob',
      headerName: 'Date of birth',
      type: SkyCellType.Date
    },
    {
      field: 'address',
      headerName: 'Address'
    },
    {
      field: 'contactNo',
      headerName: 'Contact No'
    }
  ]

  public gridApi: GridApi | undefined;
  public gridData: Contact[] = [];
  public gridOptions: GridOptions;
  public searchText = '';

  constructor(
    private contactService : ContactService,
    private agGridService: SkyAgGridService
    ) {
      this.gridOptions = {
        columnDefs: this.columnDefs,
        onGridReady: (gridReadyEvent): void => this.onGridReady(gridReadyEvent),
        rowSelection: 'single',
      };
      this.gridOptions = this.agGridService.getGridOptions({
        gridOptions: this.gridOptions,
      });
    }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe({
      next: (v) => this.gridData = v
    });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;
    this.gridApi.sizeColumnsToFit();
  }

}
