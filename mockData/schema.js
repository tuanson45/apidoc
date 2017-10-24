var getData = require('./schema/data');

var user = require('./schema/user');

var schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": user
        },
        "user": getData(user)
    },
    "required": ["users", "user"]
};

module.exports = schema;