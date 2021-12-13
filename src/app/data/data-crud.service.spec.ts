import { TestBed } from '@angular/core/testing';

import { DataCRUDService } from './data-crud.service';

describe('DataCRUDService', () => {
  let service: DataCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
