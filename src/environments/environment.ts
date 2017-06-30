// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import * as config from './firebase.dbconfig.json';
/**
 * NOTE: Never commit the firebase config details
 * to public repos. Else consequences be in
 * accordance
 */
export const environment = {
  production: false,
  firebase: config
};
