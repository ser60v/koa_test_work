import Books from '../models/books';

export default class testService {

  async find( query ) {

    let params = {
      order: [ 'id ASC' ],
      where: {
        columns: [],
        values: []
      },
      limit: 10,
      skip: 0
    }

    if( query.limit && query.limit > 0 ){
      if( query.limit < 500  ) {
        params.limit = parseInt( query.limit );
      } else {
        params.limit = 500;
      }
    }

    if( query.order ){
      params.order = query.order.split(',').filter( (order) => {
        let set = order.split(':');
        if( set.length !== 2 ) return false;
        if( !['id', 'title', 'description', 'image', 'date', 'autor'].includes( set[0].toLowerCase() ) ) return false;
        if( !['ASC', 'DESC'].includes( set[1].toUpperCase()) ) return false;

        return true;
      }).map(
        (order) => {
          let [column, type] = order.split(':');
          return column.toLowerCase() + ' ' + type.toUpperCase()
        });
    }

    if( query.skip ){
        params.skip = parseInt( query.start );
    }


    // where

    if( query.title ){
      params.where.columns.push( 'title' )
      params.where.values.push( query.title )
    }

    if( query.description ){
      params.where.columns.push( 'description' )
      params.where.values.push( query.description )
    }

    if( query.image ){
      params.where.columns.push( 'image' )
      params.where.values.push( query.image )
    }

    if( query.date ){
      params.where.columns.push( 'date' )
      params.where.values.push( query.date )
    }

    if( query.autor ){
      params.where.columns.push( 'autor' )
      params.where.values.push( query.autor )
    }

    const books = await Books.find( params );
    if( books === 0 ) return { error: 'invalid request' };

    return books
  }
  async create( data ) {

    if( !data.title )       return { error: 'missing title' };
    if( !data.description ) return { error: 'missing description' };
    if( !data.image )       return { error: 'missing image' };
    if( !data.date )        return { error: 'missing date' };
    if( !data.autor )       return { error: 'missing autor' };

    const newBook = {
      title:        data.title,
      description:  data.description,
      image:        data.image, //Если подразумевалось с подкачкой изображений - это добавить можно, такие контрроллеры писал, только зачем?
      date:         data.date,
      autor:        data.autor
    };

    const id = await Books.createBook( newBook );
    const books = await Books.getOne( id );

    if( !books.length ) return { error: 'invalid data' };

    return books[0];

  }

  async update( id, data ) {

    if( !data.title && !data.description && !data.image && !data.date && !data.autor ) return { error: 'missing update data' };

    const update = await Books.update(id, data);

    if( !update ) return { error: 'invalid data' };

    const books = await Books.getOne( id );

    if( !books.length )return { error: 'invalid id' };

    return books[0];

  }

}
