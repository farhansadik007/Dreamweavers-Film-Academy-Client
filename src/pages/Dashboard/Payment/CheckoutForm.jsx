import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FcMoneyTransfer } from "react-icons/fc";

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        if (card === null) return;

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) setCardError(error.message);
        else setCardError('');

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            }
        )
        if (confirmError) console.log(confirmError)

        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartClasses: cart.map(item => item._id),
                classes: cart.map(item => item.classId),
                classNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res)
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }
    return (
        <div className="flex justify-center">

            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <div className="btn btn-wide btn-warning my-6">Total Price: ${price}</div>
                </div>
                <CardElement className="lg:mx-48 my-10"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex justify-center">
                    <button className="btn btn-wide btn-outline btn-accent mt-12" type="submit" disabled={!stripe || !clientSecret || processing}>
                        <FcMoneyTransfer size={20}/> Pay
                    </button>
                </div>
                {cardError && <p className="text-red-500">{cardError}</p>}
                {transactionId && <p className="text-green-500 btn mt-12">Transaction Successful! transactionId: ${transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;