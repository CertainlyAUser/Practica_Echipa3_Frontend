import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TagComponent } from '../addannouncement/tag/tag.component';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private nid : number;
  private tagList : Tag[] = [];

  constructor(private http : HttpClient) {
    this.nid = 1;
   }

  public addTag(text : string){
    let a : Tag;
    a = {id:this.nid, text:text};
    this.tagList.push(a);
    this.nid = this.nid + 1
  }
  
  public deleteTag(id : Tag){
    let b = this.tagList.indexOf(id);
    console.log(b);
    this.tagList.splice(b,1);
    console.log(this.tagList);
  }

  public getTags() : Tag[] {
    return this.tagList;
  }

  /*public getTags() : Observable<Tag[]> {
    return this.http.get<Tag[]>("http://localhost:3000/tags");
  }*/
}
