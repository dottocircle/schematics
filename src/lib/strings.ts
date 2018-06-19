/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const STRING_UNDERSCORE_REGEXP_1 = /([a-z\d])([A-Z]+)/g;
const STRING_UNDERSCORE_REGEXP_2 = /-|\s+/g;

/**
 * Converts a camelized string into all lower case separated by underscores.
 *
 ```javascript
 spaced('innerHTML');         // 'inner html'
 spaced('action_name');       // 'action name'
 spaced('css-class-name');    // 'css class name'
 spaced('my favorite items'); // 'my favorite items'
 ```
 */

export function spaced(str: string): string {
  return str
    .replace(STRING_UNDERSCORE_REGEXP_1, '$1 $2')
    .replace(STRING_UNDERSCORE_REGEXP_2, ' ');
}
