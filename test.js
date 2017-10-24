let param = {
    id: 1,
    name: 'tuan son',
    age: 28,
    image: {
        thumb: 'thumb',
        origin: 'origin'
    }
};

let response = {
    status: 200,
    error: 0,
    message: 'success',
    data: {
        id: 1,
        nickname: 'ahihi',
        token: 'sdsdbisbhfisbfisaf',
        images: [{
            thumb: 'thumb',
            origin: 'origin'
        }, {
            thumb: 'thumb',
            origin: 'origin'
        }]
    }
};

const createParams = (paramObject) => {
    let keys = Object.keys(paramObject);
    if (keys.length !== 0) {
        let paramContent = ``;
        keys.forEach(key => {
            paramContent += ` * @apiParam (Params) {${typeof paramObject[key]}} ${key}  params description\n`;
        });
        return paramContent;
    } else {
        return '';
    }
};

const createResponse = (responseObject) => {
    let keys = Object.keys(responseObject);
    if (keys.length !== 0) {
        let response = ``;
        keys.forEach(key => {
            if (typeof responseObject[key] !== 'object') {
                response += ` * @apiSuccess (Response) {${typeof responseObject[key]}} ${key}  params description\n`;
            } else {
                if (Array.isArray(responseObject[key])) {
                    response += ` * @apiSuccess (Response) {array} ${key}  params description\n`;
                    if (responseObject[key].length !== 0) {
                        response += createResponseFromObject(key, responseObject[key][0]);
                    }
                } else {
                    response += ` * @apiSuccess (Response) {${typeof responseObject[key]}} ${key}  params description\n`;
                    response += createResponseFromObject(key, responseObject[key]);
                }
            }
        });
        return response;
    } else {
        return '';
    }
};

const createResponseFromObject = (keyObject, data) => {
    if (data) {
        let obj;
        let keys;
        if (Array.isArray(data)) {
            if (data.length !== 0) {
                keys = Object.keys(data[0]);
                obj = data[0];
            } else {
                return '';
            }
        } else {
            keys = Object.keys(data);
            obj = data;
        }

        if (keys.length !== 0) {
            let response = ``;
            keys.forEach(key => {
                if (Array.isArray(obj[key])) {
                    response += ` * @apiSuccess (Response) {array} ${keyObject}.${key}  params description\n`;
                } else {
                    response += ` * @apiSuccess (Response) {${typeof obj[key]}} ${keyObject}.${key}  params description\n`;
                }
                if (typeof obj[key] === 'object') {
                    response += createResponseFromObject(key, obj[key]);
                }
            });
            return response;
        } else {
            return '';
        }
    } else {
        return '';
    }
};

function create(apiName, router, method, param, response) {
    let paramContent = createParams(param);
    let responseContent = createResponse(response);
    return `/**
 * @api {${method}} ${router} ${apiName}
 * @apiName  ${apiName}
 * @apiGroup ${apiName}\n` + paramContent + `\n` + responseContent + ` */`;
}

var gen = create('demo', '/demo', 'get', param, response);

let createJs = require('./generate/write2File');
createJs('gen_api', gen);
