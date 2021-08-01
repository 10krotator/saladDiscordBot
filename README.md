# saladDiscordBot
discord bot to spam ferret gifs

## Installation

- Execute `npm init`
- Install discord.js `npm install discord.js`
- Install dotenv package `npm i dotenv`
- Create `.gitignore` file and exclude `.env` file that contains your TOKEN
- Execute `main.js` using `node .` or `node main.js`
- create an app on heroku
- Add heroku branch to repo `heroku git:remote -a appName`
- Create proc file and add `worker node main.js`
- Push code to heroku `git push heroku`
- Change the scripts in package.json to `"start":"node main.js"`
