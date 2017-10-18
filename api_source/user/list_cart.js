/**
 * @api {get} /user/cart list product in cart
 * @apiName     list product in cart
 * @apiGroup    User
 *
 * @apiParam    (Header)    {string}    x-access-token       token = access token
 *
 * @apiParam    (Params)    {number}    page        Page for load more function (start = 0)
 * @apiParam    (Params)    {string}    sort_by     Enum: ['new', 'ranking']
 *
 * @apiSuccess  (Response)  {number}    status      Request status
 * @apiSuccess  (Response)  {number}    error       Request Error (0: success, 1: error)
 * @apiSuccess  (Response)  {string}    message     Request Message
 * @apiSuccess  (Response)  {Array}     data        Array of Product object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status"   : 200,
 *       "error"    : 0,
 *       "message"  : success,
 *       "data"     :
 *          {
 *              "_id"   : "234535545345",
 *              "pid"   : 1,
 *              "name"  : "name"
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