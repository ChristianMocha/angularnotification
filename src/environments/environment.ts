// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyA6ZmAKghg72R8M81e8-GIaVuOl27i-Emc',
    authDomain: 'appbuffett.firebaseapp.com',
    projectId: 'appbuffett',
    storageBucket: 'appbuffett.appspot.com',
    messagingSenderId: '800324608778',
    appId: '1:800324608778:web:1126964eb5cebce69150f3',
    measurementId: '${config.measurementId}',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
