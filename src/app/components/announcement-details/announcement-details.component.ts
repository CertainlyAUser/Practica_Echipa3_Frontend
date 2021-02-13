import { Component, OnInit, Input, Injectable, Injector } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../../services/announcement.service';
import { User } from '../../_user_model';
import { AuthenticationService } from '../../_services';
import { AnnouncementFormTemplate } from 'src/app/model/add-announcement.model';

@Component({
    selector: 'app-announcement-details',
    templateUrl: './announcement-details.component.html',
    styleUrls: ['./announcement-details.component.scss']
})
@Injectable({ providedIn: 'root' })
export class AnnouncementDetailsComponent implements OnInit {
    currentUser: User;
    announcement: AnnouncementFormTemplate;
    announcementId: number;
    compid: number;
    other: any;

    constructor(private route: ActivatedRoute, private announcementService: AnnouncementService, private authService: AuthenticationService) {
        authService.currentUser.subscribe(x => this.currentUser = x);
        this.other = {"limitDate":"","date":""}
    }

    ngOnInit() {
        this.announcementId = parseInt(this.route.snapshot.paramMap.get('id'));
        if(this.currentUser != null)
            this.announcementService.getCompanyId().subscribe(resId => {this.compid = resId});
        this.announcementService.getAnnouncementById(this.announcementId).subscribe(res => {this.announcement = res;
            switch(this.announcement.type){
                case "internship":
                    this.announcementService.getInternshipById(res.id).subscribe( res2 => this.other = res2);
                  break
                case "job":
                    this.announcementService.getJobById(res.id).subscribe( res2 => this.other = res2);
                  break
                case "course":
                    this.announcementService.getCourseById(res.id).subscribe( res2 => this.other = res2);
                  break
                case "contest":
                    this.announcementService.getContestById(res.id).subscribe( res2 => this.other = res2);
                  break
                case "scholarship":
                    this.announcementService.getScholarshipById(res.id).subscribe( res2 => this.other = res2);
                  break
                case "other":
                    this.announcementService.getOtherById(res.id).subscribe( res2 => this.other = res2);
                  break
              }
        });
    }
}
