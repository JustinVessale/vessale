
import { createContext, useContext, useState, ReactNode } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

interface PaymentContextType {
  paymentIntent: string | null;
  setPaymentIntent: (intent: string | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: Error | null;
  setError: (error: Error | null) => void;
}


export const PaymentContext = createContext<PaymentContextType>({
  paymentIntent: null,
  setPaymentIntent: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {}
});

interface PaymentProviderProps {
  children: ReactNode;
}

export function PaymentProvider({ children }: PaymentProviderProps) {
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const value: PaymentContextType = {
    paymentIntent,
    setPaymentIntent,
    loading,
    setLoading,
    error,
    setError
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
}

export const usePayment = () => useContext(PaymentContext);