import pool from '../db/db';

const Books = {
    find: async( params ) => {

      let where = '';
      if( params.where.columns.length ){
        where = 'WHERE ' + params.where.columns.map((column)=>{ return `\`${column}\`=?`}).join(' AND ');
      }

      const order = params.order.join(', ');

      const books = await pool.query(
        `SELECT * FROM books ${where} ORDER BY ${order} LIMIT ${params.skip}, ${params.limit}`, params.where.values
      );

      return books
    },
    createBook: async( book ) => {
      try {

        const check = await pool.query(
          "SELECT id FROM books WHERE `title`=? AND `description` = ? AND `image` = ? AND `date` = ? AND `autor` = ?", [book.title, book.description, book.image, book.date, book.autor]
        );

        if( check.length ) {
          return check[0].id;
        }

        let newBook = await pool.query(
          "INSERT INTO `books`(`title`,`description`,`image`, `date`, `autor`) VALUES (?,?,?,?,?)", [book.title, book.description, book.image, book.date, book.autor]
        );
        return newBook.insertId;
      } catch (error) {
        return 0;
      }
    },
    getOne: async( id ) => {
        const books = await pool.query(
          "SELECT * FROM books WHERE id=?", [id]
        );

        return books;
    },
    update: async( id, data ) => {
      try {
        let values = [];
        let columns = [];

        let sql = "UPDATE `books` SET ";

        if( data.title ){
          columns.push('`title`=?');
          values.push( data.title );
        }

        if( data.description ){
          columns.push('`description`=?');
          values.push( data.description );
        }

        if( data.image ){
          columns.push('`image`=?');
          values.push( data.image );
        }

        if( data.date ){
          columns.push('`date`=?');
          values.push( data.date );
        }

        if( data.autor ){
          columns.push('`autor`=?');
          values.push( data.autor );
        }

        values.push( id );

        await pool.query(
          "UPDATE `books` SET " + columns.join(', ') + "  WHERE id=?", values
        );


        return 1
      } catch (error) {
        return 0;
      }

    },
}


export default Books;
