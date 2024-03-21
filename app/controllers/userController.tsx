import connection from '../../app/utils/db';

export async function getUsers() {
    const [rows] = await connection.query('SELECT * FROM users');
    return rows;
}
  