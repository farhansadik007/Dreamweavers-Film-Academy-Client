import SectionTitle from "../../../components/SectionTitle.jsx/SectionTitle";
import usePaymentHistory from "../../../hooks/usePaymentHistory";

const PaymentHistory = () => {
    const [paymentHistory] = usePaymentHistory();
    console.log(paymentHistory);
    return (
        <div className="w-full">
            <SectionTitle heading="Payment History" />
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((ph, index) => <tr
                                key={ph._id}
                            >
                                <td>{index + 1}</td>
                                <td>{ph.email}</td>
                                <td>{ph.transactionId}</td>
                                <td>{ph.date}</td>
                                <td>{ph.quantity}</td>
                                <td>${ph.price}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;