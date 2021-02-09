import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { AnnouncementService } from 'src/app/services/announcement.service';
import { TagService } from 'src/app/services/tag.service';
import { AnnouncementFormTemplate } from '../../../model/add-announcement.model';
import { TagListComponent } from '../../../shared/tag-list/tag-list.component';
import { TagComponent } from '../../../shared/tag/tag.component';

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
  private curentImage : File;
  private announcement: AnnouncementFormTemplate;
  private showModal : boolean;
  public generalInfo : FormGroup;
  public descripInfo : FormGroup;
  public timeInfo : FormGroup;
  public miscInfo : FormGroup;
  public tagInfo : FormGroup;
  public imageInfo : FormGroup;

  constructor(private fb : FormBuilder, private ts : TagService, private ann : AnnouncementService) { }

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
    this.announcement = {title:'', type:'',link:'',vacantPositions:5,prize:'',price:5,shortDesc:'',description:'',startDate:'',limitDate:'',date:'',location:'',requirements:'',details:'',tags:[]};
    this.showModal = false;
    this.generalInfo = this.fb.group({
      //title:[null, Validators.required],
      //type:[null, Validators.required],
      //vacantPositions:[null, Validators.required],
      title:[null, Validators.required],
      link:[''],
      type:[null, Validators.required],
      vacantPositions:[''],
      price:['']
    });
    this.descripInfo = this.fb.group({
      shortDesc:[null, Validators.required],
      description:[null, Validators.required]
    });
    this.timeInfo = this.fb.group({
      startDate:[''],
      limitDate:[''],
      date:[''],
      location:['']
    });
    this.miscInfo = this.fb.group({
      requirements:[''],
      details:[''],
      prize:['']
    });
    this.tagInfo = this.fb.group({
      tags:['']
    });
    this.imageInfo = this.fb.group({
      image:['']
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

  createAnnouncement(){
    if( this.generalInfo.valid && this.descripInfo.valid && this.timeInfo.valid && this.miscInfo.valid){
      this.ann.saveImager(this.curentImage);
      this.announcement.title = this.generalInfo.controls.title.value;
      this.announcement.link = this.generalInfo.controls.link.value;
      this.announcement.type = this.generalInfo.controls.type.value;
      this.announcement.vacantPositions = this.generalInfo.controls.vacantPositions.value;
      this.announcement.price = this.generalInfo.controls.price.value;
      this.announcement.shortDesc = this.descripInfo.controls.shortDesc.value;
      this.announcement.description = this.descripInfo.controls.description.value;
      this.announcement.startDate = this.timeInfo.controls.startDate.value;
      this.announcement.limitDate = this.timeInfo.controls.limitDate.value;
      this.announcement.date = this.timeInfo.controls.date.value;
      this.announcement.location = this.timeInfo.controls.location.value;
      this.announcement.prize = this.miscInfo.controls.prize.value;
      this.announcement.requirements = this.miscInfo.controls.requirements.value;
      this.announcement.details = this.miscInfo.controls.details.value;
      this.announcement.tags = this.ts.getTags();
      this.ts.clear();
      this.ann.postAnnouncement(this.announcement);
    }
    console.log(this.announcement);
  }
  
  onImageChange(event){
      this.curentImage = event.target.files.item(0);
  }
}