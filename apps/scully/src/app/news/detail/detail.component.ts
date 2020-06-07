import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map, pluck, shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { UserDetail, UserDetailSafe } from '../../users/detail/detail.component';

interface NewsDetail {
  short: string;
  full: string
}

interface NewsDetailSafe {
  short: string;
  full: SafeHtml
}
const newsDetailStateKey = 'newsDetail';
const authorNewsDetailStateKey = 'authorNewsDetail';

@Component({
  selector: 'su-news-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public readonly newsId$ = this.activatedRoute.params.pipe(pluck('id'));
  public readonly newsDetail$: Observable<NewsDetailSafe> = (
    isScullyGenerated()
    ? this.transferStateService.getState<NewsDetail>(newsDetailStateKey)
    : this.httpClient.get<NewsDetail>('/assets/newsdetail.json').pipe(
      tap(newsDetail => this.transferStateService.setState<NewsDetail>(newsDetailStateKey, newsDetail)))
  ).pipe(
    map(newsDetail => {
      return {
        ...newsDetail,
        full: this.domSanitizer.bypassSecurityTrustHtml(newsDetail.full)
      };
    }),
    shareReplay(1)
  );

  public readonly userDetail$: Observable<UserDetailSafe> = (
    isScullyGenerated()
      ? this.transferStateService.getState<UserDetail>(authorNewsDetailStateKey)
      : this.httpClient.get<UserDetail>('/assets/userdetail.json').pipe(
      tap(userDetail => this.transferStateService.setState<UserDetail>(authorNewsDetailStateKey, userDetail)))
  ).pipe(
    map(userDetail => {
      return {
        ...userDetail,
        full: this.domSanitizer.bypassSecurityTrustHtml(userDetail.bio)
      };
    }),
    shareReplay(1)
  );

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly httpClient: HttpClient,
              private readonly transferStateService: TransferStateService,
              private readonly domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

}
