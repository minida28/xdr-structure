# JavaScript implementetion of XDR (RFC 4506) running in browser

XDR: External Data Representation Standard (see [RFC 4506](http://tools.ietf.org/html/rfc4506.html))

Built with browserify from [js-xdr](https://github.com/stellar/js-xdr) project.

## Install

Install **xdr-structure** manually, or from bower:

```bash
$ bower install https://github.com/pbakondy/xdr-structure
```

Include **xdr-structure.min.js** in your HTML file.

```html
<script src="bower_components/xdr-structure/dist/xdr-structure.min.js"></script>
```

## Usage

You can use the global **xdr** object to encode/decode data.

The type of encoding result (and decode input) is [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

## How it's made

The original js-xdr is built for node.js environment.

[Browserify](http://browserify.org/) lets you require('modules') in the browser by bundling up all of your dependencies.

The current package is build on the latest js-xdr release: 0.0.3.

How could you rebuild the distribution files?

```bash
$ npm install
$ npm run clean
$ npm run build
```

Recommended to read: [How to Use npm as a Build Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
