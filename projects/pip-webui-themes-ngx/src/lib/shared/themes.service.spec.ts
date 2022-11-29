import { inject, TestBed } from '@angular/core/testing';
import { PipThemesService } from './themes.service';

describe('Themes service', () => {
  let service: PipThemesService;

  // register all needed dependencies
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PipThemesService],
    });
  });

  // instantiation through framework injection
  beforeEach(inject([PipThemesService], (srv) => {
    service = srv;
  }));

  it('should have an instance', () => {
    expect(service).toBeDefined();
  });
});
