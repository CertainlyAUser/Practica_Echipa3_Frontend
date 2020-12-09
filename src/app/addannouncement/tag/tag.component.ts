import { Component, Input, OnInit } from '@angular/core';
import { TagService } from 'src/app/service/tag.service';

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
