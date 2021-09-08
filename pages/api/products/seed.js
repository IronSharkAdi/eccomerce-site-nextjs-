import nc from 'next-connect'
import Product from '../../../models/products';
import data from '../../../utils/data';
import db from '../../../utils/db';

const handler = nc();

handler.get( async (req, res) => {
    db.connect()
    await Product.insertMany(data.products)
    await db.disconnect();
    res.send("seed success")
})

export default handler;