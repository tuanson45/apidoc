var user = require('./userSchema');

var schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": user
        },
        "user": user
    },
    "required": ["users", "user"]
};

module.exports = schema;