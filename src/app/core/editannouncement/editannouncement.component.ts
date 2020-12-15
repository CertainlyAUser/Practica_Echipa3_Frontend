import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { EditformService } from 'src/app/services/editform.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-editannouncement',
  templateUrl: './editannouncement.component.html',
  styleUrls: ['./editannouncement.component.scss']
})
export class EditannouncementComponent implements OnInit {

  private announcement: AnnouncementFormTemplate;
  private showModal : boolean;
  public generalInfo : FormGroup;
  public descripInfo : FormGroup;
  public timeInfo : FormGroup;
  public miscInfo : FormGroup;
  public tagInfo : FormGroup;

  constructor(private fb : FormBuilder, private ts : TagService, private route:ActivatedRoute, private es:EditformService) { 
    //this.announcement = {title:'', type:'',link:'',vacantPositions:5,prize:'',price:5,shortDesc:'',description:'',startDate:'',limitDate:'',date:'',location:'',requierments:'',tags:[]};
    const aId = route.snapshot.paramMap.get('id');
    console.log(aId);
    es.getAnnouncement(aId).subscribe( x => {
      this.announcement = x;
      console.log(x);
      this.generalInfo.controls.title.setValue(x.title);
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

  ngOnInit() {
  }

}
