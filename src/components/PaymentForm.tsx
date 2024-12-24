// src/components/PaymentForm.tsx
import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { usePayment } from '../context/PaymentContext';
import { StripeError } from '@stripe/stripe-js';


export function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { loading, setLoading, setError } = usePayment();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage('');

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-complete`,
      },
    });

    if (error) {
      setMessage(error.message ?? 'Payment failed');
      setError(Error(error.message));
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <PaymentElement />
      <button 
        type="submit" 
        disabled={!stripe || loading}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {message && <div className="text-red-500">{message}</div>}
    </form>
  );
}