******************************************************************************
*** PLEASE READ BEFORE INSTALLING PACKAGES ***
******************************************************************************

Use 'npm install' to get packages. Then when you run 'expo start' it should 
launch. It wil give a warning about 'react-native-svg' being the wrong version
but it is fine. This is casue Expo doesn't have the latest verison yet. The
version that is needed is '9.13.6'. If you get the following error when 
running: 

   expo unable to resolve './elements/Marker.....

Manually set 'react-native-svg': "~9.13.6" in the package.json

See https://stackoverflow.com/questions/58339195/unable-to-resolve-elements-marker-can-somebody-tell-me-whats-wrong

******************************************************************************
*** Hard Coded Fix for Yellow Boxes ***
******************************************************************************

To sort this out you need to hard code the value, 
increase the value of the variable MAX_TIMER_DURATION_MS. 

Here are the steps:
- Go to node_modules/react-native/Libraries/Core/Timer/JSTimers.js
- Look for the variable MAX_TIMER_DURATION_MS
- Change 60 * 1000 to 10000 * 1000
- Save the changes and re-build your app.

******************************************************************************
******************************************************************************


******************************************************************************
*** TODO ***
******************************************************************************

Migrate expo-google-app-auth to expo-google-sign-in as it is now depreciated
See: https://docs.expo.io/versions/latest/sdk/google-sign-in/

******************************************************************************
******************************************************************************