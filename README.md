# chat_app

Chat application based on https://angular-test-backend-yc4c5cvnnq-an.a.run.app/template.html and https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphiql.


## Used technologies
- Vite.js
- React.js (with Context API)
- Emotion with Tailwind CSS using Twin
- Apollo Client

## Build the app
```
 npm i
 npm run dev
```

Warning: Unfortunately, I could not use https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphiql API with Apollo. It seems that it is the CORS configuration problem on the API side. In order to do the assigment, I created a basic GraphQL API using Ruby on Rails. I eventually changed the uri to the url I received but I can't say it will work.
The particularities of Ruby on Rails obliged me to use different variable name for ids and datetime. I changed that in order it works with the online API but I am not able to test it.
If you have any problem using the app, do not hesitate to contact me.

