// main.js

import { setupMSO } from './observerSetup.js';
import { msoConfigs } from './configs.js'; 

document.addEventListener('DOMContentLoaded', () => {
  // Para cada ID de MSO nas chaves de msoConfigs
  Object.keys(msoConfigs).forEach(setupMSO);
});