import { createController } from 'awilix-koa'

const api = booksService => ({
  findBooks: async ctx =>
    ctx.ok(await booksService.find(ctx.query)),
  createBook: async ctx =>
    ctx.created(await booksService.create(ctx.request.body)),
  updateBook: async ctx =>
    ctx.ok(await booksService.update(ctx.params.id, ctx.request.body)),
})

export default createController(api)
  .prefix('/books')
  .get('', 'findBooks')
  .post('', 'createBook')
  .patch('/:id', 'updateBook')
