import { Component, Input, EventEmitter, Output } from '@angular/core'
import { PaginationService } from './pagination.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class Pagination {
  private paginationData: any

  @Input() set interactionData(data) {
    this.paginationData = data
    // API starts on page 0, it fix to visually starts on page 1
    this.paginationData.page += 1
    this.setPage(this.paginationData.page)
  }
  @Output() page = new EventEmitter()
  // pager object
  pager: any = {}

  // paged items
  pagedItems: any[]

  constructor(private paginationService: PaginationService) { }

  setPage(page: number) {
    this.pager = this.paginationService.getPager(this.paginationData.total_count, page)
  }

  clickPage(page: number) {
    this.page.emit(page - 1)
  }
}
