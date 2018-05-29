/* global describe, it */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import { isArray, isObject, isCallable, isString, uniqueValues } from './helper';

describe('Utils', () => {
    describe('#isArray()', () => {
        it('should return true for array value', () => {
            expect(isArray([])).to.be.true;
            expect(isArray([1, 2])).to.be.true;
        });

        it('should return false for non-array values', () => {
            expect(isArray(8)).to.be.false;
            expect(isArray(undefined)).to.be.false;
        });
    });

    describe('#isObject()', () => {
        it('should return true for object value', () => {
            expect(isObject({})).to.be.true;
            expect(isObject([1, 2])).to.be.true;
            expect(isObject(() => {})).to.be.true;
        });

        it('should return false for non-object values', () => {
            expect(isObject(8)).to.be.false;
            expect(isObject(undefined)).to.be.false;
        });
    });

    describe('#isCallable()', () => {
        it('should return true for function value', () => {
            expect(isCallable(() => {})).to.be.true;
            expect(isCallable(Object)).to.be.true;
        });

        it('should return false for non-function values', () => {
            expect(isCallable(8)).to.be.false;
            expect(isCallable(undefined)).to.be.false;
        });
    });

    describe('#isString()', () => {
        it('should return true for string value', () => {
            expect(isString('abc')).to.be.true;
        });

        it('should return false for non-string values', () => {
            expect(isString(8)).to.be.false;
            expect(isString(Object)).to.be.false;
        });
    });

    describe('#uniqueValues()', () => {
        it('should return unique values from input array', () => {
            expect(uniqueValues([1, 2, 1, 3]).sort()).to.deep.equal([1, 2, 3]);
            expect(uniqueValues([])).to.deep.equal([]);
        });
    });
});
