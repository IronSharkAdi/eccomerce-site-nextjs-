import nc from 'next-connect'
import Product from '../../../models/products';
import db from '../../../utils/db';

const handler = nc();

handler.get( async (req, res) => {
    db.connect()
    const products = await Product.find({})
    await db.disconnect();
    res.send(products)
})

export default handler;