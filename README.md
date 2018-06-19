# Schematics

This repository is a Schematic implementation for Front End Angular Applications and serves as a generator for creating app Feature, ngrx Store and Reducer.

## How to use?

you have to install `@elitecareer/schematics` , using

```
npm install -g @elitecareer/schematics
npm install -g @angular-devkit/schematics-cli
```

### generate feature

```
schematics @elitecareer/schematics:feature --name=YourFeatureName
```

### generate store

```
schematics @elitecareer/schematics:store --featureName=YourFeatureName
```

### generate reducer

```
schematics @elitecareer/schematics:reducer --name=YourReducerName --featureName=YourFeatureName
```

## Set @elitecareer/schematics as default collection
If you set @elitecareer/schematics as default collection in your angular cli project then you can use `ng generate` command instead of `schematics @elitecareer/schematics`. To do that

```
ng config cli.defaultCollection @elitecareer/schematics
```

## How to run from this repo (localy)

### clone

```
git clone https://github.com/elitecareer/schematics.git
```

### install

```
cd schematics
npm install
```

### run build

```
npm run build
```

### cd to to your angular app

```
cd your/app
```

### link local schematics

```
npm link ./elitecareer/schematics/project/path
```

## Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

## Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
