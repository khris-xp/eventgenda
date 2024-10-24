"use client";
import { useAuth } from "@/hooks/useAuth";
import { paymentService } from "@/services/payment.service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const router = useRouter();
  const { userProfile } = useAuth();
  const [coinAmount, setCoinAmount] = useState(0);

  const handlePaymentService = async () => {
    if (userProfile?.data._id) {
      const paymentResponse = await paymentService.createPayment({
        user: userProfile.data._id,
        total: Math.round(coinAmount * 1.1),
        status: "Pending",
      });

      if (paymentResponse.success) {
        router.push(paymentResponse.data.session.url);
      }
    }
  };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Payment
          </h2>
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form
              action="#"
              className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
            >
              <div className="mb-6  gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="full_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Amount Coin
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Amount Coin"
                    value={coinAmount}
                    onChange={(e) => setCoinAmount(parseInt(e.target.value))}
                    required
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handlePaymentService}
                className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Pay now
              </button>
            </form>

            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Coin Amount
                    </dt>
                    <div className="text-base font-medium text-gray-900 dark:text-white">
                      {coinAmount} coin
                    </div>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Coin Price Per Coin
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      1 Coin = 1 Bath
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Fee
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {coinAmount * 0.1} Bath
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    {Math.round(coinAmount * 1.1)} Bath
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
