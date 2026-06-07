export type PaystackInitInput = {
  email: string;
  amount: number; // in Rands (we convert later if needed)
  reference: string;
};

export type PaystackInitResponse = {
  status: boolean;
  authorization_url: string;
  reference: string;
};

/**
 * NOTE:
 * This is a frontend-ready Paystack wrapper structure.
 * Actual secret key + verification will be added in backend/API routes later.
 */

export async function initializePaystackPayment(
  input: PaystackInitInput
): Promise<PaystackInitResponse | null> {
  try {
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_PAYSTACK_PUBLIC_KEY`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: input.email,
        amount: input.amount * 100, // Paystack uses kobo-like format
        reference: input.reference,
        currency: "ZAR"
      })
    });

    const data = await res.json();

    if (!data.status) return null;

    return {
      status: data.status,
      authorization_url: data.data.authorization_url,
      reference: data.data.reference
    };
  } catch (error) {
    console.error("Paystack init error:", error);
    return null;
  }
}
