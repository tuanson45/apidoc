/**
 * @api {get} /pickup/:category_id pickup of category
 * @apiName     pickup of category
 * @apiGroup    Pickup
 *
 * @apiParam    (Header)    {string}    x-access-token       token = null
 *
 * @apiParam    (Params)    {number}    page        Page for load more function (start = 0)
 *
 * @apiSuccess  (Response)  {number}    status      Request status
 * @apiSuccess  (Response)  {number}    error       Request Error (0: success, 1: error)
 * @apiSuccess  (Response)  {string}    message     Request Message
 * @apiSuccess  (Response)  {Array}     data        Array of pickup object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status"   : 200,
 *       "error"    : 0,
 *       "message"  : success,
 *       "data"     : [
 *           {
 *              "_id"               : "id",
 *              "name"              : "pickup name",
 *              "createdAt"         : "CreatedAt",
 *              "description"       : "Description",
 *              "PickupCategoryID"  : "PickupCategoryID",
 *              "image"             : {
 *                  "origin" : "origin image",
 *                  "thumb"  : "thumbnail image"
 *           },
 *           {
 *               "_id"               : "id",
 *               "name"              : "pickup name",
 *               "createdAt"         : "CreatedAt",
 *               "description"       : "Description",
 *               "PickupCategoryID"  : "PickupCategoryID",
 *               "image"             : {
 *                  "origin" : "origin image",
 *                  "thumb"  : "thumbnail image"
 *               }
 *           },
 *           {
 *              "_id"               : "id",
 *              "name"              : "pickup name",
 *              "createdAt"         : "CreatedAt",
 *              "description"       : "Description",
 *              "PickupCategoryID"  : "PickupCategoryID",
 *              "image"             : {
 *                  "origin" : "origin image",
 *                  "thumb"  : "thumbnail image"
 *              }
 *           }
 *       ]
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