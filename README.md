This repo demonstrates setting up an nx workspace with 1 react app and 1 react lib.  The app uses the lib, but there is a problem.  The lib uses tsconfig options that are not the same as the options used in the app.  As a result, the lib will build, but the app will not.  I expected the lib to use the lib project's tsconfig settings - both when built separately and when built as part of the app.

Below is a transcript of commands run against this repo on my local dev environment.

```
➜ npx nx build mylib

> nx run mylib:build

Bundling mylib...
  index.js 169.899 KB
⚡ Done in 2.77s

 ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— 

 >  NX   Successfully ran target build for project mylib (5s)

 C:\Repos\nx-multiple-ts-configs :: main ≢  ~1 |  ~1                                                         |  18.2.0 |  100  | 10:29:49  
```

```
➜ npx nx build myapp

   √    1/1 dependent project tasks succeeded [1 read from cache]

   Hint: you can run the command with --verbose to see the full dependent project outputs

 ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— 


> nx run myapp:build:production

Entrypoint main = runtime.195b16c2abc3ca51.esm.js main.28f8bfdb362002b8.esm.js
Entrypoint polyfills = runtime.195b16c2abc3ca51.esm.js polyfills.c186bccd5f5b49b2.esm.js
chunk (runtime: runtime) main.28f8bfdb362002b8.esm.js (main) 266 KiB [initial] [rendered]
chunk (runtime: runtime) polyfills.c186bccd5f5b49b2.esm.js (polyfills) 296 KiB [initial] [rendered]
chunk (runtime: runtime) runtime.195b16c2abc3ca51.esm.js (runtime) 4.4 KiB [entry] [rendered]

ERROR in libs/mylib/src/lib/Mylib.tsx:10:21
TS7030: Not all code paths return a value.
     8 | `;
     9 |
  > 10 | const getSomeText = (capitalized?: boolean) => {
       |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    11 |   if (!capitalized) {
    12 |     return 'some text';
    13 |   }

webpack compiled with 1 error (c434bf571afd5d76)
ENOENT: no such file or directory, open 'dist\apps\myapp\index.html'

 ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— 

 >  NX   Ran target build for project myapp and 1 task(s) it depends on (13s)

    ×    1/2 failed
    √    1/2 succeeded [1 read from cache]

 C:\Repos\nx-multiple-ts-configs :: main ≢  ~1 |  ~1                                                         |  18.2.0 |  100  | 10:30:12  
➜
```

```
➜ nx report

 >  NX   Running global Nx CLI with PNPM may have issues.

   Prefer to use "pnpm" (https://pnpm.io/cli/exec) to execute commands in this workspace.
    TIP  create a shortcut such as: doskey pnx=pnpm nx -- $*



 >  NX   Report complete - copy this into the issue template

   Node : 18.2.0
   OS   : win32 x64
   pnpm : 6.32.17

   nx : 14.1.9
   @nrwl/angular : Not Found
   @nrwl/cypress : 14.1.9
   @nrwl/detox : Not Found
   @nrwl/devkit : Not Found
   @nrwl/eslint-plugin-nx : 14.1.9
   @nrwl/express : Not Found
   @nrwl/jest : 14.1.9
   @nrwl/js : Not Found
   @nrwl/linter : 14.1.9
   @nrwl/nest : Not Found
   @nrwl/next : Not Found
   @nrwl/node : Not Found
   @nrwl/nx-cloud : Not Found
   @nrwl/nx-plugin : Not Found
   @nrwl/react : 14.1.9
   @nrwl/react-native : Not Found
   @nrwl/schematics : Not Found
   @nrwl/storybook : Not Found
   @nrwl/web : 14.1.9
   @nrwl/workspace : 14.1.9
   typescript : 4.6.4
   ---------------------------------------
   Community plugins:

 C:\Repos\nx-multiple-ts-configs :: main ≢  ~1                                                                |  18.2.0 |  100  | 10:31:20  
➜
```