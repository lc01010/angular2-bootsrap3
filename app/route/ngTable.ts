//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {demotable} from '../pages/ngTable/demo-table';
import { HTTP_PROVIDERS } from 'angular2/http';
bootstrap(demotable, [HTTP_PROVIDERS])
  .catch(err => console.error(err));