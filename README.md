# Instant OpenHIE Config Importer

This repo contains the Dockerfile for building the Instant OpenHIE config importer image that is hosted on Docker

The basis of this importer is that it contains the underlying tools needed to execute your import logic.

## Getting started

The example script injects a NodeJS script to start our process as well as a basic config JSON file which we will use in our script. We also inject an environment variable to reference within the NodeJS script.

## Start the import container (docker-compose)

To run the container execute the below command:

```sh
docker-compose up
```

## Add your own config scripts

Drop your custom script and files into the `volume` directory which will be injected into the container at runtime. The scripts and files injected into the container can be executed based on the specified logic
