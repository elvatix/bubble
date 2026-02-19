"use client";

export default function QuoteBanner() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-[900px] mx-auto">
        <div className="bg-gradient-to-br from-[#f0f7d4] via-white to-[#f0f7d4] border-3 border-[#8db600] rounded-3xl p-12 grid grid-cols-[1fr_auto] gap-8 items-center max-md:grid-cols-1 max-md:p-6">
          <div>
            <p className="text-[clamp(20px,2.5vw,28px)] font-bold text-[#8db600] leading-snug mb-4">
              &ldquo;Ik besteed honderden uren aan het onderzoeken van recruitment tech en Elvatix is lichtjaren vooruit.&rdquo;
            </p>
            <p className="font-bold text-[15px] text-gray-900">Kevin Coenen</p>
            <p className="text-[13px] text-gray-400">Oprichter, Elvatix</p>
          </div>
          <div className="w-[100px] h-[100px] rounded-full bg-[#e8e0f0] flex items-center justify-center shrink-0 max-md:mx-auto">
            <span className="text-5xl opacity-50">👤</span>
          </div>
        </div>
      </div>
    </section>
  );
}
