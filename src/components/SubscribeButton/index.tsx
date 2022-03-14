import { signIn, useSession } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    } else {
      try {
        const response = await api.post("/subscribe");
        console.log(response.data);
        const { sessionId } = response.data;

        const stripe = await getStripeJs();
        console.log(stripe);

        await stripe.redirectToCheckout({ sessionId });
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <>
      <button
        type="button"
        className={styles.subscribeButton}
        onClick={handleSubscribe}
      >
        Subscribe Now
      </button>
    </>
  );
}
