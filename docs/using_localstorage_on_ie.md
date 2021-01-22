# Using `pancake.storage` on Internet Explorer

> NOTE: This documentation is only for Internet Explorer users.

In fact Internet Explorer supports it, But needs to run on webserver for security reasons...

Let's get started!

## Ways to run localStorage on IE

### Way 1: HTTP Server (Offline)

1. Install [Node.js](https://nodejs.org)
2. Check if npm is installed, Open Command line and type `npm -v`
3. If version given, Then you're ready
4. Open command line, Type `npm install -g http-server`
5. Copy `build` folder to both `examples` folder and `games` folder
6. If you want to run a game (Snake for example cause it uses `localStorage`)
7. Open command line from `games` folder, Then type `http-server` to start HTTP server
8. Head to one of the links that server gives you
9. Click on `snake.html`
10. That's all

> NOTE: If you don't want to do all that bla bla bla use [Servez](https://greggman.github.io/servez/) instead.

#### Also

1. Try to do the same with `examples` folder
2. And open `storage_01.html`

### Way 2: Online

Another easier way is to host game on online website and run it