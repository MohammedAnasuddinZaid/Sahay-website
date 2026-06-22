import SectionKicker from './SectionKicker.jsx';

export default function BlogSection({ content }) {
  const blogPosts = content.blog.posts.map(([title, category, date, summary]) => ({ title, category, date, summary }));
  const [featured, ...rest] = blogPosts;

  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionKicker eyebrow={content.blog.eyebrow} title={content.blog.title} copy={content.blog.copy} />

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="group min-h-[460px] rounded-[2rem] border border-cream/10 bg-cream p-8 text-ink transition hover:-translate-y-1">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-clay">{featured.category} · {featured.date}</p>
            <h3 className="mt-20 max-w-2xl font-display text-5xl font-bold leading-tight tracking-normal sm:text-7xl">{featured.title}</h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/68">{featured.summary}</p>
            <span className="mt-10 inline-block text-sm font-black uppercase tracking-[0.22em] text-ember">{content.buttons.read}</span>
          </article>

          <div className="grid gap-5">
            {rest.map((post, index) => (
              <article key={post.title} className={`rounded-[2rem] border border-cream/10 bg-cream/8 p-7 ${index === 1 ? 'lg:-ml-12' : ''}`}>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-gold">{post.category} · {post.date}</p>
                <h3 className="mt-8 font-display text-4xl font-bold leading-tight tracking-normal">{post.title}</h3>
                <p className="mt-5 text-sm leading-6 text-cream/64">{post.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
