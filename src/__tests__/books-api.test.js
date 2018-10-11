import { apiHelper } from './api-helper'
import { throws } from 'smid'

// TIP: if you have more than a handful of tests here
// in can be beneficial to split them into multiple files for
// test speed.
describe('todos API', () => {
  it('can create book', async () => {
    const api = await apiHelper()
    const book = await api.createBook({
      title: 'title',
      description: 'description',
      image: 'image',
      date: '2018-08-10',
      autor: 'autor'
    })

    expect(book.id).toBeDefined()
    expect(book).toEqual(
      expect.objectContaining({
        id:   0,
        title: 'title',
        description: 'description',
        image: 'image',
        date: "2018-08-09T21:00:00.000Z",
        autor: 'autor'
      })
    )
  })

  it('can update book', async () => {
    const api = await apiHelper()

    const book = await api.updateBook(0, {
      title: 'title',
      description: 'description',
      image: 'image',
      date: '2018-08-10',
      autor: 'autor'
    })


    expect(book.id).toBeDefined()
    expect(book).toEqual(
      expect.objectContaining({
        id:   0,
        title: 'title',
        description: 'description',
        image: 'image',
        date: "2018-08-09T21:00:00.000Z",
        autor: 'autor'
      })
    )
  })

  it('can find books', async () => {
    const api = await apiHelper()

    const result = await api.findBooks()
    expect(result).toBeDefined()
  })

})
