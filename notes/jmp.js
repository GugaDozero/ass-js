"use strict";
var code_1 = require('../x86/x64/code');
var code = code_1.Code.create();
var start = code.getStartLabel();
// code.mov(o.rax, o.rax);
var insn = code.jmp(start);
console.log(code.toString());
// console.log(insn);
// var insn = code.jmp(0);
// code.mov(o.rbx, o.rbx);
// console.log(code.toString());
// code.compile();
// console.log(code.toString());
// console.log(insn);