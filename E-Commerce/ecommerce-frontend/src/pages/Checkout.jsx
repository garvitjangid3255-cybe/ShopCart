import React, { useState } from 'react'

function Checkout({ cart, clearCart }) {

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        address: "",
        city: "",
        pinCode: ""
    })

    const [orderPlaced, setOrderPlaced] = useState(false)


    const totalPrice = cart.reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    )
    if (orderPlaced) {
        return (
            <section className=' px-6 py-10 text-center'>
                <h1 className=' text-3xl font-bold text-green-500'>
                    Order Placed Successfully!
                </h1>

                <p className=' mt-5 text-gray-600'>
                    Thank you for order.
                </p>
            </section>
        )
    }
    return (
        <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <h1 className=' mb-8 text-3xl font-bold'>
                Checkout 🛒
            </h1>

            <h2 className=' mb-3 text-xl font-semibold'>
                Order Summery
            </h2>


            {cart.map((product) => (
                <div
                    key={product.id}
                    className="mb-4 flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                    <div>
                        <h3 className=' mt-2 text-xl font-semibold'>
                            {product.name}
                        </h3>

                        <p className=' mt-2 font-bold'>
                            Quantity:{product.quantity}
                        </p>
                    </div>
                    <p className="font-semibold">
                        ₹{product.price * product.quantity}
                    </p>
                </div>

            ))}

            <h1 className=' mt-6 border-t pt-5 text-2xl font-bold'>
                Total:₹{totalPrice}
            </h1>


            {/* Address Form validation */}
            <div className=' mt-10 border-t pt-6'>
                <h2 className=' mb-5 text-2xl font-bold'>
                    Delivery Address 📦
                </h2>

                <form className=' space-y-4'
                    onSubmit={(e) => {
                        e.preventDefault();

                        // 1. Full Name validation
                        if (!formData.fullName.trim()) {
                            alert("Please enter your full name");
                            return;
                        }

                        // 2. Mobile Number validation
                        if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
                            alert("Please enter a valid 10-digit mobile number");
                            return;
                        }

                        // 3. Address validation
                        if (!formData.address.trim()) {
                            alert("Please enter your full address");
                            return;
                        }

                        // 4. City validation
                        if (!formData.city.trim()) {
                            alert("Please enter your city");
                            return;
                        }

                        // 5. PIN Code validation
                        if (!/^\d{6}$/.test(formData.pinCode)) {
                            alert("Please enter a valid 6-digit PIN code");
                            return;
                        }

                        // All validations passed
                        console.log("Order submitted:", formData);

                        clearCart();
                        setOrderPlaced(true);
                    }}
                >
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className=' w-full rounded-lg border p-3'
                    />

                    <input
                        type="tel"
                        placeholder='Mobile Number'
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        required
                        className='w-full rounded-lg border p-3'
                    />

                    <textarea
                        placeholder='Full Address'
                        rows={4}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        className='w-full rounded-lg border p-3'
                    />

                    <input
                        type="text"
                        placeholder='Enter City'
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className='w-full rounded-lg border p-3'
                    />
                    <input
                        type="text"
                        placeholder='PIN Code'
                        value={formData.pinCode}
                        onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                        required
                        className='w-full rounded-lg border p-3'
                    />

                    <button
                        type='submit'
                        className='w-full rounded-lg border p-3 font-semibold  hover:bg-blue-700'
                    >
                        Pleace Order
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Checkout


// IMPORTENT QUES
/* Bro, maan lo user pehle apna naam Garvit likhta hai, phir mobile number enter karta hai. ...formData use karne par naam kyun nahi hatta?
Ans “...formData is used to preserve the existing properties of the state object, while updating only the field whose value has changed.”
----------------------------------

Yaad rakhna bro: onChange input change handle karta hai, aur setFormData state update karta hai. Dono ka kaam alag hai.
----------------------

Ab ek important distinction, bro 🧠
React form mein:
- value batata hai input mein kya dikhna chahiye.
- onChange input change hone par kya karna hai, ye batata hai.
- setFormData state update karta hai.
- required khaali field submit hone se rokne mein help karta hai.
---------------------------------------
Samjho kaise kaam karta hai:
- e.preventDefault() — page reload hone se rokta hai.
- /^[6-9]\d{9}$/ — mobile number mein 10 digits check karta hai; pehla digit 6–9 hona chahiye.
- /^\d{6}$/ — PIN code mein exactly 6 digits check karta hai.
- .test(...) — check karta hai ki value pattern se match karti hai ya nahi.
- return — validation fail hote hi aage ka code rok deta hai.
------------------------------------------

formData.fullName — user ka entered naam.
.trim() — text ke start aur end ke extra spaces hata kar check karta hai.
! — check karta hai ki value khaali hai ya nahi.
alert() — user ko error message dikhata hai.
return — validation fail hone par handler ko aage chalne se rokta hai.
*/