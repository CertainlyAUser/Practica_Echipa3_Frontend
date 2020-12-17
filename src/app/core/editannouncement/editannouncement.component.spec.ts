import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditannouncementComponent } from './editannouncement.component';

describe('EditannouncementComponent', () => {
  let component: EditannouncementComponent;
  let fixture: ComponentFixture<EditannouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditannouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
