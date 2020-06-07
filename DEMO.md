# Running the demo

The following steps can be used to test the Scully demos.

Terminal 1:
```
npx nx serve scully
```

Terminal 2:
```
npx nx build scully --prod
npx scully --scanRoutes --configFile .scully/scully.scully.config.js
```
