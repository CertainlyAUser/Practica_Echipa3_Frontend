import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { TagService } from 'src/app/services/tag.service';
import { TagListComponent } from '../tag-list/tag-list.component';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AnnouncementFormComponent implements OnInit {

  //public announcForm : FormGroup;
  private showModal : boolean;
  public generalInfo : FormGroup;
  public descripInfo : FormGroup;
  public timeInfo : FormGroup;
  public miscInfo : FormGroup;
  public tagInfo : FormGroup;

  constructor(private fb : FormBuilder, private ts : TagService) { }

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
    this.showModal = false;
    this.generalInfo = this.fb.group({
      //title:[null, Validators.required],
      //type:[null, Validators.required],
      //vacantPositions:[null, Validators.required],
      title:[null, Validators.required],
      link:[''],
      type:[''],
      vacantPositions:[''],
      price:['']
    });
    this.descripInfo = this.fb.group({
      shortDesc:[''],
      description:['']
    });
    this.timeInfo = this.fb.group({
      startDate:[''],
      limitDate:[''],
      date:[''],
      location:['']
    });
    this.miscInfo = this.fb.group({
      link:[''],
      requirements:[''],
      prize:['']
    });
    this.tagInfo = this.fb.group({
      tags:['']
    });

    this.generalInfo.controls.type.valueChanges.subscribe(value => {
      if(value == "Contest")
        this.generalInfo.controls.price.setValidators([Validators.required]);
      else{
        console.log("AAAA");
        this.generalInfo.controls.price.clearValidators();
        this.generalInfo.controls.price.updateValueAndValidity();
      }
    });
  }

  toggleShow(){
    this.showModal = !this.showModal;  
  }

  onSubmit(){
    this.ts.addTag(this.tagInfo.controls.tags.value);
    this.tagInfo.reset();
  }
}