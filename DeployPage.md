# Deploying Github Pages

## Install gh-pages
### $ npm i gh-pages 

package.json

```
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
  + "deploy" : "gh-pages -d build",
  + "predeploy" : "npm run build"
  },
  + "homepage" : "https://username.github.io/reponame"
}
```

### predeploy : before deploy called
### deploy : gh-pages


### $ npm run build

Minimized All js & css !

### $ npm run deploy

then published!