```bash
npm create next-app my-app --typescript
```
```bash
cd my-app
mkdir app
```
Move `pages/index.js` into the newly created `app` directory.
```javascript
// app/page.js
export default function Home() {
  return (
    <div>Hello World</div>
  );
}
```