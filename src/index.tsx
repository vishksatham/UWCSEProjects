import React from 'react';
import { createRoot } from 'react-dom/client';
import { nextFib } from './fib';


const main: HTMLElement | null = document.getElementById('main');
if (main === null) {
  console.log('Uh oh! no "main" element!');
} else {
  const root = createRoot(main);


  const params: URLSearchParams = new URLSearchParams(window.location.search);

  const firstName : string | null = params.get("firstName");
  const nAge: string | null = params.get("age");


  if (nAge === null || firstName === null || firstName === "") {
    root.render(
      <div>
        <form action="/">
          <p>Hi there! Please enter the following information:</p>
          <p>Your first name: <input type="text" name="firstName"></input></p>
          <p>Your age: <input type="number" name="age" min="0"></input></p>
          <input type="submit" value="Submit"></input>
        </form>

        <p><a href="StartOverBttn">Start Over</a></p>
      </div>);

  }

  else {
    const age = parseInt(nAge);
    if (age < 0 || isNaN(age)) {
      root.render(
        <div>
          <form action="/">
            <p>Hi there! Please enter the following information:</p>
            <p>Your first name: <input type="text" name="firstName"></input></p>
            <p>Your age: <input type="number" name="age" min="0"></input></p>
            <input type="submit" value="Submit"></input>
          </form>
          <p><a href="StartOverBttn">Start Over</a></p>
        </div>);
    }

    else if (age % nextFib(age) === 0) {
      root.render(
        <div>
          <p>Hi, {firstName}! Your age ({age}) is a Fibonacci number!</p>
          <br></br>
          <a href="StartOverBttn">Start Over</a>
        </div>);
    }

    else {
      root.render(
        <div>
          <p>Hi, {firstName}! Your age ({age}) will be a Fibonacci number in ({nextFib(age) - age}) years.</p>
          <br></br>
          <a href="StartOverBttn">Start Over</a>
        </div>);
    }

  }

}
