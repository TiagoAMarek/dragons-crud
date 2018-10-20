import { Component, OnInit, Input } from '@angular/core'
import { DragonsService } from '@app/api/dragons.service'
import { Dragon } from '@app/models/Dragon'
import { Dragons } from '@app/models/Dragons'

@Component({
  selector: 'list-page',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export default class ListPage implements OnInit {
  private dragons: Dragon[] = []

  constructor(private dragonsApi: DragonsService) { }

  async ngOnInit() {
    this.dragonsApi.getDragons()
      .subscribe(dragons => this.dragons = dragons)
  }
}
