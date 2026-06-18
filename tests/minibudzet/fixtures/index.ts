import { mergeTests } from '@playwright/test';
import { test as pageTest } from './page.fixtures';

export const test = mergeTests(pageTest);

export { expect } from '@playwright/test';