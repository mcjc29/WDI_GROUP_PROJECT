# WDI_GROUP_PROJECT
A project WDI

![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# GA WDI30 Group Project - GA Feedback

GA's Web Development Immersive course is fast-paced, and after finding that some students felt that lessons were too quick, or that concepts hadn't sunk in, we decided to create a feedback platform. The app allows students to provide feedback on lessons by rating it on various aspects and flagging up concerns. The platform also allows for the downloading of lesson notes and provides a class chat where students can ask for help with homework and projects or just have a conversation.

Our feedback platform is a mobile-responsive MEAN stack single-page application, styled using the Bulma CSS framework, Amazon S3 file hosting and featuring packages such as angular-chart.js, ui-knobs, moment.js, jsonwebtoken and satellizer. It is tested using Mocha, Chai and Supertest.

##### [Visit website](https://ga-feedback-george.herokuapp.com/).

---

###### The planning phase of the project began with the creation of a Trello board, specifying our MVP requirements and desired features. Tasks were assigned to members of the group throughout the project using this system.

<img src="https://imgur.com/Nwreqpf.png" width="700">

###### The next step was wireframing our website. The usefulness of the feedback platform depends on its usage by students. With this in mind, we aimed to make the process of submitting a rating as easy as possible.

<img src="https://imgur.com/cmTv6x9.png" width="700">

###### Once logged in, the user is immediately presented with the rating submission page, featuring easy to use dials, a message input and a checkbox to signal a desire for help.

<img src="https://imgur.com/xCgUs0f.png" width="700">

###### After submitting a rating, the user is redirected to the lessons index page, which lists all lessons by date. Each lesson page presents the user with a visual representation of the students feelings, using the data from all ratings submitted between the lesson start and end time. First, a radar chart maps out the data - the larger the shape, the better the students feel about the lesson.

<img src="https://imgur.com/q4G7FCw.png" width="700">

###### Next, each data point is presented as a value on a static dial. After this, the ratings of each student are displayed, with a colour system implemented so that instructors can easily identify students that struggled.

<img src="https://imgur.com/q4TQFp0.png" width="700">

###### Finally, the lesson notes are displayed in a dropdown box. they are also available to download from the top of the page.

<img src="https://imgur.com/Ygqdobw.png" width="700">

###### The user profile page also visualises useful data by displaying an individual student's average ratings for each category along with a chart that maps the student's confidence over time.

<img src="https://imgur.com/ZErAACH.png" width="700">

###### The class chat page provides a place for students to converse and ask for or offer help.

<img src="https://imgur.com/ys59c8A.png" width="700">

---

We are generally pleased with the outcome of the project, having got to grips new technologies and produced a fully authenticated, functional and genuinely useful application. It also provided a great learning experience of coding in a team and managing version control.

We have a number of ideas to further develop the application, including:
- Expand the scope of the app to include other GA campuses and courses, the aggregate global data could help inform course and lesson planning in the future.
- Enable OAuth using General Assembly's main website login details.
- Prompt students to use the system by enabling push notification, automatic emails or text messages.
- Improve the look and feel of the website with further styling and animation.
