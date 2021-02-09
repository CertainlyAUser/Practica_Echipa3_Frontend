import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TagService } from 'src/app/services/tag.service';
import { TagComponent } from '../tag/tag.component';
import { Tag } from '../../model/tag.model';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  private tagList : Tag[];
  //private tagList : Observable<Tag[]>;

  constructor(private ts : TagService) { }

  ngOnInit() {
    /*this.ts.addTag("Text");
    this.ts.addTag("Text1");
    this.ts.addTag("Text2");*/
    this.getList();
  }

  getList() : void{
    //this.ts.getTags().subscribe(lists => this.tagList = lists);
    this.tagList = this.ts.getTags();
  }

}
