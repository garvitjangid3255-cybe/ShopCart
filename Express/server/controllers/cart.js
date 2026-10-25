import Cart from '../models/cart.js'
// import second from '../models/cart.js'

// Logged user ka cart fetch karna.
export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id })

        if (!cart) {
            return res.status(200).json({
                message: "Cart fetch successfully...",
                items: []
            })
        }

        res.status(200).json({
            message: "Cart fetch successfully...",
            items: cart.items
        })
    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

// Logged-in user ka cart save/update karna
export const saveCart = async (req, res) => {
    try {
        const { items } = req.body;
        console.log("Logged-in user:", req.user);
        console.log("User ID:", req.user.id);
        console.log("Items:", items);
        if (!Array.isArray(items)) {
            return res.status(400).json({
                message: "Item must be an array..."
            })
        }

        const cart = await Cart.findOneAndUpdate(
            { userId: req.user.id },
            {
                $set: { items },
                $setOnInsert: { userId: req.user.id }
            },
            {
                returnDocument: 'after',
                upsert: true,
                runValidators: true
            }
        );

        res.status(200).json({
            message: 'Cart saved successfully',
            items: cart.items
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: 'Something went wrong'
        });
    }
} 