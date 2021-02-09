import { format } from "url"
import { Tag } from "../model/tag.model"

export interface AnnouncementFormTemplate{
    title: string
    link: string
    type: string
    vacantPositions:number
    price: number
    shortDesc: string
    description: string
    startDate: string
    limitDate: string
    date: string
    location: string
    prize: string
    requirements: string
    details: string
    tags: Tag[]
}