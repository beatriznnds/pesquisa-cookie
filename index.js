import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('welcome to a simple HTTP cookie server');
});

//We will set a route that will save a cookie in the browser. In this case, the cookies will be coming from the server to the client browser.
app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`);
    console.log(res.cookie)
    res.send('Cookie have been saved successfully');
});
//When the above route is executed from a browser, the client sends a get request to the server. But in this case, the server will respond with a cookie and save it in the browser.

app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    res.send(req.cookies);
});

// delete the saved cookie
app.get('/deletecookie', (req, res) => {
    //show the saved cookies
    res.clearCookie()
    res.send('Cookie has been deleted successfully');
});

app.listen(8000, () => console.log('The server is running port 8000...'));


//In front-end, this will be sent back to the server with the Cookie headers:

//GET /sample_page.html HTTP/2.0
//Host: www.example.org
//Cookie: yummy_cookie=choco; tasty_cookie=strawberry