import { TestBed } from '@angular/core/testing';
import CompressHelper from './compressHelper';
describe('CompressHelper', () => {
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
    
    });
    it("compres and decompress",()=>{
        let testString="merhaba bu bir test mesajı"
        expect(CompressHelper.decompress(CompressHelper.compress(testString))).toEqual(testString)
    })
  });