## 📌 GraphiQL App

**GraphiQL** is a free application that helps you with things like executing GraphQL queries, modifying and subscribing, minimizing queries, loading schemas, and more.

It provides all of this in a simple yet powerful editor and user-friendly interface. It is an indispensable tool for developer.

---

### 🔗 Deploy

- https://graphi-ql.netlify.app/

### ⚙️ Technologies used

- React
- TypeScript
- Redux Toolkit
- Material-UI
- GraphQL
- CodeMirror
- Firebase
- i18next

## Installing

1. Clone this repo.

```
git clone https://github.com/pa4ka1992/graphiql-app.git
```

2. Go to `graphiql-app` folder.
3. Switch branch.

```
git checkout develop
```

4. Install pnpm modules.

```
pnpm install
```

5. Rename file `.env.example` to `.env` at src folder.

6. Add any open GraphQL API url to **.env** file

```
examples:

VITE_GRAPH_API=https://swapi-graphql.netlify.app/.netlify/functions/index

or

VITE_GRAPH_API=https://rickandmortyapi.com/graphql

```

## Firebase

1. Create your firebase web project.

- [Firebase](https://firebase.google.com/).

2. Click on 'Get Started' button.
3. Login into firebase.
4. Click on 'add project' button and enter your project name.
5. Wait until your project will be created.
6. Create a **Web Application**
7. Copy your application keys into **.env** file

```
const firebaseConfig =  {
	apiKey:  "apiKey",
	authDomain:  "authDomain",
	projectId:  "projectId",
	storageBucket:  "storageBucket",
	messagingSenderId:  "messagingSenderId",
	appId:  "appId"
};

VITE_GRAPH_FIREBASE_API_KEY=apiKey
VITE_GRAPH_FIREBASE_AUTH_DOMAIN=authDomain
VITE_GRAPH_FIREBASE_PROJECT_ID=projectId
VITE_GRAPH_FIREBASE_STORAGE_BUCKET=storageBucket
VITE_GRAPH_FIREBASE_MESSAGING_SENDER_ID=messagingSenderId
VITE_GRAPH_FIREBASE_APP_ID=appId
```

8. Open Firebase console.
9. Open Build tab in the left section and choose Authentication.
10. Click on 'Get Started' button.
11. Choose Email/Password as a Authentication providers.

## Running application

1. Start application.

```
pnpm dev
```
