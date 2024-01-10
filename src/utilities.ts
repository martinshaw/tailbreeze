/*
All Rights Reserved, (c) 2023 CodeAtlas LTD.

Author: Martin Shaw (developer@martinshaw.co)
File Name: utilities.ts
Created:  2023-08-11T15:06:36.193Z
Modified: 2023-08-11T15:06:36.193Z

Description: description
*/

import _map from 'lodash/map'
import _mapValues from 'lodash/mapValues'
import _isPlainObject from 'lodash/isPlainObject'
import _isArray from 'lodash/isArray'
import _isObject from 'lodash/isObject'

export const makeStylesImportant = (style: {[key: string]: any}) =>
    _mapValuesDeep(
        style,
        (value) => {
            if (typeof value === 'string') value += ' !important';
            return value;
        }
    );

export const makeStylesUnimportant = (style: {[key: string]: any}) =>
    _mapValuesDeep(
        style,
        (value) => {
            if (typeof value === 'string') value = value.split(' !important')[0];
            return value;
        }
    );

export const _mapValuesDeep = (
    value: any,
    mappingFunction: (
        value: any,
        key: string | number | null,
    ) => any,
    key: string | number | null = null,
): any =>
    _isArray(value) ?
        _map(value, (nextValue, nextKey) => _mapValuesDeep(nextValue, mappingFunction, nextKey)) :
        _isPlainObject(value) ?
            _mapValues(value, (nextValue, nextKey) => _mapValuesDeep(nextValue, mappingFunction, nextKey)) :
            _isObject(value) ?
                value :
                mappingFunction(value, key);