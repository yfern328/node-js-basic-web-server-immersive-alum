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

Now we need to intall the other dependencies. You should be familiar with this process from the previous [npm lab](https://github.com/learn-co-curriculum/node-js-npm-lab), so let's see if you can do it on your own. Remember that the tests in the `/tests` serve as a kind of specification for this project (a blueprint in a way). Look there to see what packages you may need to install.

## Hello, World!

Now, as tradition demands, we should set up a "Hello, World" server don't you think? This will help introduce you to the basic pattern that we will use throughout the lab in order to build our server. As you may have noticed already, there is a test written for this use case, and naturally it is failing at the moment:

![](http://ezmiller.s3.amazonaws.com/public/flatiron-imgs/hello_world_test.png)

Because tests serve as a spec for the code we need to write (this is why they are so helpful!), we can see from the title of the test what it is we need to do: "GET request to / respond with 'Hello, World!'. We need to write code such that our server can accept a request of method "GET" to the root path `/` and then respond with a "Hello, World!" This shouldn't be too hard!

Let's see if you can get this test to work. Since we're just getting started here, we've placed some boilerplate code in the project to get you going in the right direction. Take a look at the `server.js` file. This will be the file that contains our server logic. Looking in this file you should see a snippet like this:

```
const router = new Router();

router.get('/', (request, response) => {
  // A good place to start!
  response.end();
});
```

So what do we have here? First of all, `const router = new Router()` instantiates our "router." You will encounter this term "router" frequently in the world of web applications. Essentially, a router is the piece of a web application that matches certain url requests to the write pieces of code, sometimes called "business logic", which then are responsible for returning the desired result. 

> Note: In our code we are using a pre-written router module for node. You installed that package in the setup stage of this lab, and it is imported in the `server.js` file with the command: `const Router = require('router')`. There are a great many such router modules; we are using [this one](https://github.com/pillarjs/router), which has been extracted fromt he popular [Express.js](http://expressjs.com/) web server framework for Node. We will be learning about Express later in this unit!

The code snippet above, then, sets up a "route" from a request to the server root path, i.e. `http://localhost:3000/` to the code that is contained within the function that is passed to the router's `get` method. There's a lot to talk about here actually. 

First, notice that the method passed into `get` (written with the ES6 "fat arrow" syntax) takes two arguments: `request` and `response`. These are very important objects and you will be using them a lot when you work with Node. For now, what you should know is that the `request` object contains information as well as method relating to the "request" that has come in from the client. The `response` object, as you may have guessed, contains information and methods about how the server's reponse.

Moving on, do you notice anything familiar about this function that is pased into the `get` method? Do you recognize this pattern?

That's right. It's a callback! The asynchronous character of the process may not have been immediately obvious to you, as the logic is enclosed within the router, but it's the same idea that was explained in the preivous lesson: The server is waiting for a GET request to come in to the path `/`. When will that request come in? No one knows! It will happen at some indeterminate point in the future. And when it does, the `get` method will call the callback function that we supply, and which encapsulates the logic about how our program should proceed when such a request comes in.

So, keeping this in mind how should our program proceed? At the moment, the only code inside the callback function is a comment directed at you dear learner, and a call to a method `end` on the `response` object. This is an important function. Let's see if you can modify the code inside in this callback to get the test for this route in our testing file (`test/server_test.js`) to pass.

> In order to get oriented here, it might be a good idea to take a look at the node documentation for the `end` method on the `response` object. Also, if you look at the test, you'll notice that the test checks to see if the `Content-Type` "Headers", which signal to the browser what kind of data has been set appropriately. In this case, we are just sending some text so we can use the type "plain/text".

## POSTing a Message

## Retreiving a Message

## Getting all the Messages

## Encryption

