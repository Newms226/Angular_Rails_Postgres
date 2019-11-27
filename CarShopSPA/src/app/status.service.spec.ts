import { TestBed, getTestBed } from '@angular/core/testing';
// import { HttpClient, } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { StatusService } from './status.service';

describe('StatusService', () => {
  let injector: TestBed;
  let service: StatusService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StatusService]
    });

    injector = getTestBed();
    service = injector.get(StatusService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // confirm there are no outstanding requests
  });

  describe('#getStatus', () => {
    it('should return an Observerable<Status>', () => {
      const dummyStatus = {
        status: '200 ok'
      };

      service.get_status().subscribe(status => {
        expect(status.status).toBe('200 ok');
      });

      const req = httpMock.expectOne(`${service.apiRoot}/status`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyStatus);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
