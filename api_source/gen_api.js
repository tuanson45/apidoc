/**
 * @api {get} /demo demo
 * @apiName  demo
 * @apiGroup demo
 *
 * @apiParam (Params) {number} id  params description
 * @apiParam (Params) {string} name  params description
 * @apiParam (Params) {number} age  params description
 * @apiParam (Params) {object} image  params description
 *
 * @apiSuccess (Response) {number} status  params description
 * @apiSuccess (Response) {number} error  params description
 * @apiSuccess (Response) {string} message  params description
 * @apiSuccess (Response) {object} data  params description
 * @apiSuccess (Response) {number} data.id  params description
 * @apiSuccess (Response) {string} data.nickname  params description
 * @apiSuccess (Response) {string} data.token  params description
 * @apiSuccess (Response) {array} data.images  params description
 * @apiSuccess (Response) {string} data.images.thumb  params description
 * @apiSuccess (Response) {string} data.images.origin  params description
 *
 * @apiSuccessExample Success-Response:
 * 
 *{
 *    "status": 200,
 *    "error": 0,
 *    "message": "success",
 *    "data": {
 *        "id": 1,
 *        "nickname": "ahihi",
 *        "token": "sdsdbisbhfisbfisaf",
 *        "images": [
 *            {
 *                "thumb": "thumb",
 *                "origin": "origin"
 *            },
 *            {
 *                "thumb": "thumb",
 *                "origin": {
 *                    "a": "asad",
 *                    "b": "adsad"
 *                }
 *            }
 *        ]
 *    }
 *}
 */