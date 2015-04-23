// booleans
console.log(xdr.Bool.fromXDR([0,0,0,0])); // returns false
console.log(xdr.Bool.fromXDR([0,0,0,1])); // returns true

// the inverse of `fromXDR` is `toXDR`, which returns a Buffer
console.log(xdr.Bool.toXDR(true)); // returns new Buffer([0,0,0,1])

// XDR ints and unsigned ints can be safely represented as
// a javascript number

console.log(xdr.Int.fromXDR([0xFF,0xFF,0xFF,0xFF])); // returns -1
console.log(xdr.UnsignedInt.fromXDR([0xFF,0xFF,0xFF,0xFF])); // returns 4294967295

// XDR Hypers, however, cannot be safely represented in the 53-bits
// of precision we get with javascript numbers, and so we have a custom class
// for those numbers.  Hyper and UnsignedHyper both use
//https://www.npmjs.com/package/long to represent the 64-bit numbers

var result = xdr.Hyper.fromXDR([0,0,0,0,0,0,0,0]); // returns an instance of xdr.Hyper

// convert the hyper to a string
console.log(result.toString()); // return '0'

// math!
var ten = result.add(10)
console.log(ten.toInt());

var minusone = result.subtract(1)
console.log(minusone.toInt());

// construct a number from a string
var big = xdr.Hyper.fromString("1099511627776")

// encode the hyper back into xdr
var toXDR = big.toXDR() // <Buffer 00 00 01 00 00 00 00 00>
console.log(toXDR);