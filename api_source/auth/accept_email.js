/**
 * @api {post} /register/email Input email
 * @apiName     Input email
 * @apiGroup    Auth
 *
 * @apiParam    (Header)    {string}    x-access-token       token = null
 *
 * @apiSuccess  (Response)  {number}    status      Request status
 * @apiSuccess  (Response)  {number}    error       Request Error (0: success, 1: error)
 * @apiSuccess  (Response)  {string}    message     Request Message
 * @apiSuccess  (Response)  {Object}    data        Object response result
 * @apiSuccess  (Response)  {string}    data.uid    User id
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status"   : 200,
 *       "error"    : 0,
 *       "message"  : success,
 *       "data"     :
 *          {
 *              "uid"   : "234535545345"
 *          }
 *     }
 *
 * @apiError    EmailExist Email da ton tai trong he thong.
 *
 * @apiErrorExample     Error-Response:
 *     {
 *       "status"   : 20,
 *       "error"    : 1,
 *       "message"  : "server error",
 *       "data"     : null
 *     }
 */