/**
 * @api {post} /pickup/:pickup_id/like like pickup
 * @apiName     like pickup
 * @apiGroup    Pickup
 *
 * @apiParam    (Header)    {string}    x-access-token       token = access token
 *
 * @apiParam    (Params)    {string}    pickup_id   Page for load more function (start = 0)
 *
 * @apiSuccess  (Response)  {number}    status      Request status
 * @apiSuccess  (Response)  {number}    error       Request Error (0: success, 1: error)
 * @apiSuccess  (Response)  {string}    message     Request Message
 * @apiSuccess  (Response)  {Object}    data        Object result
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