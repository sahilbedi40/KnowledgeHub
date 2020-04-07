// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAwo4F3ge6KzYL4hnkJFJefaPc4HiHdNco",
    authDomain: "knowledgehubdev.firebaseapp.com",
    databaseURL: "https://knowledgehubdev.firebaseio.com",
    projectId: "knowledgehubdev",
    storageBucket: "knowledgehubdev.appspot.com",
    messagingSenderId: "158239362379",
    appId: "1:158239362379:web:1b3ca2a06bbbb67763acce"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
