import { Observable } from 'rxjs';
import { RegisterNumber } from './RegisterNumber';
import { RegistryList } from './RegistryList';

export interface IRegisterService {
    sequenceNumber(data: {category: string}): Observable<RegisterNumber>;

    listSequence(data: null): Observable<RegistryList>;
}