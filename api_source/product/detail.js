/**
 * @api {get} /product/:id Detail Product
 * @apiName Detail product
 * @apiGroup Product
 *
 * @apiParam (Params) {string} id Product id
 *
 * @apiSuccess (Response) {number} status Request status
 * @apiSuccess (Response) {number} error Request Error (0: success, 1: error)
 * @apiSuccess (Response) {string} message Request Message
 * @apiSuccess (Response) {Object} data Data object
 * @apiSuccess (Response) {Object} data.product Product object
 * @apiSuccess (Response) {Array} data.list_product List Product object in same category
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status"   : 200,
 *       "error"    : 0,
 *       "message"  : success,
 *       "data"     :
 *          {
 *              "product"   : {
 *                  "_id"   : "234535545345",
 *                  "pid"   : 1,
 *                  "name"  : "name"
 *              },
 *              "list_product"   : [
 *                  {
 *                      "_id"   : "234535545345",
 *                      "pid"   : 1,
 *                      "name"  : "name"
 *                  },
 *                   {
 *                      "_id"   : "234535545345",
 *                      "pid"   : 1,
 *                      "name"  : "name"
 *                  },
 *                   {
 *                      "_id"   : "234535545345",
 *                      "pid"   : 1,
 *                      "name"  : "name"
 *                  },
 *              ],
 *          }
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 * @apiError UserError The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status"   :500,
 *       "error"    : 1,
 *       "message"  : "server error",
 *       "data"     : []
 *     }
 */