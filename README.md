# Image Processing API

This is an API that uses the Sharp library to resize images with user-entered size parameters and developed using TypeScript.

## Scripts

To start the server

```
npm run start
```

To create the build version

```
npm run build
```

To run Prettier

```
npm run prettier
```

To run ESLint

```
npm run lint
```

To run Jasmine

```
npm run test
```

## Endpoints

### - The processor endpoint

This endpoint takes in URL arguments and sends back the requested image with the size parameters provided in the URL.

example: **<localhost:3000/processor?filename=fjord&width=200&height=200>**

**where the parameters work as follows:**

**filename** can be [ encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica ]

**width and height** can only be positive numbers and will default to 200 if left empty
