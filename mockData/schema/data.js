var getData = (data) => {
    return {
        "type": "object",
        "properties": {
            "error": '0',
            "data": data,
            "message": "success",
            "status": 200
        },
        "required": ["data", "message", "status", "error"]
    };
};

module.exports = getData;