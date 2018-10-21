import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from '@env/environment'
const { apiUrl } = environment

import { Dragons } from '@app/models/Dragons'
import { Dragon } from '@app/models/Dragon'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class DragonsService {

  constructor(private _http: HttpClient) { }

  sortDragons = (dragons) =>
    dragons.items.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

  getDragons(page: number): Observable<Dragons> {
    return this._http.get<Dragons>(`${apiUrl}/dragons/?page=${page}`)
      .pipe(
        map(dragons => {
          return {
            items: this.sortDragons(dragons),
            _metadata: dragons._metadata,
          }
        })
      )
  }

  getDragon(slug: string): Observable<any> {
    return this._http.get<Dragon>(`${apiUrl}/dragons/${slug}`)
  }

  registerDragon(data: any): Observable<any> {
    return this._http.post(`${apiUrl}/dragons/`, data)
  }

  updateDragon(data: any, slug: string): Observable<any> {
    return this._http.put(`${apiUrl}/dragons/${slug}`, data)
  }

  deleteDragon(slug: string): Observable<any> {
    return this._http.delete(`${apiUrl}/dragons/${slug}`)
  }
}
