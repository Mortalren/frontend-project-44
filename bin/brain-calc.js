#!/usr/bin/env node
import { generateRandomExpression, greetingMessage } from '../index.js';

console.log('What is the result of the expression?');

generateRandomExpression(greetingMessage());
