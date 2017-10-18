/**
 * @api {put} /register/code update code
 * @apiName     update code
 * @apiGroup    Auth
 *
 * @apiParam    (Header)    {string}    x-access-token       token = null
 *
 * @apiParam    (Params)    {number}    uid         User id
 * @apiParam    (Params)    {number}    code        Confirm code
 *
 * @apiSuccess  (Response)  {number}    status      Request status
 * @apiSuccess  (Response)  {number}    error       Request Error (0: success, 1: error)
 * @apiSuccess  (Response)  {string}    message     Request Message
 * @apiSuccess  (Response)  {Object}    data        Data result
 * @apiSuccess  (Response)  {string}    data.token  Access token
 * @apiSuccess  (Response)  {Object}    data.user   Object User info
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status"   : 200,
 *       "error"    : 0,
 *       "message"  : success,
 *       "data"     :
 *          {
 *              "token"   : "234535545345",
 *              "user"   : {
 *                  "_id" : "23bsdfksdjwhefg",
 *                  "uid" : 123234,
 *                  "username" : "name"
 *              }
 *          }
 *     }
 *
 * @apiError    UserNotFound The id of the User was not found.
 * @apiError    UserError The id of the User was not found.
 *
 * @apiErrorExample     Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status"   :500,
 *       "error"    : 1,
 *       "message"  : "server error",
 *       "data"     : []
 *     }
 */