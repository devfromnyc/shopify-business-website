import React, { useState, useEffect, useRef } from "react";
import { Icon } from "../snippets/Icon";

const Pricing = ({ plan, plan2, plan3, planPrice, plan2Price, plan3Price }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after first trigger to prevent re-animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the section is fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="pricing"
      ref={sectionRef}
      className="flex flex-col gap-4 px-8 md:px-12 py-8 md:min-h-screen">
      <h2
        className={`text-2xl font-bold text-left mb-4 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}>
        Pricing
      </h2>
      <p
        className={`text-gray-500 text-left mb-4 transition-all duration-700 ease-out delay-100 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <div className="flex flex-col md:flex-row gap-12">
        <div
          className={`flex flex-col gap-4 pricing-card max-w-96 bg-[#355965] rounded-xl shadow-md p-6 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <h3 className="text-xl font-bold text-left mb-4 text-white">
            {plan}
          </h3>
          <p className="text-2xl font-semibold text-left mb-4 text-white">
            <sup>$</sup>
            {planPrice}/month
          </p>
          <p className="text-slate-100 text-left mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <ul className="space-y-8">
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
          </ul>
        </div>
        <div
          className={`flex flex-col gap-4 pricing-card max-w-96 bg-[#355965] rounded-xl shadow-md p-6 transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <h3 className="text-xl font-bold text-left mb-4 text-white">
            {plan2}
          </h3>
          <p className="text-2xl font-semibold text-left mb-4 text-white">
            <sup>$</sup>
            {plan2Price}/month
          </p>
          <p className="text-slate-100 text-left mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <ul className="space-y-8">
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
          </ul>
        </div>
        <div
          className={`flex flex-col gap-4 pricing-card max-w-96 bg-[#355965] rounded-xl shadow-md p-6 transition-all duration-700 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <h3 className="text-xl font-bold text-left mb-4 text-white">
            {plan3}
          </h3>
          <p className="text-2xl font-semibold text-left mb-4 text-white">
            <sup>$</sup>
            {plan3Price}/month
          </p>
          <p className="text-slate-100 text-left mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <ul className="space-y-8">
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </span>
            </li>
            <li className="flex items-center gap-4 text-left">
              <Icon
                iconType="checkmark-rounded"
                borderColor="border-slate-50"
                iconColor="text-white"
              />
              <span className="inline-block text-slate-50">
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
