/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Category management
 */

/**
 * @swagger
 * /categories/:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Category List
 */

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get category by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: Category id
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Category by id
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: POST created category
 *     requestBody:
 *      description: Category data
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CategoriesInterface'
 *     tags: [Categories]
 *     responses:
 *       201:
 *         description: Category created
 *       400:
 *         description: Bad request - Invalid data
 *       403:
 *         description: CORS error or forbidden
 */

/**
 * @swagger
 * /categories/{category_id}:
 *   put:
 *     summary: PUT updated account
 *     parameters:
 *     - in: path
 *       name: category_id
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
 *            $ref: '#/components/schemas/CategoriesInterface'
 *     tags: [Categories]
 *     responses:
 *       201:
 *         description: Category updated
 *       400:
 *         description: Bad request - Invalid data
 *       403:
 *         description: CORS error or forbidden
 */