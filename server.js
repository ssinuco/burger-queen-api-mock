const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults()

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const port = process.env.PORT || 8080;

const rules = auth.rewriter(JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json'))));

// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router
app.use(middlewares);
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port, () => {
    console.log(`JSON Server is running in ${port}`);
});

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json'); // <== Will be created later
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; // <== You can change the port

// server.use(middlewares);
// server.use(router);

// server.listen(port);