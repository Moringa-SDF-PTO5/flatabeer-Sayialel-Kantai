# flatabeer-Sayialel-Kantai
Setup
Create a new PRIVATE repository in the GitHub Organization (Moringa-SDF-PTO5Links to an external site.). Ensure your repository has a name in the following format; flatabeer-firstname-lastname (Example: flatabeer-jane-doe). Take note, any other repository name will NOT be graded.
Download the server db.json file from here Download here.
Ensure you have json-server installed on your machine.
Run this command to get the backend started: $ json-server --watch db.json
Test your server by visiting this route in the browser: http://localhost:3000/beers 
As you progress through the assignment, ensure you make regular commits to your repository. You will be required to submit your GitHub repository link for this assignment.

Your repository MUST have a well-written README. (Any repository without a valid README will NOT be graded. You can find resources below on creating a good README.)

https://github.com/othneildrew/Best-README-TemplateLinks to an external site.
https://github.com/matiassingers/awesome-readmeLinks to an external site.
https://github.com/topics/awesome-readme-templateLinks to an external site.
https://everhour.com/blog/github-readme-template/Links to an external site.
Deliverables
As a user, I can:
1. See the first beer's details, including its **name, image, description, and
reviews**, when the page loads. You will need to make a GET request to the
following endpoint to retrieve the beer data, along with its associated
reviews:
GET /beers/1
Example Response:
 {
 "id": 1,
 "name": "Oh So Flattening",
 "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
 "image_url": "https://i.ibb.co/wQ4G0w1/flatiron-brew.png",
 "reviews": [
   "It's flat! Just the way I like it!!",
   "Is this the real beer, is this just fantasy?",
   "I've always hated bubbles going up my nose, so this is absolutely delightful.",
   "Flat straight out of the bottle! No more waiting for the fizziness to subside. Thank you FlattaBeer!! I love you!!!"
  ]
 }

2. See a menu of all beers in the `<nav>` element on the left side of the page when the page loads. You will need to make a GET request to the following endpoint to retrieve the beer data:

GET /beers
Example response:
[
 {
  "id": 1,
  "name": "Oh So Flattening",
  "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
  "image_url": "https://i.ibb.co/wQ4G0w1/flatiron-brew.png",
  "reviews": [
    "It's flat! Just the way I like it!!",
    "Is this the real beer, is this just fantasy?",
    "I've always hated bubbles going up my nose, so this is absolutely delightful.",
    "Flat straight out of the bottle! No more waiting for the fizziness to subside. Thank you FlattaBeer!! I love you!!!"
  ]
},
{
 "id": 2,
 "name": "Pilsen Lager",
 "description": "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
 "image_url": "https://images.punkapi.com/v2/4.png",
 "reviews": [
 "Spicy crab cakes, say what?!",
 "My mum hates it"
  ]
 }
]
3. Add a new review to the page when the review form is submitted. **No
persistence is needed**.


