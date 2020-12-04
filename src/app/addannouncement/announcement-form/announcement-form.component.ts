import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent implements OnInit {

  //public announcForm : FormGroup;
  public generalInfo : FormGroup;
  public descripInfo : FormGroup;
  public timeInfo : FormGroup;
  public miscInfo : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    /*this.announcForm = this.fb.group({
      'title':[''],
      'type':[''],
      'description':[''],
      'applicationDate':[''],
      'beginDate':[''],
      'link':[''],
      'requirements':[''],
      'vacantPositions':[''],
      'tags':[''],
    });*/
    this.generalInfo = this.fb.group({
      title:[null, Validators.required],
      type:[null, Validators.required],
      vacantPositions:[null, Validators.required]
    });
    this.descripInfo = this.fb.group({
      description:[''],
    });
    this.timeInfo = this.fb.group({
      applicationDate:[''],
      beginDate:[''],
    });
    this.miscInfo = this.fb.group({
      link:[''],
      requirements:[''],
      tags:[''],
    });
  }

}