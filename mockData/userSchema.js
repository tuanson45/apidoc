var user = {
    "type": "object",
    "properties": {
        "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
        },
        "firstName": {
            "type": "string",
            "faker": "name.firstName"
        },
        "lastName": {
            "type": "string",
            "faker": "name.lastName"
        },
        "email": {
            "type": "string",
            "faker": "internet.email"
        }
    },
    "required": ["id", "type", "lastname", "email"]
};


module.exports = user;