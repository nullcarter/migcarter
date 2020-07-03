---
title: JavaScript Constructors at a Glance
description: Introduction to constructors.
author: Miguel Carter
position: Software Engineer
type: article
tags: ['JavaScript', 'OOP', 'Humor']
image: /images/post-1/post-1-post.jpg
heroImage: /images/post-1/post-1-hero.jpg
layout: PostLayout
---

## Introduction
The cool thing about JavaScript is that we don't need to define classes in order to create objects. We can use **literal notation** to create objects when we need them. While this might be helpful in most cases suppose you find yourself needing the same object multiple times, wouldn't it be nice to have a simple way of creating the same object over and over?

Luckily, Javascript allows us to define a **constructor** function that can be invoked using the `new` operator. In order to take advantage of this functionality the first thing we need to do is create a constructor.

```js
function Customer(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
```

## Using the Constructor

In JavaScript when `this` is used inside of a constructor functions it does not have a value, it serves as a place holder until the constructor is called.

```js
const person = new Customer('John', 'Smith');
```

When the `Customer` constructor is invoked, it will take the `firstName` and `lastName` parameters and assign them to the current instance. In case of the code above `John` and `Smith` are assigned to `person` variable as an object. In the code below the same thing happens, the parameters of each invocation are assigned to variables that invoked the constructor functions.

```js
const person2 = new Customer('Joe', 'Snuffington');
const person3 = new Customer('Bobby', 'Remington');
```

If we log the properties of each variable we can double check that they were assigned correctly.

```js
console.log(person.firstName); // John
console.log(person2.firstName); // Joe
console.log(person3.firstName); // Bobby
```

## More Control with Object.defineProperty()

Now that we know how to create/use a constructor we can see how to use __[Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)__ in combination with the constructor to have more control over the properties of our objects. Try to understand the code below.

```js
function Person(firstName) {
  Object.defineProperty(this, "firstName", {
    value: firstName,
    writeable: false,
  });
}

const person = new Person('Mig');
console.log(person.firstName); // Mig

person.name = 'Joe';
console.log(person.firstName); // Mig
```

We can tell by looking at the code that the function inside of the Person constructor is taking in three parameters. The first parameter is `this` which we know in this case means that value we set will be assigned to the instance that invokes the constructor. The next parameter is the string `"firstName"` which is the name of the property we are defining. The last parameter is called a descriptor object. This object is used to assign the value of the property as well as multiple different properties of the property being defined.
In the case of the code above we set the value of the firstName property by passing the constructor parameter as the value property of the descriptor object. We also configured the property not be writeable meaning that the value of the property can not be changed with the assignment operator.

## Conclusion