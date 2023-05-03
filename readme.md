# Install
- git clone git@github.com:exsanik/iosForwarder.git
- cd iosForwarder
- npm install
- firebase login
- firebase projects:create
    - enter any unique name e.g. firebaseiosforwarder
- go to .firebaserc and set projects.staging as unique project from prev step
- firebase apps:create
    - Please choose the platform of the app: ? Select Web
    - You can run this command to print out your new app's Google Services config:
        - Run output command smth like firebase apps:sdkconfig WEB .....
    - Outputs:
    ```
    firebase.initializeApp({
        "projectId": "....",
        "appId": "....",
        "storageBucket": "....",
        "apiKey": "....",
        "authDomain": "...",
        "messagingSenderId": "..."
    });
    ```
    - Copy everything between `firebase.initializeApp(`**<copy object>**`);` and paste in firebase.config.json
- open firebase project in web and create firebase database
- in app.config.json update link to ios app
- npm run deploy
