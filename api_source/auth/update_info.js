/**
 * @api {put} /register/info update information
 * @apiName     update information
 * @apiGroup    Auth
 *
 * @apiParam    (Header)    {string}    x-access-token       token = null
 *
 * @apiParam    (Params)    {number}    uid         User id
 * @apiParam    (Params)    {string}    name        Enum: ['new', 'ranking']
 * @apiParam    (Params)    {number}    gender      Enum: ['male', 'female']
 * @apiParam    (Params)    {number}    inviteId    Invite User id
 *
 * @apiSuccess  (Response)  {number}    status      Request status
 * @apiSuccess  (Response)  {number}    error       Request Error (0: success, 1: error)
 * @apiSuccess  (Response)  {string}    message     Request Message
 * @apiSuccess  (Response)  {Object}    data        {}
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status"   : 200,
 *       "error"    : 0,
 *       "message"  : success,
 *       "data"     :
 *          {
 *
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