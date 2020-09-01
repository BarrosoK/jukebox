import { Component, OnInit } from '@angular/core';
import {SyncService} from '@app/core/services/sync.service';
import * as moment from 'moment';
import {Toast, ToastrService} from 'ngx-toastr';
import * as fileSaver from 'file-saver';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  dateStartIso = '';
  dateEndIso = '';
  fetching = false;

  infos = {
    nbtotal: 0,
    amountDone: 0
  };

  constructor(private syncService: SyncService, private toastrService: ToastrService,
              private socket: Socket) { }

  ngOnInit(): void {
    this.socket
      .fromEvent('nbtotal')
      .subscribe(total => {
        this.infos.nbtotal = +total;
      });

    this.socket
      .fromEvent('amountDone')
      .subscribe(amount => {
        this.infos.amountDone = +amount;
      });
  }

  changeEndDate(date) {
    this.dateEndIso = moment(date).toISOString();
  }

  changeStartDate(date) {
    this.dateStartIso = moment(date).toISOString();
  }
  getCsv() {
    this.fetching = true;
    this.syncService.mail(this.dateStartIso, this.dateEndIso).subscribe((res) => {
      this.toastrService.success('csv sent in mail !', 'CSV GENERATED !');
      console.log(res);
      const blob = new Blob([res], { type: 'text; charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, 'clients.csv');
      console.log(res);
    }, (err) => {
      this.toastrService.error('csv generation failed', '');
    }, () => {
      this.fetching = false;
      this.infos.nbtotal = 0;
      this.infos.amountDone = 0;
    });
  }

}
