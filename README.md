##  Questions No-1
### WebSite Features

- By visiting the website, the user can know about the various courses related to programming, the course name, details, credit hours and price will be given.


- The user can visit the website and select the course of his choice and add it to the cart.


- The user will given a specific (20 hours) credit hours and cannot add more than that specific credit hours to the course.


- After adding a course to the cart, the user will see how many credit hours have been added and how many credit hours are left in the cart.


- As many carts the user adds (up to specified credit) their price will be added to the cart so the user will know about the total price.


## Question No-2
### How to managed the state in my assignment project

In my assignment project, i have effectively managed state using React's bult-in 'useState' hook.
I used the 'useState' hook initialize several pieces of state in my App.jsx file component. these state variable include 'bookMark', 'crediHour', 'remainingCredit' and 'total price'. Each of these variables holds different types of data represents various aspects of my application state


- i defined the handleBookMarks function to handle the addition of courses to the bookMark state array



- i first check whether the selected course already exist in the bookMark



- if the course is not already selected, i calculate the new crediHour, remaining and totalPrice based on the selected course's information



- finally, i update the state variables using 'setBookMarks', setCreditHour, setRemainingCredit, and setTotalPrice

#### i pass the state values as props to child components like Cart, where they are used to display relevant information
#### Overall, my project follows a standard pattern for state management in React. i use the 'useState' hook to create and update state variables, and i pass this state down to child components for rendering.
