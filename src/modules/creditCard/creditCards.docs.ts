/**
 * @swagger
 * tags:
 *   name: CreditCards
 *   description: Credit Cards management
 */

/**
 * @swagger
 * /creditCards/:
 *   get:
 *     summary: Get all credit cards
 *     tags: [CreditCards]
 *     responses:
 *       200:
 *         description: Credit Cards List
 */

/**
 * @swagger
 * /creditCards/{id}:
 *   get:
 *     summary: Get credit card by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: Credit card id
 *     tags: [CreditCards]
 *     responses:
 *       200:
 *         description: Credit card by id
 */

/**
 * @swagger
 * /creditCards:
 *   post:
 *     summary: POST created credit card
 *     requestBody:
 *      description: Credit card data
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreditCardInterface'
 *     tags: [CreditCards]
 *     responses:
 *       201:
 *         description: Credit card created
 *       400:
 *         description: Bad request - Invalid data
 *       403:
 *         description: CORS error or forbidden
 */

/**
 * @swagger
 * /creditCards/{creditCards_id}:
 *   put:
 *     summary: PUT updated credit card
 *     parameters:
 *     - in: path
 *       name: creditCards_id
 *       required: true
 *       schema:
 *         type: string
 *       description: Credit card id
 *     requestBody:
 *      description: Credit card data
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreditCardInterface'
 *     tags: [CreditCards]
 *     responses:
 *       201:
 *         description: Credit card updated
 *       400:
 *         description: Bad request - Invalid data
 *       403:
 *         description: CORS error or forbidden
 */