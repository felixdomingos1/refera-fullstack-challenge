
![Logo of the project](https://refera.com.br/wp-content/uploads/2021/07/logo-footer-2-min.png)


## Refera FullStack Challenge
The objective of this project is to create an 
application to manage Refera's maintenance orders


## Technology, Architectures and Standards

Here are the technologies used in this project.

* Nodejs
* Mongo Atlas
* Nextjs
* TypeScript
* TDD
* Styled-Components
* SOLID


## Services Used

* Github
* MongoDb Atlas

<h3> Download & Installation </h3>

The project contains two folders, one on the front and one on the back.

To run the back:

```shell
$ cd refera-back

$ npm i || yarn add

$ npm dev || yarn dev
```

To run the back:

```shell
$ cd refera-front

$ npm i || yarn add

$ npm dev || yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### - When you access, you will see the Home page <3

![Homepage image](https://github.com/jgoncalves8080/refera-fullstack-challenge/blob/main/refera-front/src/assets/refera-front.png)


## Features

The main features of the application are:
 - View Registered Orders.
 - Register New Order


## Production Environment

How would I structure the database for Real Estate?

I would create an entity called ``entity`` and another ``typeEntity``, to store the data of both the company and the real estate company. What would distinguish one from the other would be the typeEntity (which would contain the values ``Real Estate`` and ``Company``)

To save its contacts, it created two new entities ``contact`` and ``contact`` type).
Contact type would be ``email``, ``phone``,  and the contact would contain information related to the type.

Given the case that an entity (company or real estate) may have more than one contact, a new table would appear, which would contain the id of the entity and the contact.

## Port resources add in api

* Pagination
* Authentication
* More test coverage (TDD)
* Documentation (with Swagger)

## Resources to add on the front

* Authentication
* Filters in the order listing
* Input for order search
* Modal to view order details
* More test coverage (TDD)

## What would the front end authentication process look like?

* Integrate with NextAuth && OAuth2.0 for authentication with social networks.
* Generate token on login (JWT).
* Intercept the token in the header of all requests, if already authenticated.


  ## Authors

  * **José Gonçalves** 
