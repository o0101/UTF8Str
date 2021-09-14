# UTF8Str ![npm](https://img.shields.io/npm/dt/utf8str)

Unicode-aware JavaScript String class. Bring back the old days when a char was a char!

All the String methods plus byteLength, bytes array and more.

```shell
$ npm i --save utf8str
```

## Why?

JavaScript Strings have different lengths depending on whether you are counting bytes, characters, or something else.

UTF8Str provides two extra length properties:

```js
x = UTF8Str("Foo © bar 𝌆 baz ☃ qux");
x.length // 22 
x.byteLength // 27 (correct!)
x.charLength // 21 (correct!)
```

JavaScript has a number of ways to access the building blocks of the String:

- `charAt(index)`
- `charCodeAt(index)`
- `codePointAt(index)`

Which all can return different results depending on what the String contains. This is confusing. 

UTF8Str provides the following two simpler slots for accessing the String's contents:

```js
x.chars // [ 'F','o','o',' ','©',' ','b','a','r',' ','𝌆'' ','b','a','z',' ','☃',' ','q','u','x' ]
x.bytes // Uint8Array [ 70, 111, 111, 32, 194, 169, 32, 98, 97, 114, 32, 240, 157, 140, 134, 32, 98, 97, 122, 32, 226, 152, 131, 32, 113, 117, 120 ]
```

So UTF8Str is a regular JavaScript String with the following additional slots. 

```js
x.bytes
x.byteLength
x.chars
x.charLength
```

## Why ?

Personally I wanted a way to access the bytes of Strings, rather than their values. 

## What doesn't work?

None of the regular `String` methods have been coverted to work with Unicode characters instead of with parts of Unicode characters. Maybe this will be on the roadmap.

## Roadmap

- Add a static method `.fromBytes` to create a UTF8 String from an array of byte values.
- Add a static method `.fromUTF8Binary` to create a UTF8 String from a String of UTF8 byte values that have not been coalesced into codepoints.

## Aim

The *aim* of UTF8Str is as follows:

UTF8Str aims to be a lightweight way to do a few useful things with String bytes and characters, in a way that respects Unicode, in the smallest amount of code, with the greatest amount of clarity possible. Efficiency is not an aim. Simple, maintainable code that does something useful is the aim. If efficiency happens it's a bonus. 

Also, UTF8Str does not aim to be *the ultimate final say on the rarified development of the best possible names and conceptual models and levels of abstraction for concepts that an ideal JavaScript String class ought to have*. I shall leave such deliberations to the TC39 working group to fight out, and trust they shall reveal to us their Great Mysteries in more precise detail over time.

## Contributing

Open an issue or submit a pull request. Where to start?

PR ideas:

- implement `.fromBytes` :heavy_check_mark: (done in 1.0.2)
- implement `.fromUTF8Binary` :heavy_check_mark: (done 1.0.2)
- implement the String methods, using a Proxy that wraps the constructed instance (see, for examples, [Uint1Array](https://github.com/dosaygo-coder-0/Uint1Array), to intercept calls to String bracket-accessor, and respect Unicode character boundaries, instead of not doing so. 

## But isn't JavaScript's String "good enough"?

It is good. And much progress has been made. JavaScript progress has seen the addition of methods to return and create from the full Unicode codepoint as well as the useful String iterator that does return the Unicode characters and does not break them up. 

Still there is no baked in way to get byte length or the character length as part of the native String class, and these new additions simply make the code of UTF8Str simpler, clearer and more concise. 


