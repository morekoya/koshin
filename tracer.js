const Tracer = require('tracer');

// format tracer logger
const Logger = Tracer.colorConsole({
  format: [
    '[{{timestamp}}] [{{title}}] {{message}} (in {{file}}:{{line}})',
    {
      error: '[{{timestamp}}] [{{title}}] {{message}} ' +
      '(in [{{file}}]:[{{line}}])\nCall Stack:\n[{{stack}}]'
    }
  ]
});

module.exports = Logger;
