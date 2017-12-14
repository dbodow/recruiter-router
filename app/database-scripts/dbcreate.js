use recruiter-router;

db.createCollection("users",
  {
    validator: { $and:
      [
        {
          name: {
            $type: "string",
            $exists: true
          },
          username: {
            $type: "string",
            $exists: true
          }
        }
      ]
    }
  }
)

db.users.createIndex(
  { "username": 1 },
  { unique: true }
)

db.createCollection("portfolios",
  {
    validator: { $and:
      [
        {
          username: {
            $type: "string",
            $exists: true
          },
          templateName: {
            $type: "string",
            $in: [ "Flex" ],
            $exists: true
          },
          staticInfo: { 
            $type: "object",
            $exists: true },
          taggedInfo: { $exists: true },
          analytics: { $exists: true }
        }
      ]
    }
  }
)