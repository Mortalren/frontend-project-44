#!/usr/bin/env node
import { evenNumber, greetingMessage } from '../index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

evenNumber(greetingMessage());
