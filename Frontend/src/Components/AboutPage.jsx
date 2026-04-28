const FEATURES = [
  {
    icon: "🛒",
    title: "Ready-made projects",
    desc: "Browse a curated marketplace of production-ready projects. Buy instantly and deploy for your business or academic needs without starting from scratch.",
    tag: "Marketplace",
  },
  {
    icon: "🐛",
    title: "Debug sessions",
    desc: "Book a 1-on-1 session with an expert who will dive into your codebase, identify issues, and get your project working exactly as intended.",
    tag: "Live support",
  },
  {
    icon: "💡",
    title: "Idea to reality",
    desc: "Have an idea but don't know where to start? Post your concept, our team verifies it, and we build a fully custom solution tailored to your requirements.",
    tag: "Custom build",
  },
  {
    icon: "🧭",
    title: "Project navigator",
    desc: "Get end-to-end guidance from experts — from choosing the right tech stack to selecting the best hosting solution. Your roadmap from zero to deployed.",
    tag: "Mentorship",
  },
];

const STATS = [
  { value: "500+", label: "Projects Need to Deliver" },
  { value: "1.2k+", label: "Students requiring assistance" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "50+", label: "Expert mentors" },
];

const STACK = [
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React.js", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "Express.js", color: "#888888" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "Framer Motion", color: "#9F7AEA" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" }
];

const STEPS = [
  { num: "01", title: "Create account", desc: "Sign up and get role-based access to all platform features." },
  { num: "02", title: "Choose a service", desc: "Browse projects, book a session, post an idea, or start Navigator." },
  { num: "03", title: "Connect with experts", desc: "Our verified experts step in to assist, build, or guide you." },
  { num: "04", title: "Ship your project", desc: "Receive your deliverable and launch with confidence." },
];

const TEAM = [
  { name: "Sudeep N Patil", role: "Founder & lead developer", initial: "S" },
  { name: "Code Mentor Team", role: "Full-stack engineers", initial: "C" },
  { name: "Expert Mentors", role: "Industry specialists", initial: "E" },
];

const CHECKLIST = [
  "Goal-oriented project delivery",
  "Role-based secure access control",
  "Expert mentors available on-demand",
  "Trusted by students and businesses",
  "Full project management support",
  "Real-time guidance and support",
];
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 max-w-4xl mx-auto px-6 pb-10 pt-10">
      <div className="pt-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 border border-gray-200 px-3 py-1 rounded-full bg-gray-50 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
          About Code Mentor
        </div>
        <h1 className="text-4xl font-medium leading-snug tracking-tight mb-4">
          Where Students &amp; Businesses{" "}
          <span className="text-yellow-600">Build With Confidence</span>
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-7">
          Code Mentor bridges the gap between ideas and working software —
          through ready-made projects, expert debugging sessions, custom builds,
          and guided mentorship.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/Project" className="px-6 py-2.5 rounded-lg bg-yellow-600 text-white text-sm font-medium hover:bg-yellow-500 transition-colors">
            Explore platform
          </Link>
          <Link to="/Home" className="px-6 py-2.5 rounded-lg bg-white text-gray-800 text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            Watch demo
          </Link>
        </div>
      </div>

      <hr className="border-t border-gray-100 mt-10" />

      <div className="pt-14">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
          Aiming to Achive numbers
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STATS.map((s, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-center">
              <div className="text-3xl font-medium text-yellow-600">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1 font-mono">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-100 mt-10" />

      <div className="pt-14">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-5">
          Our mission
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-medium mb-4 leading-snug">
              Making software development accessible
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              We believe everyone with a great idea deserves the technical
              support to bring it to life. Whether you're a student learning the
              ropes or a business owner with a vision — Code Mentor provides the
              expertise you need.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              From purchasing production-ready projects to booking expert debug
              sessions, our platform is the all-in-one technical partner for
              your journey.
            </p>
          </div>
          <ul className="divide-y divide-gray-100">
            {CHECKLIST.map((item, i) => (
              <li key={i} className="flex items-center gap-3 py-2.5 text-sm text-gray-500">
                <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 inline-block" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-100 mt-10" />

      <div className="pt-14">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
          Platform features
        </p>
        <h2 className="text-2xl font-medium mb-7 leading-snug">
          Everything you need, all in one place
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map((f, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="w-9 h-9 rounded-lg bg-yellow-50 flex items-center justify-center text-base">
                  {f.icon}
                </span>
                <span className="text-xs font-mono text-yellow-800 bg-yellow-50 px-3 py-0.5 rounded-full">
                  {f.tag}
                </span>
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1.5">{f.title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-100 mt-10" />

      <div className="pt-14">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
          Built with
        </p>
        <h2 className="text-2xl font-medium mb-2 leading-snug">Modern tech stack</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Powered by industry-standard technologies for performance, scalability,
          and developer experience.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {STACK.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-mono text-xs text-gray-500 border border-gray-100 bg-gray-50 px-4 py-1.5 rounded-full"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: s.color }}
              />
              {s.name}
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-100 mt-10" />

      <div className="pt-14">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
          Process
        </p>
        <h2 className="text-2xl font-medium mb-7 leading-snug">
          How Code Mentor works
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STEPS.map((s, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-5 text-center bg-white">
              <div className="text-xs font-mono text-yellow-500 mb-3">{s.num}</div>
              <div className="text-sm font-medium text-gray-800 mb-1.5">{s.title}</div>
              <div className="text-xs text-gray-400 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-100 mt-10" />

      <div className="pt-14">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
          The people
        </p>
        <h2 className="text-2xl font-medium mb-7 leading-snug">
          Behind Code Mentor
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TEAM.map((t, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-6 text-center bg-gray-50">
              <div className="w-11 h-11 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-700 text-base font-medium mx-auto mb-3">
                {t.initial}
              </div>
              <div className="text-sm font-medium text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-400 font-mono mt-1">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 border border-gray-100 rounded-2xl p-10 text-center bg-gray-50">
        <div className="text-2xl font-medium text-gray-900 mb-2">
          Ready to build something great?
        </div>
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto mb-7">
          Join hundreds of students and businesses who've turned their ideas
          into live, working products with Code Mentor.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="px-6 py-2.5 rounded-lg bg-yellow-600 text-white text-sm font-medium hover:bg-yellow-500 transition-colors">
            Start your journey
          </button>
          <Link to="/Project" className="px-6 py-2.5 rounded-lg bg-white text-gray-800 text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
            Browse projects
          </Link>
        </div>
      </div>

    </div>
  );
}