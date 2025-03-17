import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlowService } from './blow.service';

describe('BlowService', () => {
  let service: BlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]});
    service = TestBed.inject(BlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
