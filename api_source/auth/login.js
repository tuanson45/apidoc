/**
 * @api {post} /login Login
 * @apiName     Login
 * @apiGroup    Auth
 *
 * @apiParam    (Header)    {string}    x-access-token       token = null
 *
 * @apiParam    (Params)    {string}    email       Email address
 * @apiParam    (Params)    {string}    password    Password
 *
 * @apiSuccess  (Response)  {number}    status      Request status
 * @apiSuccess  (Response)  {number}    error       Request Error (0: success, 1: error)
 * @apiSuccess  (Response)  {string}    message     Request Message
 * @apiSuccess  (Response)  {Object}    data        Data result
 * @apiSuccess  (Response)  {string}    data.token  Access token
 * @apiSuccess  (Response)  {Object}    data.user   Object User info
 *
 * @apiSuccessExample Success-Response:
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
 * @apiError    UserError The id of the User was not found.
 *
 * @apiErrorExample     Error-Response:
 *     {
 *       "status"   : 404,
 *       "error"    : 1,
 *       "message"  : "server error",
 *       "data"     : []
 *     }
 */