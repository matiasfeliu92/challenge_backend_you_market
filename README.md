# Challenge Backend YouMarket

This application consists of a rest api, with an endpoint that verifies if a received nucleotide chain is mutant or not. For that, an algorithm is used that receives a string that is later converted into a matrix and the main diagonals are analyzed, checking for mutations.

## Instalation

In order to download the project, you have to clone the github repository, executing the following command in the terminal:

```
git clone https://github.com/matiasfeliu92/challenge_backend_you_market.git
```

Then you have to access the project folder by executing the following command in the terminal:

```
cd challenge_backend_you_market
```

Then you have to install the dependencies contained in the package.json file by executing the following command in the terminal:

```
npm install
```

Finally to execute the project we use the following command:

```
npm run dev
```

## Routes

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/has-mutation` |    POST    | Returns status 200 if the receive chain has mutation or status 403 if not |