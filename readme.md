# Testing requirejs with modules in other domains

## How to run

You first need to compile the typescript. 

```
$ cd moduleTS
$ tsc
```

Then you need to run multiple http-servers

```
$ npm install http-server -g

# from root repo directory
$ http-server 

# run another in the moduleTS directory
$ cd moduleTS
$ http-server -p 8081 --cors
```