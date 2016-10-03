import { AppHeader } from "./header.component";
import { LoginService }  from './login.service';
 
describe('MyList Tests', () => {
    it('Should get 5 dogs', () => {
        let list: String[] = [ 'perro' ];

        expect(list.length).toBe(1);
    });
});