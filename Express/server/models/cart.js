import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        items: [
            {
                productId: {
                    type: Number,
                    required: true
                },
                name: {
                    type: String,
                    required: true

                },
                price: {
                    type: Number,
                    required: true
                },
                image: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    { timestamps: true }
)

const Cart = mongoose.model('Cart', cartSchema)
export default Cart