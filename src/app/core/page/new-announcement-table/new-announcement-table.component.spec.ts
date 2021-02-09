import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnnouncementTableComponent } from './new-announcement-table.component';

describe('NewAnnouncementTableComponent', () => {
  let component: NewAnnouncementTableComponent;
  let fixture: ComponentFixture<NewAnnouncementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnnouncementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnnouncementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
