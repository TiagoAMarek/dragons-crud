import { Component, OnInit } from '@angular/core'
import { DragonsService } from '@app/api/dragons.service'
import { Dragons } from '@app/models/Dragons'

@Component({
  selector: 'list-page',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export default class ListPage implements OnInit {
  private dragons: Dragons = {
    items: [],
    _metadata: {},
  }
  private isLoading: boolean = false
  private currentPage: number = 0

  constructor(private dragonsApi: DragonsService) { }

  ngOnInit() {
    this.getDragons(this.currentPage)
  }

  getDragons(page) {
    this.isLoading = true

    this.dragonsApi.getDragons(page)
      .subscribe(dragons => {
        this.dragons = dragons
        this.isLoading = false
      })
  }

  updateList(page) {
    if (page !== undefined) this.currentPage = page
    this.getDragons(this.currentPage)
  }
}
