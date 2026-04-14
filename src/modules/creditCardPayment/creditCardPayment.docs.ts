/**
 * @swagger
 * tags:
 *   name: CreditCardPayment
 *   description: Credit Card Payment management
 */

/**
 * @swagger
 * /creditCardPayment/:
 *   get:
 *     summary: Get all credit card payment
 *     tags: [CreditCardPayment]
 *     responses:
 *       200:
 *         description: Credit Card Payment List
 */

/**
 * @swagger
 * /creditCardPayment/{id}:
 *   get:
 *     summary: Get credit card payment by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: Credit card payment id
 *     tags: [CreditCardPayment]
 *     responses:
 *       200:
 *         description: Credit card payment by id
 */

/**
 * @swagger
 * /creditCardPayment:
 *   post:
 *     summary: POST created credit card payment
 *     requestBody:
 *      description: Credit card payment data
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreditCardPaymentInterface'
 *     tags: [CreditCardPayment]
 *     responses:
 *       201:
 *         description: Credit card payment created
 *       400:
 *         description: Bad request - Invalid data
 *       403:
 *         description: CORS error or forbidden
 */

/**
 * @swagger
 * /creditCardPayment/{creditCardpayment_id}:
 *   put:
 *     summary: PUT updated credit card payment
 *     parameters:
 *     - in: path
 *       name: creditCardpayment_id
 *       required: true
 *       schema:
 *         type: string
 *       description: Credit card payment id
 *     requestBody:
 *      description: Credit card payment data
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreditCardPaymentInterface'
 *     tags: [CreditCardPayment]
 *     responses:
 *       201:
 *         description: Credit card payment updated
 *       400:
 *         description: Bad request - Invalid data
 *       403:
 *         description: CORS error or forbidden
 */