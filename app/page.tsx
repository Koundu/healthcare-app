import PatientForms from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/*TODO:OTP Verification | PassKeyModal */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <p className="ml-2 text-blue-300 text-4xl">Health Pulse</p>
          </div>
          <PatientForms/>
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 HealthPulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image 
        src="/assets/images/onboarding-img.png" 
        height={1000} 
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
        />
    </div>
  );
}
