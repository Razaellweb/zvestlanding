import React from 'react';
import TestimonialCard from '../components/testimonial-card';
import FaqItem from '../components/faq-item';

export default function Page() {
  return (
    <>
      <section className="hero-gradient rounded-3xl p-6 md:p-12 lg:p-16 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-[4rem] leading-tight font-extrabold">Smart, secure digital savings — invest in your future with ease</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">Zvest helps young professionals and emerging market savers grow their money with flexible savings plans, curated investments, and bank-grade security. Get started in minutes.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/signup" className="btn-primary">Get started — open an account</a>
              <a href="#features" className="btn-ghost">See plans</a>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold">120k+</div>
                <div className="text-sm text-muted-foreground">Happy users</div>
              </div>

              <div>
                <div className="text-2xl font-bold">$45M+</div>
                <div className="text-sm text-muted-foreground">Saved & invested</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="card p-8">
              <div className="text-sm text-muted-foreground">Savings plan preview</div>
              <div className="mt-4 bg-gradient-to-r from-zvest-700 to-accent-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Goal</div>
                    <div className="font-semibold">Emergency Fund</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs opacity-90">Progress</div>
                    <div className="font-semibold">46%</div>
                  </div>
                </div>
                <div className="h-3 bg-white/30 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '46%' }} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-sm">
                  <div className="text-xs text-muted-foreground">Next payout</div>
                  <div className="font-medium">Sept 10</div>
                </div>
                <div className="text-sm">
                  <div className="text-xs text-muted-foreground">Interest</div>
                  <div className="font-medium">5.2% p.a.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mb-12">
        <h2 className="text-2xl font-bold">Features built for growing your savings</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Flexible plans, curated investments, and transparent fees — all designed for easy mobile use.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="font-semibold">Flexible savings plans</div>
            <div className="mt-2 text-sm text-muted-foreground">Short- and long-term goals with auto-save and rules-based transfers.</div>
          </div>

          <div className="card">
            <div className="font-semibold">Curated investments</div>
            <div className="mt-2 text-sm text-muted-foreground">Easy-to-understand options with transparent fees and projected returns.</div>
          </div>

          <div className="card">
            <div className="font-semibold">Bank-grade security</div>
            <div className="mt-2 text-sm text-muted-foreground">Encrypted accounts, multi-factor auth, and regulatory compliance.</div>
          </div>
        </div>
      </section>

      <section id="social" className="mb-12">
        <h3 className="text-lg font-semibold">Trusted by thousands</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div className="card text-center py-6">Featured in FinanceToday</div>
          <div className="card text-center py-6">Trusted by Acme Bank</div>
          <div className="card text-center py-6">Featured in TechNews</div>
          <div className="card text-center py-6">Securely audited</div>
        </div>
      </section>

      <section id="testimonials" className="mb-12">
        <h2 className="text-2xl font-bold">What our users say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard name="Ada O" role="Designer" quote="Zvest helped me build an emergency fund in 6 months — simple and reliable." />
          <TestimonialCard name="Kwame B" role="Engineer" quote="The auto-save rules are a game-changer. I finally save without thinking about it." />
          <TestimonialCard name="Lina P" role="Freelancer" quote="Fast transfers and clear fees — feels safe and modern." />
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FaqItem question="Is Zvest safe?" answer="Yes — we use bank-grade encryption, multi-factor authentication and follow regulatory best practices." />
          <FaqItem question="How do I withdraw my savings?" answer="Withdraw anytime to your linked bank account. Some plans may have terms — check the plan details." />
          <FaqItem question="What are the fees?" answer="We charge transparent service fees and a small commission on investment returns. No hidden charges." />
          <FaqItem question="How do investment options work?" answer="Curated portfolios are presented with historical performance and projected returns. You choose risk levels and can track performance in-app." />
        </div>
      </section>

      <section id="contact" className="mb-12">
        <div className="card">
          <h3 className="text-xl font-bold">Ready to get started?</h3>
          <p className="text-sm text-muted-foreground mt-2">Open an account in minutes and start saving with confidence.</p>
          <div className="mt-4 flex gap-3">
            <a href="/signup" className="btn-primary">Get started — open an account</a>
            <a href="#faq" className="btn-ghost">Contact support</a>
          </div>
        </div>
      </section>
    </>
  );
}
