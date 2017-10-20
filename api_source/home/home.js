/**
 * @api {get} /home home
 * @apiName     home
 * @apiGroup    Home
 *
 * @apiParam    (Header)    {string}    x-access-token       token = access token
 *
 * @apiSuccess  (Response)  {number}    status              Request status
 * @apiSuccess  (Response)  {number}    error               Request Error (0: success, 1: error)
 * @apiSuccess  (Response)  {string}    message             Request Message
 * @apiSuccess  (Response)  {Object}    data                Object data result
 * @apiSuccess  (Response)  {Array}     data.list_keyword   Danh sach suggest keyword
 * @apiSuccess  (Response)  {Array}     data.list_like      Danh sach Product user da thich (khi token != null)
 * @apiSuccess  (Response)  {Array}     data.top_keyword    Danh sach top keyword
 * @apiSuccess  (Response)  {Array}     data.categories     Danh sach Category trong he thong
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status"   : 200,
 *       "error"    : 0,
 *       "message"  : success,
 *       "data"     :
 *          {
 *              "list_keyword"  : [
 *                  {
 *                      "_id"  : "id",
 *                      "name" : "name"
 *                  },
 *                  {
 *                      "_id"  : "id",
 *                      "name" : "name"
 *                  },
 *                  {
 *                      "_id"  : "id",
 *                      "name" : "name"
 *                  }
 *              ],
 *              "list_like"     : [
 *                   {
 *                      "_id"          : "id",
 *                      "price"        : 1000,
 *                      "createdAt"    : "CreatedAt",
 *                      "description"  : "Description",
 *                      "barcode"      : "Barcode",
 *                      "code"         : "Code",
 *                      "images"       : [{
 *                          "origin"    : "origin image",
 *                          "thumb"     : "thumbnail image"
 *                      }],
 *                      "attributes"   : [{
 *                         "name" : "attr name",
 *                         "value": "attr value"
 *                     }],
 *                      "avatar"       : {
 *                          "origin" : "origin image",
 *                          "thumb"  : "thumbnail image"
 *                      }
 *                  },
 *              ],
 *              "top_keyword"   : [
 *                   {
 *                      "_id"  : "id",
 *                      "name" : "name"
 *                  },
 *                  {
 *                      "_id"  : "id",
 *                      "name" : "name"
 *                  },
 *                  {
 *                      "_id"  : "id",
 *                      "name" : "name"
 *                  }
 *              ],
 *              "categories"    : [
 *                  {
 *                      "_id"        : "id",
 *                      "name"       : "name",
 *                      "createdAt"  : "CreatedAt",
 *                      "image"      : {
 *                          "origin" : "origin image",
 *                          "thumb"  : "thumbnail image"
 *                      }
 *                  },
 *                  {
 *                      "_id"        : "id",
 *                      "name"       : "name",
 *                      "createdAt"  : "CreatedAt",
 *                      "image"      : {
 *                          "origin" : "origin image",
 *                          "thumb"  : "thumbnail image"
 *                       }
 *                   }
 *              ]
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