export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="hl-photo-hero hl-photo-hero-privacy relative isolate overflow-hidden bg-[#080f24] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#e8b84b]">
            <span className="h-px w-8 bg-current opacity-60" />
            Higher Learning
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-normal text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
            Higher Learning respects the privacy of students and families who contact or enroll with our tutoring center.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[8px] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,32,68,0.08)] md:p-10">
          <div className="space-y-8 text-slate-600">
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-normal text-[#0f2044]">Information We Collect</h2>
              <p className="mt-3 leading-8">
                We may collect contact details, student grade level, program interests, scheduling preferences, and messages submitted through our website or direct communication channels.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-normal text-[#0f2044]">How We Use Information</h2>
              <p className="mt-3 leading-8">
                Information is used to respond to inquiries, coordinate enrollment, provide tutoring services, share schedule updates, and improve family communication.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-normal text-[#0f2044]">Contact</h2>
              <p className="mt-3 leading-8">
                For privacy questions, contact Higher Learning at higherlearningny@yahoo.com or 212-941-0695.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
