import { Component, Input, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from '../../model/tag.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tagDesc : Tag;

  constructor(private ts : TagService) { }

  ngOnInit() {
  }

}
