## `npm run` scripts

There are a few defined run scripts, here's a list of them with a description of what they do. To run them, simply execute `npm run <script name>` - e.g. `npm run dev`

- `start`: Used by the production environment to start the app. This will run a compiled version, so you need to execute `build` first.
- `build`: Runs the `babel` CLI to compile the app. Files are emitted to `dist/`.
- `dev`: Runs the app in development mode - uses `babel-node` to compile on-the-fly. Also uses `nodemon` to automatically restart when stuff changes.
- `test`: Runs tests.
- `cover`: Runs tests and collects coverage.
- `lint`: Lints + formats the code.

**For npm:**

```bash
# Note the `--` before the actual arguments.
npm run test -- --debug
```

**For yarn:**

```bash
# Yarn does not need the `--` before the actual arguments.
yarn test --debug
```

## Directory structure


- `src`: the actual source for the app goes here. Duh.
  - `__tests__`: In the source root folder, contains integration tests.
  - `routes`: API endpoints go here, and are automatically loaded at startup. Please see the section about API endpoints for details.
  - `bin`: files that are usually executed by `npm run` scripts, e.g. starting the server.
  - `lib`: stuff that helps the app start up, e.g. environment, logger, the container configuration, etc.
  - `middleware`: custom app middleware.
  - `services`: application services, this is just to illustrate the dynamic discovery of stuff as described in the Dependency injection section.
    - `__tests__`: Unit tests for files in the `services` directory.
  - `[your directory]`: you can plop anything else here, too.
    - `__tests__`: Unit tests for files in your directory.


# Author

- ser60v - [@ser60v](https://vk.com/beardeddwarf)

# License

MIT.

[api-helper]: /src/__tests__/api-helper.js
[close-event]: /src/lib/server.js#L58
[standard]: http://standardjs.com/
[koa-router]: https://github.com/alexmingoia/koa-router
[babel]: https://github.com/babel/babel
[jest]: https://github.com/facebook/jest
[koa-bodyparser]: https://github.com/koajs/bodyparser
[eslint]: https://github.com/eslint/eslint
[prettier]: https://github.com/prettier/prettier
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
[cors]: https://github.com/koajs/cors
[nodemon]: https://github.com/remy/nodemon
[respond]: https://github.com/jeffijoe/koa-respond
[yenv]: https://github.com/jeffijoe/yenv
[awilix]: https://github.com/jeffijoe/awilix
[awilix-koa]: https://github.com/jeffijoe/awilix-koa
[smid]: https://github.com/jeffijoe/smid
[fejl]: https://github.com/jeffijoe/fejl
[koa-es7-boilerplate]: https://github.com/jeffijoe/koa-es7-boilerplate
