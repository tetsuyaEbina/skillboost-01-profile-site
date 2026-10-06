const skills = [
  {
    category: "BACKEND",
    title: "業務に沿ったシステム開発",
    description:
      "業務の流れを整理し、日々の作業を支えるWebシステムを設計・実装します。",
    technologies: ["PHP", "Laravel", "Python", "Django"],
  },
  {
    category: "FRONTEND",
    title: "使いやすい画面づくり",
    description:
      "必要な情報を把握しやすく、迷わず操作できる画面を目指します。",
    technologies: ["JavaScript", "Vue.js", "Bootstrap"],
  },
  {
    category: "DATA & CLOUD",
    title: "データ処理と運用",
    description:
      "データの取り込み・集計から、クラウド環境での運用まで対応します。",
    technologies: ["MySQL", "AWS", "Git", "GitHub"],
  },
];

const approaches = [
  {
    number: "01",
    title: "業務を理解する",
    description:
      "目的や利用場面を確認し、何を作るべきかを整理します。",
  },
  {
    number: "02",
    title: "運用まで考える",
    description:
      "公開後の更新や日々の運用を見据え、保守しやすい構成を考えます。",
  },
  {
    number: "03",
    title: "わかりやすく伝える",
    description:
      "技術的な内容も、背景と理由を含めて説明することを大切にしています。",
  },
];

// Homeコンポーネントは、**「このページの内容を表示する」**という役割を持つ
// layout.tsxで定義したRootLayoutコンポーネントの中に、Homeコンポーネントの内容が表示される
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4"
      >
        本文へ移動
      </a>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <a href="#home" className="font-bold tracking-tight">
            TETSUYA EBINA<span className="text-teal-700">.</span>
          </a>
          <nav aria-label="メインナビゲーション">
            <ul className="flex flex-wrap gap-5 text-sm text-slate-600">
              <li>
                <a className="nav-link" href="#about">自己紹介</a>
              </li>
              <li>
                <a className="nav-link" href="#skills">スキル</a>
              </li>
              <li>
                <a className="nav-link" href="#experience">経歴</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="scroll-mt-8 bg-slate-50">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow">WEB ENGINEER / FREELANCE</p>
              <h1 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
                業務を理解し、
                <br />
                使い続けられる
                <br />
                システムを。
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Webシステムの開発・運用に取り組む、蛯名哲也です。
                業務とデータに向き合い、使う人の仕事を支える仕組みを作っています。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#skills"
                  className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  スキルを見る
                </a>
                <a
                  href="#experience"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-slate-100"
                >
                  経歴を見る
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div
                aria-hidden="true"
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-50 text-3xl font-bold text-teal-700"
              >
                TE
              </div>
              <p className="mt-8 text-2xl font-bold">蛯名 哲也</p>
              <p className="mt-2 text-sm text-slate-500">Tetsuya Ebina</p>
              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="text-sm leading-7 text-slate-600">
                  個人事業主 / Webエンジニア
                  <br />
                  Webシステム開発・運用 / エンジニア講師
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-container">
          <p className="eyebrow">ABOUT</p>
          <h2 className="section-title">仕事の背景まで理解する。</h2>
          <div className="mt-6 max-w-3xl space-y-4 leading-8 text-slate-600">
            <p>
              個人事業主としてクライアントと直接契約し、
              アミューズメント業界のデータを扱うWebシステムの開発・運用に携わっています。
            </p>
            <p>
              日々のデータ処理や集計、管理画面の開発など、
              業務を継続して支えるためのシステムづくりに取り組んでいます。
              また、エンジニア講師として、実装の背景や仕組みを伝える活動も行っています。
            </p>
          </div>
        </section>

        <section id="skills" className="border-y border-slate-200 bg-slate-50">
          <div className="section-container">
            <p className="eyebrow">SKILLS</p>
            <h2 className="section-title">開発から運用まで。</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {skills.map((skill) => (
                <article
                  key={skill.category}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <p className="text-xs font-bold tracking-widest text-teal-700">
                    {skill.category}
                  </p>
                  <h3 className="mt-4 text-xl font-bold">{skill.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {skill.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="使用技術">
                    {skill.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-container">
          <p className="eyebrow">EXPERIENCE</p>
          <h2 className="section-title">取り組んでいること。</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-teal-700">開発・運用</p>
              <h3 className="mt-3 text-xl font-bold">
                業務Webシステム・データ基盤
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Laravel・MySQLを中心に、データの取り込み、集計、
                API連携、管理画面の開発とAWS環境での運用に取り組んでいます。
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-teal-700">教育</p>
              <h3 className="mt-3 text-xl font-bold">エンジニア講師</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                環境構築やGitの基本操作から、アプリケーションの制作・公開までを支援。
                手を動かしながら、仕組みを理解できる学習を目指しています。
              </p>
            </article>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="section-container">
            <p className="text-xs font-bold tracking-[0.2em] text-teal-300">
              APPROACH
            </p>
            <h2 className="section-title">大切にしていること。</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {approaches.map((approach) => (
                <article key={approach.number}>
                  <p className="text-sm font-semibold text-teal-300">
                    {approach.number}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{approach.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {approach.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 text-center text-xs text-slate-500">
        © Tetsuya Ebina
      </footer>
    </>
  );
}
