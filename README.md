## Build Setup

``` bash
# install dependencies
$ yarn install

# serve in development mode with hot reload at localhost:3000
$ yarn start

# serve in production mode with hot reload at localhost:3000
$ yarn prod

# generate static project
$ yarn run generate
```

## !Attention!
* At the very first build you might face error like there is no index page, don't worry, stop the dev server and run it again - everything will be fine
* **Dynamic image src bug. Thanks to Bemto**: this will NOT work: ```+e.IMG.image(:src="imagePathVariable")``` bemto converts image path to an emty base64 image. Don't use ```+e``` or ```+b``` bemto syntax with ```img``` tag with dynamic src. Use normal pug syntax instead ```IMG.image(:src="imagePathVariable" class="blockName__image")```
