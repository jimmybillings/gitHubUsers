import { UsersService } from './users.service';
import { Observable } from 'rxjs/Observable';

fdescribe('UsersService', () => {
  let mockHttp: any;
  let serviceUnderTest: UsersService;
  beforeEach(() => {
    mockHttp = {
      get: jasmine.createSpy('get').and.returnValue(Observable.of({}))
    };
    serviceUnderTest = new UsersService(mockHttp);
  });

  it('should be created', () => {
    serviceUnderTest.searchBy('Eric').subscribe();
    expect(mockHttp.get).toHaveBeenCalledWith('');
  });
});
