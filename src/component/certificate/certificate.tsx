import Image from "next/image";
import { ShieldCheck, Globe, ThumbsUp } from "lucide-react";

export default function CertificateSection() {
  return (
    <section className="w-full py-10 px-4 bg-gradient-to-r from-blue-200 via-white to-blue-300">
      <div className="max-w-7xl mx-auto rounded-lg p-4 sm:p-10 bg-white/60 backdrop-blur-md shadow-xl">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-xl lg:text-5xl font-bold text-[#1f4e79] font-serif">
            Our Business <span className="text-orange-500">Certifications</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto font-serif text-sm sm:text-sm">
            Check out our certifications. We are registered and verified, ensuring trust
            and credibility in our business operations.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5">

          {/* Image - 60% */}
          <div className="flex justify-center lg:col-span-3">
            <div className="w-full max-w-3xl rounded-xl border border-blue-100 bg-white p-2 shadow-lg sm:p-2">
              <Image
                src="/images/duns.png"
                alt="Certificate"
                width={900}
                height={600}
                className="mx-auto h-auto w-full rounded-xl object-contain"
              />
            </div>
          </div>

          {/* Text - 40% */}
          <div className="lg:col-span-2">

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <ShieldCheck className="shrink-0 text-blue-600" />
                <div>
                  <h4 className="text-base font-semibold sm:text-lg">Verified Business</h4>
                  <p className="text-sm text-gray-600">
                    Registered company enhancing business credibility
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="shrink-0 text-blue-600" />
                <div>
                  <h4 className="text-base font-semibold sm:text-lg">Trusted Worldwide</h4>
                  <p className="text-sm text-gray-600">
                    Recognized globally for high reliability standards
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ThumbsUp className="shrink-0 text-blue-600" />
                <div>
                  <h4 className="text-base font-semibold sm:text-lg">Transparent Operations</h4>
                  <p className="text-sm text-gray-600">
                    Certified information for trustworthy partnerships
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
