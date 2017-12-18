### Seeding Instructions

1. In mongo console:

```javascript
use recruiter-router
db.dropDatabase()
use recruiter-router
```

2. Navigate to './database-scripts', then in $bash:

```
mongo < dbcreate.js
node seeds.js
```
