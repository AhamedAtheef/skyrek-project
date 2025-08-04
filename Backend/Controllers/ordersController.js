import Order from "../models/orders.js";
import Product from "../models/product.js";

export async function CreateOrder(req, res) {
    try {

        if (req.user == null) {
            return res.status(401).json({ message: "please login first" })
        }
        //CBC"00201"
        const latestorder = await Order.find().sort({ date: -1 }).limit(1)
        let orderId = "CBC00202"

        if (latestorder.length > 0) {
            const lastorder = latestorder[0].orderID// "CBC00635"
            const lastorderwithoutPrefix = lastorder.replace("CBC", "")//"00635"
            const lastordernumber = parseInt(lastorderwithoutPrefix)//635
            const newordernumber = lastordernumber + 1//636
            const neworderwithoutprefix = newordernumber.toString().padStart(5, "0")//00636
            orderId = "CBC" + neworderwithoutprefix//"CBC00636" 

        }
        const items = [];
        let total = 0

        if (req.body.items != null && Array.isArray(req.body.items)) {
            for (const item of req.body.items) {
                const product = await Product.findOne({ productId: item.productId });

                if (product == null) {
                    return res.status(404).json({ message: "Product not found" });
                }
                items.push({
                    productId: product.productId,
                    price: product.price,
                    name: product.productname,
                    qty: item.qty
                });
                console.log(items)
                total += product.price * item.qty;
            }


        } else {
            return res.status(404).json({ message: "Product not found" })
        }
        const order = new Order({
            orderID: orderId,
            email: req.user.email,
            name: req.user.firstName + " " + req.user.lastName,
            address: req.body.address,
            phone: req.body.phone,
            items: items,
            total: total,
            status: "Pending"
        })

        const result = await order.save();
        res.json({
            message: "Order Created Successfully",
            result: result
        })
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(500).json({ message: "Failed to create order" });
    }

}

export async function getOrders(req, res) {
    if (req.user == null) {
        return res.status(401).json({ message: "Please Login First" })
    }

    try {
        if (req.user.role == "admin") {
            const orders = await Order.find().sort({ dare: -1 })
            res.json(orders)
        } else {
            const orders = await Order.find({ email: req.user.email })
            res.json(orders)
        }

    } catch (error) {
        console.error("Error fetching orders:", error);
        return res.status(500).json({ message: "Failed to fetch orders" });
    }

}