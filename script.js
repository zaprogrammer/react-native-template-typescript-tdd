#!/usr/bin/env node

const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

/**
 * Use Yarn if available, it's much faster than the npm client.
 * Return the version of yarn installed on the system, null if yarn is not available.
 */
function getYarnVersionIfAvailable() {
  let yarnVersion;
  try {
    // execSync returns a Buffer -> convert to string
    yarnVersion = (execSync('yarn --version', {
      stdio: [0, 'pipe', 'ignore'],
    }).toString() || '').trim();
  } catch (error) {
    return null;
  }
  return yarnVersion;
}

function installDevDependencies() {
    console.log('Adding dev dependencies for the project...');
  
    if (getYarnVersionIfAvailable()) {
        execSync(`yarn install`, { stdio: 'inherit' });
    } else {
        execSync(`npm install`);
    }
  }
  
  installDevDependencies();
  createScripts();

console.log("This is post init script");
