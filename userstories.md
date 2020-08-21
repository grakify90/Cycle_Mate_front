# Features

## 1. As a visitor I want to feel welcome and know what Cycle Mate is about

- The default page you see when you go to `/` should show the story of Cycle Mate and how the user can benefit from using Cycle Mate

## 2. As a user I want to see a list of cycle trips

- When the user navigates to `/agenda`, he/she can see a list of all the cycle trips
- Each cycle trip is displayed with the date, city, province, length in KM, type of bike (road bike/mountainbike/touring bike), and the maximum of people that can participate (including how many people already applied)
- The list of trips is sorted by date (newest first)
- Trips that are in the past are not being displayed
- The user can filter the trips by province, length in KM and type of bike
- The user can search for trips by a keyword in a searchbar
- The page shows a limited amount of trips, and the user can load more trips with numbered buttons

## 3. As a user interested in a particular trip, I want to see the details of that trip

- When the user clicks on a trip, he/she will navigate to a page with all the details of that trip
- On this detail page, the user can see the info that was already shown on the `/agenda` page, and extra info: the name of the organizer of the trip, a description of the trip, a list of participants, the tempo so participants know what to expect (relaxed/medium/athletic)
- Stats of the average age and the gender division of the current participants
- The start location pinpointed on an embedded MapBox map
- The list of participants consists of full names of the participants (clickable links). When the user hovers over participant, their aboutMe story will be displayed

## 4. As a user, I want to be able to join a trip that seems interesting to me, or undo this action if I change my mind

- The following should only be possible when a user is logged in
- On the trip detail page, the user can click on a `button` to join this particular trip
- Once the user clicked on this button to join the trip, he can click the button again to undo the action
- If a user if not logged in, the button will not be visible
- When the user joins this trip, the trip will be added to the personal agenda of the user
- When the user joins this trip, the user will be added to the list of partipants
- If the maximum amount of participants has already been reached, the user should not be able to participate

## 5. As a user, I want to be able to ask questions and have conversations with other users

- When the user navigates to `/messageboard`, he/she can see a list of topics posted by users
- The topics are sorted by when a reply was last posted on that particular topic
- The user can search for topics by a keyword in a searchbar
- The page shows a limited amount of topics, and the user can load more topics with a `next` and `previous` button

## 6. As a user, I want to be able to create a topic on the message board

- The following should only be possible when a user is logged in
- On the `/messageboard` page, there's a `button` to create a new topic
- If a user if not logged in, the button will not be visible
- Clicking on this button will direct the user to a page on which he/she can fill in a form
- The form contains input elements for title and content
- When the user clicks the submit button, the new topic will be posted and will show up on the top of the `/messageboard` page

## 7. As a user, I want to be able to manage my account

- If the user is logged in, he/she can see a `button` --manage my account-- on the `/mypage` page
- Clicking this button will direct the user to a page on which he/she can change their personal account data: first name, last name, email, about me, gender, and date of birth, \*
- Clicking the submit button will update the user's account data
- A fancy way to change the user's password, by entering the new password twice

## 8. As a user, I want to be able to organize a new trip

- If the user is logged in, he/she can see a `button` --organize a new trip-- on the `/mypage` page
- Clicking this button will direct the user to a page with a form containing input elements for: date, location (city), location (province), -- streetName, streetNumber, postalCode-- (for geocoding), length in KM, the number of participants allowed, type of bike, description of the trip, and the tempo (relaxed/medium/athletic)
- When the user clicks the submit button, the new trip will be created and will show up on the top of the `/agenda` page
- The user who made the new trip will show up as the first participant of the trip

## 9. As a user, I want to be able to see a personal agenda, in which I can see which trips I decided to join

- If the user is logged in, he/she can see a `button` --my cycle agenda-- on the `/mypage` page
- Clicking this button will direct the user to a page with a list of trips that the user has decided to join
- The list of trips is sorted by date (newest first)
- Clicking on a trip will direct the user to the detail page of that trip
