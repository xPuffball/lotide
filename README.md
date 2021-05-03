# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @puffball/lotide`

**Require it:**

`const _ = require('@puffball/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(Array)`: Returns the first element of the array
* `tail(Array)`: Returns the array excluding the first element
* `middle(Array)`: Returns the middle value of the array, or the middle 2 if the array length is even, or [] if there is no middle element
* `assertArraysEqual(Array, Array)`: Prints if two Arrays given are equal or not - along with their values
* `assertEqual(Var, Var)`: Prints if two Values given are equal or not (does not work for non-primitive types!)
* `eqArrays(Arr, Arr)`: Returns a boolean (true or false) that reflects if two arrays are the same.