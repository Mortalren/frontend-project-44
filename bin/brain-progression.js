#!/usr/bin/env node
import { progressionGame, greetingMessage } from '../index.js';

console.log('What number is missing in the progression?');

progressionGame(greetingMessage());
