# WebView with Lower Tab Menu  [![Travis CI Status](https://travis-ci.org/odapplications/WebView-with-Lower-Tab-Menu.svg?branch=master)](https://travis-ci.org/odapplications/WebView-with-Lower-Tab-Menu) [![npm version](https://badge.fury.io/js/odapps.svg)](https://badge.fury.io/js/odapps) [![OD Apps](https://img.shields.io/badge/dev-OD%20Apps-orange.svg)](https://odapps.org)

 
This project was made possible by the developers at OD Applications. Easily turn any website into an application. This is a great application for responsive websites, m.websites.com, and other dedicated mobile first websites.


### Introduction
Before you begin the installation of this react-native project please be sure you have the following already installed.

- Python v2.7
- Node.js v6
- xCode (mac users) or Android Studio (windows users). 

Note: To build iOS Applications with this package you must own a mac or install Mac oSX via VmWare or an alternative source.


## Installing the Project
There are many methods of installing the WebView with Lower Tab Menu project. We recommend using the first method for beginner users. Granted if you are fimarilar with React Native, you can always fork this project to your own. Keep in mind this package and others by OD Apps are updated regularly.

Please download the zip package file and extract to your desktop.

or

Download using
```
npm install odapps
```


### Guide for Installing WebView with Lower Tab Menu
To get started open the Terminal / Command Promt and enter the following codes one by one.

- Create a new react-native project.
```
react-native init appname
```

- Enter the directory.
```
cd appname
```

- Force react-native install at 0.43.3
```
npm i -S react-native@0.43.3
```

- Lets re-generate the iOS & Android Folders to use the above react-native.
```
react-native upgrade
```

- Remove the following folders from WebView with Lower Tab Menu
```
ios & android
```

- Replace the following folders from created appname project to WebView with Lower Tab Menu
```
ios & android
```

- Edit the following files and replace the "odapps" with your "appname"
```
index.ios.js
index.android.js
app.js
package.json
```

- Replace your website URL in the following files
```
index.ios.js
index.android.js
```

- Run the following commands to test your application

iOS (iPhone)
```
cd desktop/WebView-with-Lower-Tab-Menu  (or wherever it is located)
react-native run-ios
```

Android
```
cd desktop/WebView-with-Lower-Tab-Menu  (or wherever it is located)
react-native run-android
```


That's it! Want to learn more about React Native? - https://facebook.github.io/react-native/
