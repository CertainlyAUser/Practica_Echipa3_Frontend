import { User } from '../_user_model';

export class Announcement {
    public id: number;
    public title: string;
    public type: string;
    public description: string;
    public applicationDate: string;
    public beginDate: string;
    public duration: string;
    public link: string;
    public requirements: string;
    public vacantPositions: number;
    public importance: number;
    public user: User;
    public tags: any;
    public approvedForPublishing: boolean;
    public pinned: boolean;
}
