import { TestBed } from '@angular/core/testing';

import { EditformService } from './editform.service';

describe('EditformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditformService = TestBed.get(EditformService);
    expect(service).toBeTruthy();
  });
});
