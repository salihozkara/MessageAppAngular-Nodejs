
import * as JSLZString from 'lz-string';
export default class CompressHelper {
    static compress(data: string) {
      return JSLZString.compress(data);
    }
  
    static decompress(compressed: string) {
      return JSLZString.decompress(compressed);
    }
  }