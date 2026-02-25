"use client";
import { UserIcon } from '@/components/icons/Icons';

export default function QuoteBanner() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[900px] mx-auto">
        <div className="bg-gradient-to-br from-green-bg via-white to-green-bg border-3 border-green rounded-3xl p-12 grid grid-cols-[1fr_auto] gap-8 items-center max-md:grid-cols-1 max-md:p-6">
          <div>
            <p className="text-[clamp(20px,2.5vw,28px)] font-bold text-green leading-snug mb-4">
              &ldquo;Recruitment draait om mensen. Niet om het eindeloos typen van berichten. Met de juiste tools besteed je je tijd aan wat ertoe doet: het gesprek.&rdquo;
            </p>
            <p className="font-bold text-[15px] text-text-primary">Kevin Coenen</p>
            <p className="text-[13px] text-text-light">Co-founder, Elvatix</p>
          </div>
          <div className="w-[100px] h-[100px] rounded-full bg-[#e8e0f0] flex items-center justify-center shrink-0 max-md:mx-auto">
            <span className="opacity-50"><UserIcon size={48} /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
