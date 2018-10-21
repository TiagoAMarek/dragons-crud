// Based on --> http://jasonwatmore.com/post/2016/08/23/angular-2-pagination-example-with-logic-like-google
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { PaginationService } from './pagination.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class Pagination implements OnInit {
  @Input() paginationData
  @Output() page = new EventEmitter()
  // pager object
  pager: any = {}

  // paged items
  pagedItems: any[]

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
    this.setPage(1)
  }

  setPage(page: number) {
    this.pager = this.paginationService.getPager(this.paginationData.total_count, page)
  }

  clickPage(page: number) {
    this.page.emit(page - 1)
    this.setPage(page)
  }

}
