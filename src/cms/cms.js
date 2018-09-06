import CMS, { init } from 'netlify-cms';
import EditorYoutube from './components/EditorYoutube';
import FileSystemBackend from './components/FileSystemBackend';

// console.log('CMS.config', config)
// rewrite config to use file-system instead
if (process.env.NODE_ENV === 'development') {
  // override certain ascpects of the config:
  window.CMS_ENV = 'development_overrides';
  CMS.registerBackend('file-system', FileSystemBackend);
}

CMS.registerEditorComponent(EditorYoutube);

// do manual init (accepts a config object)
// init({ config: {...} }) that would be merged with
// the config.yml settings, but this doesn't currently work
// as expected. instead setting window.CMS_ENV and including
// development_overrides in config.yml
init();

// another option would be to render the config as json and
// add it to the page via:
// window.CMS_CONFIG = { /* JSON */ }

// const fs = require('fs')
// const yaml = require('js-yaml')
// function getConfig() {
//   const file = `${__dirname}/static/admin/config.yml`
//   obj = yaml.load(fs.readFileSync(file, { encoding: 'utf-8' }))
//   // override obj as neccessary
//   window.CMS_CONFIG = JSON.stringify(obj);
// }
