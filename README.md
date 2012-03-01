# fulljames.net

### A simple demo site using Node, Express and Jade

I rebuilt my website - ok, page - to test running a Node application on my web hosting (Webfaction). Fortunately for my sanity the whole thing was pretty straightforward.

### Running the app

If you want to try this application out yourself, you'll need to have Node installed somewhere (obviously). The package.json file declares all the dependencies (current Express, Jade, Less, Step, Underscore*), so after cloning the repo run 'npm install' in the project's directory to configure them.

Then 'node app.js' to run up the app. If you don't specify a port it defaults to 3000, so browse to localhost:3000 to see it. The stylesheet is written in LESS and compiles down to CSS on application start - which is why the page is referring to an initially non-existent file.

* Not used but likely to be later

### If it doesn't work

I'm sorry. This is a learning process for me, so take the opportunity to make it one for you too!