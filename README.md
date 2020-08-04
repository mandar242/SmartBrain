# SmartBrain - Face Recognition App
The front-end part of smart-brain, a web app that detects human faces in a image provided with the image url.

- Front-end web development using [React.js](https://reactjs.org/), HTML, CSS.

- The full version of the app is deployed [here](https://smartbrain-12.herokuapp.com/).

- You can find the code for backend and server [here](https://github.com/sharvarikhedkar/SmartBrain-api).

## Prerequisites 

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.


## How to run on your local computer
```

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/mandar242/SmartBrain.git

# Go into the repository
$ cd SmartBrain

# Remove current origin repository
$ git remote remove origin

```

Then you can install the dependencies using NPM and start the development server:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

- Folder Structure
```
smart-brain
├── README.md
├── package.json
├── package-lock.json
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
└── src
    ├── index.css
    ├── index.js
    ├── ServiceWorker.js
    ├── setupTests.js
    ├── App.css
    ├── App.js
    ├── App.test.js   
    └── components
        ├── Signin
        │   └── Signin.js
        ├── Register
        │   └── Register.js
        ├── Navigation
        │   └── Navigation.js
        ├── Logo
        │   ├── Logo.js
        │   ├── Logo.css
        │   └── brain.png                
        ├── Rank
        │   └── Rank.js        
        ├── ImageLinkForm
        │   ├── ImageLinkForm.js
        │   └── ImageLinkForm.css                               
        └── FaceRecognition
            ├── FaceRecognition.js
            └── FaceRecognition.css          
```


