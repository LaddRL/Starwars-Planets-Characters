# Project
StarWars planets from the movies Project

## Description
This project of mine is a full-stack webpage meant for people who like learning useless starwars knowledge about the movies.  My motivation for this project was that starwars is a passion of mine and really wanted to put my new skills to use with making this project. I wanted to display the planets from each movie along with the planets info and characters. 

# Table of Contents
- [Project](#Project)
- [Installation](#Installation)
- [Description](#Description)
- [Wireframing](#wireframing)
- [What-I-learned](#what-I-Learned)
- [Links](#Links)
- [Questions?](#Questions)


## Installation
In order to install this project you will need to install all node packages with `npm i`, will also need to download materializecss with `npm install materialize-css@next`. Next you would need to run `npm start` on integrated terminal of server.js, then you will open a integrated terminal in the src folder and also run `npm start`.


## Wireframing
![screenshot of how i want the wireframe](wireframeIdea.png)

## What-I-Learned
I learned that trying to do a big project is hard but in truth I learned many methods on pulling info out of an API specifically on displaying it on the website and I can thank my Teacher and TA on teaching and coaching me on it!

        <div>
            <div>
                <h1>Welcome to the galaxy!</h1>
            </div>
            <div>
                <h3>Click on the movie to see the planets featured!</h3>
            </div>
            <div>
                <ul>
                    {filmData.map((swTitle) =>{
                        return (
                        <li>
                            {swTitle.title}
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>


## Links
[PLACEHOLDER](WALKTHROUGH COMING SOON)

## Questions?
My gitHub username is LaddRL, and you can email me at laddrlindsay22@gmail.com for any questions.