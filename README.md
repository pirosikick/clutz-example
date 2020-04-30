# clutz-example

Clutz の利用例

- Closure Tools で記述されているコード(`src/closure/hello.js`)を、TypeScript のコード(`src/ts/index.ts`)から呼び出す
- Clutz で hello.js の型を出力しているので、型の恩恵を受けることができる
  - `npm run clutz`
  - 出力された型：[@types/closure.d.ts](%40types/closure.d.ts)

```console
$ npm ci

# http://localhost:5000 で起動します
$ npm start
```
