const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    try {
        if (!event.body) {
            return {
                statusCode: 400,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: JSON.stringify({
                    error: 'Missing request body'
                })
            };
        }

        const { amount, currency = 'usd', orderData } = JSON.parse(event.body);

        if (!amount || amount <= 0) {
            return {
                statusCode: 400,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: JSON.stringify({
                    error: 'Invalid amount'
                })
            };
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents
            currency,
            metadata: {
                orderId: orderData.orderId,
                restaurantId: orderData.restaurantId
            },
            automatic_payment_methods: {
                enabled: true
            }
        });

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify({
                clientSecret: paymentIntent.client_secret
            })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify({
                error: error.message
            })
        };
    }
};