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

  constructor(private dragonsApi: DragonsService) { }

  ngOnInit() {
    this.getDragons(0)
  }

  getDragons(page) {
    this.dragonsApi.getDragons(page)
      .subscribe(dragons => this.dragons = dragons)
  }

  updateList(page) {
    this.getDragons(page)
  }
}
