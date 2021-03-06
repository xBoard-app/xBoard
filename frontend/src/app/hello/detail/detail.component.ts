import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  HelloServiceClient,
  Hello,
  HelloById,
} from 'src/app/proto/hello/src/hello/hello.pb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private detailId: number;
  hello$: Observable<Hello>;

  constructor(
    private route: ActivatedRoute,
    private helloService: HelloServiceClient,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.detailId = Number(params.get('id'));
    });

    this.hello$ = this.helloService
      .findOne(new HelloById({ id: this.detailId }));
  }
}
