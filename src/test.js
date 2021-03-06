// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const tools = require('..');

// Assignments
const util = tools.util;
const color = tools.color;
const logger = tools.logger;
const hastebin = tools.hastebin;

/* Util Utilities */

logger.log({ tag: 'OBJECT?' }, util.isObject(new Array()));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: false

logger.log({ tag: 'OBJECT?' }, util.isObject(new Object()));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: true

logger.log({ tag: 'OBJECT?' }, util.isObject([]));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: false

logger.log({ tag: 'OBJECT?' }, util.isObject({}));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: true

logger.log({ tag: 'RANDOM ITEM' }, util.randomItem(['cat', 'dog', 'fish']));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: dog

logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: 7

/* Color Manager */

logger.log({ tag: 'STYLE' }, color.style({ background: 'gray' }, 'styled background'), 'normal background');
// Console > [20/02/2020 - 00:00:00 | STYLE]: styled background normal background

logger.log({ tag: 'STYLE' }, color.style({ color: 'red' }, 'styled color'), 'normal color');
// Console > [20/02/2020 - 00:00:00 | STYLE]: styled color normal color

logger.log({ tag: 'STYLE' }, color.style({ style: 'bold' }, 'styled style'), 'normal style');
// Console > [20/02/2020 - 00:00:00 | STYLE]: styled style normal style

logger.log({ tag: 'RAINBOW' }, color.rainbow('rainbow styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RAINBOW]: rainbow styled-text normal text

logger.log({ tag: 'RANDOM' }, color.random('random styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RANDOM]: random styled-text normal text

logger.log({ tag: 'ZABRA' }, color.zabra('zabra styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | ZABRA]: zabra styled-text zabra styled-text normal text

/* Logger Manager */

const settings = { // Support custom log options
  background: 'black',
  color: 'blue',
  style: 'bold',
  type: 'info',
  time: true,
  tag: 'Black & Blue'
};

logger.log('content');
// Console > [20/02/2020 - 00:00:00 | LOG]: content

logger.log(settings, 'content');
// Console > [20/02/2020 - 00:00:00 | Black & Blue]: content

logger.log({ time: false }, 'log', 'no time');
// Console > [LOG]: log no time

logger.log({ time: 'MM-DD-YY' }, 'log', 'custom time format');
// Console > [02-20-2020 | LOG]: log custom time format

logger.log({ tag: false }, 'log', 'no tag');
// Console > [20/02/2020 - 00:00:00]: log no tag

logger.log({ tag: 'CUSTOM TAG' }, 'log', 'custom tag');
// Console > [20/02/2020 - 00:00:00 | CUSTOM TAG]: log custom tag

logger.log({ time: false, tag: false }, 'log', 'not tag', 'no time');
// Console > log not tag no time

logger // Support chain logging
  .log({ tag: 'FIRST LOG' }, 'First content')
  .log({ tag: 'SECOND LOG' }, 'Second content')
  .log({ tag: 'THIRD LOG' }, 'Third content');
/* 
  Console > [20/02/2020 - 00:00:00 | FIRST LOG]: First content
  Console > [20/02/2020 - 00:00:00 | SECOND LOG]: Second content
  Console > [20/02/2020 - 00:00:00 | THIRD LOG]: Third content
*/

/* Hastebin Client */

hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
  .then(async postRes => {
    logger.log({ background: 'black', color: 'green', type: 'log', tag: 'POST RES' }, postRes);
    // Console > [20/02/2020 - 00:00:00 | POST RES]: HastebinObject{}

    await hastebin.get(postRes.link)
      .then(getRes => {
        logger.log({ background: 'black', color: 'green', type: 'log', tag: 'GET RES' }, getRes);
        // Console > [20/02/2020 - 00:00:00 | GET RES]: HastebinObject{}
      })
      .catch(getErr => {
        logger.log({ background: 'black', color: 'red', type: 'error', tag: 'GET ERROR' }, getErr);
        // Console > [20/02/2020 - 00:00:00 | GET ERROR]: Get Error
      });
  })
  .catch(postErr => {
    logger.log({ background: 'black', color: 'red', type: 'error', tag: 'POST ERROR' }, postErr);
    // Console > [20/02/2020 - 00:00:00 | POST ERROR]: Post Error
  });
