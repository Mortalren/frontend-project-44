#!/usr/bin/env node
import { getPrime, greetingMessage } from '../index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

getPrime(greetingMessage());
