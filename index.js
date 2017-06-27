"use strict";
{
  class UTF8Str extends String {
    constructor( s = '' ) {
      super(s);
      const b = bytes(s); 
      const blen = b.length;
      const syms = symbols(s);
      const slen = syms.length;

      Object.assign( this, {
        bytes: b,
        byteLength: blen,
        symbols: syms,
        symLength: slen
      });
    }
  }

  try{ module.exports = UTF8Str; }catch(e) { Object.assign( self, { UTF8Str } ); }


  function symbols(str) {
    return Array.from(str);
  }

  function symbytes( sym ) {
    const utf8 = unescape(encodeURIComponent(sym)).split('');
    return Uint8Array.from( utf8.map( c => c.codePointAt(0) ) );
  }

  function bytes(str) {
    const bs = symbols(str).reduce(
      (b,s) => (b.push(...symbytes(s)), b),
      []
    );
    return Uint8Array.from(bs);
  }

  function test(t) {
    console.log(t);
    console.log( new UTF8Str(t));
    console.log(Array.from(bytes(t)).map( b => b.toString(16) ));
  }

  function test_basics() {
    test("😂😌");
    test("Foo © bar 𝌆 baz ☃ qux");;
  }
}
