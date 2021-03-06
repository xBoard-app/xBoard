# xBoard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f493c855556648c7ae95e69b0036e400)](https://app.codacy.com/manual/mareksl/xBoard?utm_source=github.com&utm_medium=referral&utm_content=mareksl/xBoard&utm_campaign=Badge_Grade_Dashboard)
[![buddy pipeline](https://app.buddy.works/xboard-app/xboard/pipelines/pipeline/236598/badge.svg?token=d10f19cbcc47131ed692d978ecce2d09eac332f41ee1923c01569ba19a511fdd "buddy pipeline")](https://app.buddy.works/xboard-app/xboard/pipelines/pipeline/236598)

Project team management board for efficient allocation of developer resources to ongoing and upcoming projects

## Table of contents

- [Getting started](#getting-started)
  - [Setup](#setup)
  - [Compiling protocol buffers](#compiling-protocol-buffers)
- [Running tests](#running-tests)
  - [Unit tests](#unit-tests)
  - [E2E Tests](#e2e-tests)
    - [Cypress](#cypress)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Setup

To run this project on a local machine, simply run

```sh
docker-compose up --build
```

from the project's root directory.

### Compiling protocol buffers

Each change to the _.proto_ files in the services requires a compilation of the protocol buffers into Angular code.

Instructions:

1. Install `protoc` according to [these instructions](https://github.com/protocolbuffers/protobuf#protocol-compiler-installation).
2. Run `yarn proto:generate` in frontend folder.

## Running tests

### Unit tests

To run tests locally, run

```
yarn test
```

in the frontend or any of the services directories.

### E2E Tests

#### Cypress

- `yarn cy:run`
- `yarn cy:open`

## Deployment

TBD

## Built With

- [Nest.js](https://nestjs.com) on the backend, using microservices
- [gRPC](https://grpc.io/) for service and client communication
- [Angular](https://angular.io/) on the frontend
- [Envoy](https://www.envoyproxy.io/) proxy
- [ngx-grpc](https://github.com/ngx-grpc/core)

## Contributing

TBD

## License

This project is licensed under the terms of the MIT license.
