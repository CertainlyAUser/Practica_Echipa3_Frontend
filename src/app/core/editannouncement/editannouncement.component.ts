import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { EditformService } from 'src/app/services/editform.service';
import { TagService } from 'src/app/services/tag.service';
import { AnnouncementFormTemplate } from '../../model/add-announcement.model';

@Component({
  selector: 'app-editannouncement',
  templateUrl: './editannouncement.component.html',
  styleUrls: ['./editannouncement.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class EditannouncementComponent implements OnInit {

  private announcement: AnnouncementFormTemplate;
  private curentImage : File;
  private showModal : boolean;
  public generalInfo : FormGroup;
  public descripInfo : FormGroup;
  public timeInfo : FormGroup;
  public miscInfo : FormGroup;
  public tagInfo : FormGroup;
  public imageInfo : FormGroup;

  constructor(private fb : FormBuilder, private ts : TagService, private route:ActivatedRoute, private es:AnnouncementService) { 
    const aId = route.snapshot.paramMap.get('id');
    console.log(aId);
    es.getAnnouncementById(parseInt(aId)).subscribe( x => {
      this.announcement = x;
      console.log(x);
      this.generalInfo.controls.title.setValue(x.title);
      this.generalInfo.controls.type.setValue(x.type);
      this.generalInfo.controls.link.setValue(x.link);
      this.descripInfo.controls.description.setValue(x.description.text);
      this.descripInfo.controls.shortDesc.setValue(x.shortDescription);
      switch(x.type){
        case 'internship':
          es.getInternshipById(parseInt(aId)).subscribe(res => {
            this.timeInfo.controls.startDate.setValue(res.startDate);
            this.timeInfo.controls.limitDate.setValue(res.limitDate);
            this.miscInfo.controls.requirements.setValue(res.requirments);
            this.generalInfo.controls.vacantPositions.setValue(res.numberAvailablePositions);
          });
          break
        case 'job':
          es.getJobById(parseInt(aId)).subscribe(res => {
            this.timeInfo.controls.limitDate.setValue(res.limitDate);
            this.miscInfo.controls.requirements.setValue(res.requirements);
          });
          break
        case 'course':
          es.getCourseById(parseInt(aId)).subscribe(res => {
            this.timeInfo.controls.startDate.setValue(res.startDate);
            this.timeInfo.controls.limitDate.setValue(res.limitDate);
          });
          break
        case 'contest':
          es.getContestById(parseInt(aId)).subscribe(res => {    
            this.generalInfo.controls.price.setValue(res.price);
            this.timeInfo.controls.date.setValue(res.date);
            this.timeInfo.controls.location.setValue(res.location);
            this.timeInfo.controls.limitDate.setValue(res.limitDate);
            this.miscInfo.controls.prize.setValue(res.prizes);
          });
          break
        case 'scholarship':
          es.getScholarshipById(parseInt(aId)).subscribe(res => {
            this.timeInfo.controls.limitDate.setValue(res.limitDate);
            this.miscInfo.controls.requirements.setValue(res.requirements);
            this.generalInfo.controls.vacantPositions.setValue(res.numberAvailablePositions);
          });
          break
        case 'other':
          es.getOtherById(parseInt(aId)).subscribe(res => {
            this.miscInfo.controls.details.setValue(res.details);
          });
          break
      }
      x.tags.forEach(y => ts.addTag(y.text.toString()));
    })
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

  ngOnInit() {
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
    }
    console.log(this.announcement);
    this.generalInfo.controls.title.valueChanges.subscribe(res => console.log("BBB"));
  }

  onImageChange(event){
    this.curentImage = event.target.files.item(0);
}
}
