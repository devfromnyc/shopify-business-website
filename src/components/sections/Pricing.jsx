import React from "react";
import { Icon } from "../snippets/Icon";

const Pricing = ({ plan, plan2, plan3, planPrice, plan2Price, plan3Price }) => {
  return (
    <div className="flex flex-col gap-4 px-12 py-8 md:min-h-screen">
      <h2 className="text-2xl font-bold text-left mb-4">Pricing</h2>
      <p className="text-gray-500 text-left mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex flex-col gap-4 pricing-card max-w-96 bg-[#96bf48] rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-left mb-4 text-white">
            {plan}
          </h3>
          <p className="text-2xl font-semibold text-left mb-4 text-white">
            <sup>$</sup>
            {planPrice}/month
          </p>
          <p className="text-green-100 text-left mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <ul className="space-y-8">
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 pricing-card max-w-96 bg-[#96bf48] rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-left mb-4 text-white">
            {plan2}
          </h3>
          <p className="text-2xl font-semibold text-left mb-4 text-white">
            <sup>$</sup>
            {plan2Price}/month
          </p>
          <p className="text-green-100 text-left mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <ul className="space-y-8">
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 pricing-card max-w-96 bg-[#96bf48] rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-left mb-4 text-white">
            {plan3}
          </h3>
          <p className="text-2xl font-semibold text-left mb-4 text-white">
            <sup>$</sup>
            {plan3Price}/month
          </p>
          <p className="text-green-100 text-left mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <ul className="space-y-8">
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-green-50"
                iconColor="text-green-50"
              />
              <span className="inline-block text-green-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
