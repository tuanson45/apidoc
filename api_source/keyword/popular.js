/**
 * @api {get} /keyword/popular popular keyword
 * @apiName     popular keyword
 * @apiGroup    Keyword
 *
 * @apiParam    (Header)    {string}    x-access-token       token = null
 *
 * @apiSuccess  (Response)  {number}    status      Request status
 * @apiSuccess  (Response)  {number}    error       Request Error (0: success, 1: error)
 * @apiSuccess  (Response)  {string}    message     Request Message
 * @apiSuccess  (Response)  {Array}     data        Array of keyword object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status"   : 200,
 *       "error"    : 0,
 *       "message"  : success,
 *       "data"     : []
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