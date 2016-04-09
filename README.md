Build a Basic Web Server
========================

## Overview

In this lab, we are going to build a simple node server that can post a new message and resrespond with a list of messages.

## Getting Started

As usualy, our development process here will follow the technique of test driven development. So you should begin by running the command: `npm test`. You should see an error becuase we've not yet installed the `mocha` testing library. Let's do that now:

```
npm install mocha --save-dev
npm install mocha-multi --save-dev
npm install chai --save-dev
```

Now when you run `npm test`, you should see that the tests are running, and one test for "has the correct devDepenencies" should be passing.

At this we need to intall the other necessary depednencies. You should be familiar with this process from the previous [npm lab](https://github.com/learn-co-curriculum/node-js-npm-lab), so let's see if you can do it on your own. Remember that the tests in the `/tests` directory service as a specification for this project. Look there to see what packages you may need to install.

Steps:
* Get dependencies setup
* Create a server file: server.js
* Do a hello world server?
* Get user to pass test such that the server will return an empty message array when called at GET /messages
* Set up a simple hello world server (test for this)??
