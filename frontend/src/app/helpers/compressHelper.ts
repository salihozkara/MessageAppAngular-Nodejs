import * as JSLZString from 'lz-string';
export default class CompressHelper {
  static compress(data: string) {
    return JSLZString.compress(data);
    return this.en(data)
  }

  static decompress(compressed: string) {
    return JSLZString.decompress(compressed);
    return this.de(compressed)
  }
  static en(c) {
    var x = 'charCodeAt',
      b,
      e = {},
      f = c.split(''),
      d = [],
      a = f[0],
      g = 256;
    for (b = 1; b < f.length; b++)
      (c = f[b]),
        null != e[a + c]
          ? (a += c)
          : (d.push(1 < a.length ? e[a] : a[x](0)),
            (e[a + c] = g),
            g++,
            (a = c));
    d.push(1 < a.length ? e[a] : a[x](0));
    for (b = 0; b < d.length; b++) d[b] = String.fromCharCode(d[b]);
    return d.join('');
  }

  static de(b) {
    var a,
      e = {},
      d = b.split(''),
      f,
      c = (f = d[0]),
      g = [c],
      o,
      h = (o = 256);
    for (b = 1; b < d.length; b++)
      (a = d[b].charCodeAt(0)),
        (a = h > a ? d[b] : e[a] ? e[a] : f + c),
        g.push(a),
        (c = a.charAt(0)),
        (e[o] = f + c),
        o++,
        (f = a);
    return g.join('');
  }

}
