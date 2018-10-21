import { Component, Input } from '@angular/core'
import { Dragon } from '@app/models/Dragon'
import { DragonsService } from '@app/api/dragons.service'

@Component({
  selector: 'app-dragon-card',
  templateUrl: './dragon-card.component.html',
  styleUrls: ['./dragon-card.component.scss']
})
export class DragonCard {
  @Input() dragon: Dragon

  constructor(private dragonsService: DragonsService) { }

  deleteDragon(slug) {
    this.dragonsService.deleteDragon(slug)
      .subscribe()
  }
}
