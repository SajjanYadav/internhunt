# InternHunt
<p align="center" >
  <img width="400" height="150" src="https://github.com/hamees-sayed/internhunt/blob/main/client/src/Components/img/Name.png">
</p>


<p align="center">
  Internhunt is a one-stop platform for students to find internships easily and efficiently. The aim of the project is to simplify the process of finding     internships by gathering all the relevant data in one place. Say goodbye to endless website scrolling and let Internhunt do that for you!
</p>  

<img width="1200" height="600" src="https://github.com/hamees-sayed/internhunt/blob/main/client/src/Components/img/yo1/screely-1681556317784.png" />        

---  
# What is it? 
Internhunt is a one-stop platform for students to find internships easily and efficiently. The aim of the project is to simplify the process of finding internships by gathering all the relevant data in one place by scraping the web and presenting it in an organized manner. Say goodbye to endless website scrolling and let Internhunt do the hard work for you!

![image](https://user-images.githubusercontent.com/98336593/232202030-d7a5343e-bf28-4706-bd7e-59e3c5c9400a.png)

# Features
- All types of Internship at one Place. (SDE, Management, Backend, Frontend, Web Design, etc)
- Catorise on the basis of companies such Startups, Maang and Research Universities.
- Search feature to find out Specfic Role & Company.

# Technologies Used
- React.js
- Node.js
- Docker
- Tailwind
- Napptive

# Run App on your local system
- If you have Docker and Docker compose already installed on your system, run the following commands: 
```
# Fork and Clone the Repository
$ docker compose up    # run this command in the root directory of the project
```

- Conventionally, you can run the project locally as following: 
```
# Fork and Clone the Repository
$ cd server
$ npm i
$ node app.js     # Alternatively, you can also do `nodemon app.js`

# now navigate back to `client` directory:
$ cd ..
$ cd client 

# From `client` directory, run:
$ npm i
$ npm run dev
```
# Features to be Added
- We plan to further add more filters. 
- Scrape more sites to have a variety of internship opening from various different companies.
- Implement caching, fetching data for every request makes the site slow!
