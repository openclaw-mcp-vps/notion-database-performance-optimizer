export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Notion Power Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Speed Up Your Slow<br />
          <span className="text-[#58a6ff]">Notion Databases</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Notion workspace, scan database schemas, and get a detailed performance report with actionable optimizations — in minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works with any Notion workspace.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Deep Schema Scan", desc: "Analyzes every property, relation, and rollup across your databases." },
            { icon: "⚡", title: "Bottleneck Detection", desc: "Pinpoints slow views, redundant filters, and bloated property stacks." },
            { icon: "📋", title: "Actionable Reports", desc: "Step-by-step fixes with before/after performance estimates." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6 text-sm">Everything you need to optimize Notion</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited database analyses",
              "Notion OAuth — secure, read-only access",
              "Performance reports with priority fixes",
              "View & filter configuration suggestions",
              "Email delivery of reports",
              "Cancel anytime"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Optimizing
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Does this modify my Notion data?",
              a: "No. We use read-only OAuth access. Your data is never modified, only analyzed to generate recommendations."
            },
            {
              q: "What kinds of optimizations does it suggest?",
              a: "We flag redundant properties, over-complex rollups, unindexed filter fields, bloated gallery views, and more — with specific steps to fix each."
            },
            {
              q: "How often can I run analyses?",
              a: "As often as you like. Run a fresh analysis after each optimization to track your improvements over time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Notion Database Performance Optimizer. Not affiliated with Notion.
      </footer>
    </main>
  );
}
