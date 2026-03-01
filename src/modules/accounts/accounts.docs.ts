/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: Account management
 */

/**
 * @swagger
 * /accounts/:
 *   get:
 *     summary: Get all accounts
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: Account List
 */

/**
 * @swagger
 * /accounts/{id}:
 *   get:
 *     summary: Get account by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: Account id
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: Account by id
 */

/**
 * @swagger
 * /accounts:
 *   post:
 *     summary: POST created account
 *     requestBody:
 *      description: Account data
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/AccountsInterface'
 *     tags: [Accounts]
 *     responses:
 *       201:
 *         description: Account created
 *       400:
 *         description: Bad request - Invalid data
 *       403:
 *         description: CORS error or forbidden
 */

/**
 * @swagger
 * /accounts/{account_id}:
 *   put:
 *     summary: PUT updated account
 *     parameters:
 *     - in: path
 *       name: account_id
 *       required: true
 *       schema:
 *         type: string
 *       description: Account id
 *     requestBody:
 *      description: Account data
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/AccountsInterface'
 *     tags: [Accounts]
 *     responses:
 *       201:
 *         description: Account updated
 *       400:
 *         description: Bad request - Invalid data
 *       403:
 *         description: CORS error or forbidden
 */