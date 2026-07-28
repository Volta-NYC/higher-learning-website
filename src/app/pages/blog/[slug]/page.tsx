import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  imageSrc?: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

const articles: BlogArticle[] = [
  {
    slug: "nyc-state-test-strategies",
    category: "Study Tips",
    title: "NYC State Test Strategies",
    excerpt: "A practical guide to building stronger reading, writing, math, and test-day habits before New York State exams.",
    sections: [
      {
        heading: "Start with the format, then build stamina",
        paragraphs: [
          "New York State exams reward more than memorization. Students need to read carefully, show mathematical thinking, manage time, and stay calm when a question looks unfamiliar. The strongest preparation starts by helping a student understand the shape of the test: how passages are paired with questions, how multi-step math problems are written, and where careless errors usually happen.",
          "At home, families can make a big difference with short, consistent practice. Ten focused minutes of reading response, vocabulary review, or mixed math problems is better than a long session that ends in frustration. The goal is not to rush through worksheets. The goal is to help students explain why an answer is correct and why the tempting wrong answers are wrong.",
        ],
      },
      {
        heading: "Teach students how to recover",
        paragraphs: [
          "A useful test strategy is question triage. Students should learn to mark difficult questions, move forward, and return with fresh eyes instead of spending five minutes stuck on one item. In reading, that means going back to the line evidence. In math, it means rewriting the problem, checking units, and estimating before calculating.",
          "The final stage of preparation should include timed practice, but timing should come after accuracy. When students first learn a skill slowly and correctly, speed follows. A good tutor watches the pattern behind the mistake: Is the student misreading? Skipping steps? Guessing too early? Once that pattern is clear, practice becomes much more efficient.",
        ],
      },
      {
        heading: "Use released questions the right way",
        paragraphs: [
          "NYSED publishes released questions and scoring materials for Grades 3-8 ELA and math, and families should treat those materials as a window into the exam's language. Do not burn through them all at once. Choose a small set, have the student answer independently, then spend twice as much time reviewing the reasoning. The review is where the learning happens.",
          "For ELA, ask students to underline the sentence that proves the answer. For math, ask them to label the operation before calculating. If a student cannot explain the method in words, the skill is not secure yet. A simple mistake log with three columns - question type, error, corrected strategy - can turn random practice into a clear plan for the next lesson.",
        ],
      },
      {
        heading: "Build a week-by-week routine",
        paragraphs: [
          "A strong state test plan does not need to be dramatic. Monday can be vocabulary and reading fluency, Tuesday can be math fluency, Wednesday can be one passage, Thursday can be word problems, and the weekend can be review. The point is to create enough repetition that students stop treating each question like a brand-new emergency.",
          "Parents should watch for effort quality, not just minutes spent. Is the student correcting mistakes fully? Are they writing out math steps? Can they explain an answer without looking at the key? If the answer is no, the assignment may be complete on paper but unfinished academically. Shorter, better-reviewed practice is usually more valuable than a thick packet done quickly.",
        ],
      },
      {
        heading: "Keep confidence connected to evidence",
        paragraphs: [
          "Students often lose confidence because they only notice the final score. Teachers and parents can help by pointing to concrete growth: fewer skipped questions, stronger written explanations, neater scratch work, or better use of passage evidence. These small improvements matter because they show that the student is learning how to take control of the test.",
          "The weeks before the exam should feel calm and organized. Students should know what they are reviewing, why it matters, and how to handle hard questions. When preparation is built around habits instead of panic, test day becomes another chance to use familiar routines.",
        ],
      },
    ],
  },
  {
    slug: "preparing-for-standardized-tests",
    category: "Test Prep",
    title: "Preparing for Standardized Tests",
    excerpt: "Standardized test prep works best when content review, strategy, pacing, and confidence are built together.",
    sections: [
      {
        heading: "Good preparation is specific",
        paragraphs: [
          "Standardized tests can feel vague from the outside: study more, practice more, score higher. In reality, good preparation is much more specific. A student may know the math but lose points because they rush. Another may read fluently but struggle to identify the answer that is best supported by the passage. A third may understand every lesson in class but freeze when the clock starts.",
          "That is why the first step should be diagnosis. Before assigning pages of practice, teachers should look at the kinds of mistakes a student makes. Are errors concentrated in fractions, grammar, inference questions, or multi-step word problems? Does performance drop near the end of a section? Those details tell us what to teach next.",
        ],
      },
      {
        heading: "Practice should feel active",
        paragraphs: [
          "The best test prep asks students to do more than circle answers. They should annotate, eliminate, estimate, check, and explain. In ELA, students learn to connect answers to evidence rather than choosing what sounds reasonable. In math, they learn to slow down at the setup stage, because most errors happen before the calculation even begins.",
          "Families can support this process by keeping routines steady. A predictable weekly schedule, a quiet work space, and brief review after each practice test all help. Scores matter, but they are not the only signal. Watch for cleaner scratch work, better pacing, and less panic around hard questions. Those are signs that preparation is becoming durable.",
        ],
      },
      {
        heading: "Match the prep to the test",
        paragraphs: [
          "Different standardized tests reward different habits. State exams often ask students to show grade-level reading and math mastery. The SHSAT adds unusual pacing pressure and a wider mix of problem types. The SAT and PSAT are digital, so students also need comfort with the testing platform, embedded tools, and shorter question sets.",
          "That is why families should avoid one-size-fits-all prep. A student preparing for the SAT should use official digital practice through Bluebook when possible. A student preparing for state tests should review released New York questions. A student preparing for the SHSAT should learn to move between ELA and math without losing stamina. The right materials matter because they teach students the rhythm of the real exam.",
        ],
      },
      {
        heading: "Separate content problems from testing problems",
        paragraphs: [
          "One of the biggest mistakes in test prep is treating every wrong answer the same way. Some errors mean the student never learned the skill. Some mean the student knew the skill but rushed. Some mean the student misunderstood the question. Each problem requires a different response, so review should always ask what kind of error happened before assigning more practice.",
          "For example, a student who misses percent questions may need a mini-lesson on ratios. A student who misses the last five questions of every section may need pacing work. A student who changes correct answers to wrong ones may need confidence and evidence-checking routines. Good preparation becomes sharper when the teacher can name the real issue.",
        ],
      },
      {
        heading: "Make the final month intentional",
        paragraphs: [
          "The last month before a standardized test should not be a frantic sprint through every topic. It should be a narrowing process. Students should review high-frequency skills, revisit their own mistake logs, and practice the exact timing habits they will use on test day. New material can still be taught, but the main goal is reliability.",
          "A helpful final-month routine includes one timed set, one untimed correction session, one targeted lesson, and one short confidence-building review each week. Students need enough challenge to stay sharp, but they also need to see that their work is paying off. That balance is what turns preparation into performance.",
        ],
      },
    ],
  },
  {
    slug: "tutoring-near-me-a-parents-guide-to-choosing-excellence",
    category: "Higher Learning",
    title: "Tutoring Near Me - A Parent's Guide to Choosing Excellence",
    excerpt: "Choosing a tutoring center is about fit, consistency, teacher quality, and whether the program can explain your child's progress clearly.",
    imageSrc: "/images/higher-learning/2025-05-14-1-768x432.webp",
    sections: [
      {
        heading: "Look beyond convenience",
        paragraphs: [
          "When parents search for “tutoring near me,” location matters. A center that is easy to reach is easier to attend consistently, and consistency is where progress begins. But convenience should not be the only factor. The better question is whether the tutoring center can explain what your child needs, how they will teach it, and how progress will be measured.",
          "A strong program should be able to talk about more than grades. Ask how teachers identify gaps, how homework is assigned, and how students are grouped. Ask whether the same teacher sees your child regularly. Ask what happens when a student is ahead in one area and behind in another. The answers should feel specific, not rehearsed.",
        ],
      },
      {
        heading: "The right center feels steady",
        paragraphs: [
          "Good tutoring is not a magic trick. It is steady academic attention: careful explanations, repeated practice, honest feedback, and encouragement that does not lower expectations. Students should feel supported, but they should also be asked to think, write, calculate, and revise with care.",
          "For families in Lower Manhattan, Chinatown, Brooklyn, and Queens, Higher Learning offers the kind of structure many students need: small classes, experienced teachers, and programs that connect school skills with exam preparation. The right tutoring center should make your child more independent over time. If a student starts to read directions more carefully, organize work more clearly, and ask better questions, the tutoring is doing its job.",
        ],
      },
      {
        heading: "Ask questions before enrolling",
        paragraphs: [
          "Before choosing a tutoring center, parents should ask what the first month will look like. Will the teacher diagnose skills first? Will the class include homework review, new instruction, and independent practice? How will parents know whether the student is improving? A good center can answer these questions plainly.",
          "Also pay attention to class culture. Students should not be embarrassed for making mistakes, but they should be expected to correct them. The room should feel focused. The work should feel purposeful. Families often think they are buying extra time with a teacher, but what they really need is a system: clear goals, steady attendance, careful review, and teachers who know how to turn confusion into progress.",
        ],
      },
      {
        heading: "Look for progress you can actually see",
        paragraphs: [
          "The best tutoring centers can describe progress in ordinary language. A parent should hear more than “doing well” or “needs practice.” Useful feedback sounds like this: your child is improving on inference questions, still needs to slow down on multi-step math, or is beginning to use evidence more consistently in writing. Specific feedback helps families trust the process.",
          "Students should also be able to tell you what they are working on. If a child leaves every session saying only that they did homework, the instruction may not be clear enough. If they can say they practiced fractions, revised a paragraph, reviewed grammar, or learned how to eliminate answer choices, the tutoring is becoming visible to them too.",
        ],
      },
      {
        heading: "Fit matters as much as reputation",
        paragraphs: [
          "A tutoring center can have strong results and still not be the right fit for every child. Some students need a quieter room. Some need a faster pace. Some need more structure around homework. Parents should look for a place that can adjust without losing standards. Flexibility and seriousness should work together.",
          "The goal is not to keep a student dependent on tutoring forever. The goal is to build habits they carry back to school: reading directions carefully, showing work, revising writing, asking better questions, and reviewing mistakes honestly. When those habits travel, the tutoring is doing more than raising a score.",
        ],
      },
    ],
  },
  {
    slug: "shsat-nyc",
    category: "SHSAT Prep",
    title: "SHSAT NYC - Everything You Need to Know",
    excerpt: "A clear overview of what the SHSAT asks students to do and how families can plan preparation without panic.",
    imageSrc: "/images/higher-learning/0b4d3da40646462f99177b0d7db4697f-768x504.avif",
    sections: [
      {
        heading: "What makes the SHSAT different",
        paragraphs: [
          "The Specialized High Schools Admissions Test is one of the most important exams many NYC middle school students will take. It is used for admission to most of the city's specialized high schools, and it asks students to bring together reading, grammar, problem solving, algebraic thinking, geometry, and careful pacing under one timed setting.",
          "What makes the SHSAT challenging is not only the content. Many students have seen the math topics before, but the questions are written to test flexibility. In ELA, students must read closely and avoid answer choices that sound good but are not supported. In revising and editing, small grammar and structure choices matter. The test rewards students who can stay precise for a long stretch.",
        ],
      },
      {
        heading: "How to prepare well",
        paragraphs: [
          "Preparation should start with fundamentals. Students need strong arithmetic, fraction sense, sentence structure, vocabulary, and reading stamina before advanced strategies can help. Once the foundation is stable, practice exams become useful because they reveal pacing, endurance, and recurring mistake patterns.",
          "Families should avoid measuring progress by one practice score alone. A student may need several weeks before new habits show up in the score. Better signs include cleaner work, fewer careless errors, stronger explanations, and the ability to return to skipped questions calmly. SHSAT preparation is demanding, but with structure and honest feedback, it becomes manageable.",
        ],
      },
      {
        heading: "Know the admissions process",
        paragraphs: [
          "Families should read the official NYC Public Schools SHSAT guide each year because test-day policies, registration details, and digital testing instructions can change. Students should understand which specialized high schools use the SHSAT, how school preference order works, and what they are allowed to bring on test day. Preparation is easier when the process feels familiar.",
          "The strongest students do not simply memorize tricks. They learn how to work through unfamiliar questions without panicking. In math, that may mean drawing a diagram, testing answer choices, or estimating before solving. In ELA, it may mean rereading the exact sentence that controls the answer. The SHSAT is competitive, but disciplined practice can make it feel less mysterious.",
        ],
      },
      {
        heading: "Balance ELA and math from the beginning",
        paragraphs: [
          "Many students naturally prefer one side of the SHSAT. A strong reader may avoid math practice; a confident math student may underestimate revising, editing, and passage questions. That imbalance can become expensive. Since the exam requires both accuracy and stamina, preparation should include ELA and math every week, even when one area feels stronger.",
          "For ELA, students should practice reading for proof rather than opinion. For math, they should practice setting up problems before solving. The shared habit is precision. The student who learns to slow down at the right moment often gains more than the student who simply tries to move faster.",
        ],
      },
      {
        heading: "Start early enough to change habits",
        paragraphs: [
          "A few weeks of cramming can review formulas, but it rarely changes the habits that cost students points. Students need time to build reading stamina, repair weak math foundations, and become comfortable with timed sections. Earlier preparation also gives teachers time to identify whether a score problem comes from content, pacing, or confidence.",
          "That does not mean every student needs years of intense prep. It means the plan should be honest about the student's current level. A student already scoring strongly may need refinement and harder mixed sets. A student with gaps may need a slower foundation-first plan. The earlier the diagnosis happens, the more realistic the path becomes.",
        ],
      },
    ],
  },
  {
    slug: "best-higher-learning-in-chinatown-nyc",
    category: "Higher Learning",
    title: "Best Higher Learning in Chinatown NYC",
    excerpt: "Why families have trusted Higher Learning in Chinatown for academic support, exam prep, and steady student growth.",
    imageSrc: "/images/higher-learning/2025-05-14-1-768x432.webp",
    sections: [
      {
        heading: "A neighborhood center with academic focus",
        paragraphs: [
          "Higher Learning has been part of Chinatown's academic life for more than 30 years. Families come to us for many reasons: a child needs stronger reading habits, math homework has become stressful, state exams are approaching, or the SHSAT suddenly feels very real. Whatever the starting point, our goal is the same: help students become more confident, more careful, and more prepared.",
          "A good tutoring center should feel personal without becoming casual about standards. Students need teachers who notice how they think. Some students need help slowing down. Some need more challenge. Some need a clearer system for writing, organizing scratch work, or reviewing mistakes. Small-group instruction allows teachers to make those adjustments while still giving students the energy of learning with peers.",
        ],
      },
      {
        heading: "What families should expect",
        paragraphs: [
          "Parents should expect clear communication and practical next steps. If a student is behind, the plan should identify the missing skills. If a student is preparing for an exam, the plan should include content review, timed practice, and error analysis. If a student is advanced, the work should keep stretching them.",
          "Our location at 84 Bowery makes Higher Learning accessible for families across Lower Manhattan and beyond. But the real reason families stay is consistency. Progress comes from showing up, doing the work, and having teachers who know when to explain, when to push, and when to rebuild confidence.",
        ],
      },
      {
        heading: "Why local experience matters",
        paragraphs: [
          "NYC students face a particular mix of demands: state exams, selective school pressure, crowded school schedules, long commutes, and families trying to balance academics with everything else. A local tutoring center understands that rhythm. The work has to be serious, but the plan also has to fit real family life.",
          "At Higher Learning, that means building programs around the subjects parents ask for again and again: reading comprehension, writing, grammar, mathematics, SHSAT preparation, and SAT or PSAT support. The value is not only in teaching a lesson. It is in seeing the student week after week and knowing when the issue is content, confidence, focus, or practice habits.",
        ],
      },
      {
        heading: "A strong foundation helps every path",
        paragraphs: [
          "Not every student who comes to Higher Learning is preparing for the same goal. Some are trying to catch up in school. Some are preparing for state exams. Some are looking ahead to specialized high schools. Others need writing support, stronger math habits, or more confidence speaking up in class. The common thread is foundation.",
          "Students who read carefully, write clearly, and show organized math work are better prepared for almost every academic challenge. That is why a neighborhood tutoring center should not only chase the next test date. It should help students build skills that continue to matter after the exam is over.",
        ],
      },
      {
        heading: "What makes a center worth returning to",
        paragraphs: [
          "Families return when they feel the center knows their child. That knowledge comes from repeated teaching, careful observation, and honest communication. A student is not just a score report. They may be bright but careless, hardworking but anxious, advanced but disorganized, or capable but inconsistent. Good teaching starts by noticing the difference.",
          "For more than 30 years, Higher Learning has worked with families who want both care and academic seriousness. The center's job is to make progress feel possible, but also to make the work real. That combination is why local trust matters.",
        ],
      },
    ],
  },
  {
    slug: "shsat-2025-admission",
    category: "SHSAT Prep",
    title: "SHSAT Admission - Expert Preparation for NYC Specialized High Schools",
    excerpt: "A focused look at how students can prepare for specialized high school admission with discipline and a realistic study plan.",
    imageSrc: "/images/higher-learning/498557831_661835789949377_2234153109830365154_n-e1753449905619-1-e1755876994617.jpg",
    sections: [
      {
        heading: "Admission takes more than last-minute review",
        paragraphs: [
          "Students aiming for specialized high schools need more than a stack of practice tests. Practice tests are useful, but only when students know what to do with the results. The real work is in the review: finding the missed skill, understanding the trap answer, and practicing until the corrected method becomes natural.",
          "Strong SHSAT preparation usually includes three layers. First, students build core skills in reading, grammar, arithmetic, algebra, and geometry. Second, they learn test strategies such as elimination, estimation, line evidence, and time management. Third, they practice under realistic conditions so stamina improves before test day.",
        ],
      },
      {
        heading: "The review is where scores move",
        paragraphs: [
          "After a practice exam, students should not simply write down the score and move on. They should sort mistakes into categories: content gap, careless error, time pressure, misread question, or weak strategy. This makes the next week of studying much clearer. A student who misses geometry questions needs a different plan than a student who knows the content but loses points from rushing.",
          "Parents can help by keeping the process steady. Specialized high school admission is competitive, but panic does not improve performance. A calm routine, honest feedback, and regular practice create the conditions students need. The goal is not just to work harder. It is to work with enough precision that every practice session teaches something.",
        ],
      },
      {
        heading: "Make practice exams count",
        paragraphs: [
          "Practice exams should be scheduled carefully. Too many full tests too early can exhaust students and hide the real issue. Early in the process, shorter targeted sets are often better: one passage with full review, one math topic, one revising and editing set, one timed mixed section. Full exams become more useful once the student has enough content knowledge to learn from the result.",
          "When students do take full practice exams, the environment matters. Use a quiet room, follow timing rules, and avoid checking answers halfway through. Then review the test in layers. First identify the easiest points to recover. Then review repeated weaknesses. Finally, choose a small number of skills for the next week. That routine makes preparation feel concrete instead of overwhelming.",
        ],
      },
      {
        heading: "Treat school choice as part of prep",
        paragraphs: [
          "Students often focus only on the test, but specialized high school admissions also require families to think carefully about school preference. Students should learn about each school, commute time, academic programs, culture, and daily expectations. A high score matters, but the preference list should reflect where the student can actually thrive.",
          "This conversation can also motivate preparation in a healthy way. Instead of studying for an abstract number, students begin to understand what kind of high school experience they are working toward. That sense of purpose can make long practice sessions feel less random.",
        ],
      },
      {
        heading: "Protect stamina and confidence",
        paragraphs: [
          "SHSAT preparation can become emotionally heavy if every practice result feels like a verdict. Teachers and parents should frame practice as information. A missed question is not proof that the student cannot succeed; it is a clue about what to review next. That mindset keeps students engaged long enough to improve.",
          "Stamina also needs deliberate training. Students should gradually move from short sets to longer timed sections, then to full exams. Along the way, they need strategies for what to do when they feel stuck: skip, mark, breathe, estimate, reread, and return. Confidence grows when students have a plan for difficult moments.",
        ],
      },
    ],
  },
  {
    slug: "2025-fall-weekend-tutoring-schedule-in-nyc-higher-learning",
    category: "Schedules",
    title: "Fall Weekend Tutoring Schedule in NYC",
    excerpt: "How weekend tutoring helps busy NYC students stay consistent during the school year without overloading the week.",
    imageSrc: "/images/higher-learning/475799580_590582457074711_281516345249048325_n-768x576.jpg",
    sections: [
      {
        heading: "Why weekends work for many families",
        paragraphs: [
          "For many NYC families, weekday afternoons are already crowded with homework, commuting, activities, and family responsibilities. Weekend tutoring gives students a more focused block of time to review school material, strengthen weak areas, and prepare for upcoming exams without squeezing everything into a tired weeknight.",
          "The best weekend schedule is structured but not overwhelming. Students should leave class with a clearer understanding of what they practiced and what they need to complete before the next session. A weekend program also gives teachers room to combine instruction, guided practice, and independent work in one sitting.",
        ],
      },
      {
        heading: "What students should get from a weekend class",
        paragraphs: [
          "A strong weekend class should connect directly to the student's grade level and goals. Younger students may focus on reading fluency, grammar, paragraph writing, and core math skills. Older students may need more targeted exam preparation, including state tests, Algebra readiness, SHSAT-style problem solving, or SAT and PSAT foundations.",
          "Families should treat weekend tutoring as part of a weekly rhythm. Students make the most progress when they attend consistently, complete assigned practice, and review mistakes before the next class. At Higher Learning, weekend programs are designed to give students that rhythm: clear instruction, careful practice, and enough repetition for skills to stick.",
        ],
      },
      {
        heading: "Plan around school deadlines",
        paragraphs: [
          "A weekend program should support the school year, not compete with it. In the fall, many students need help rebuilding routines after summer. By winter, teachers can usually see which skills are still fragile. In spring, state tests, report cards, and admissions timelines create more pressure. The earlier families establish a routine, the less rushed the year feels.",
          "Parents should bring school concerns into the conversation: recent test scores, writing comments from teachers, math topics that caused trouble, or upcoming exams. The more context a tutoring center has, the better it can target classwork and homework. Weekend tutoring works best when it becomes the place where students organize the week, repair weak skills, and prepare for the next challenge.",
        ],
      },
      {
        heading: "Make homework manageable",
        paragraphs: [
          "Weekend tutoring should not bury students under work they cannot realistically complete. Homework should be purposeful: enough practice to reinforce the lesson, not so much that students rush or avoid it. A well-designed assignment lets teachers see whether the student can apply the skill independently after class.",
          "Parents can help by setting a consistent homework window during the week. Even twenty to thirty minutes at a predictable time can keep the lesson fresh. If the student struggles, they should mark the problem and bring it back instead of guessing through the whole assignment. That habit teaches responsibility without turning homework into a nightly fight.",
        ],
      },
      {
        heading: "Use weekends for deeper thinking",
        paragraphs: [
          "The advantage of a weekend block is that students can slow down. Teachers have time to unpack a reading passage, model a math setup, revise a paragraph, or review several related mistakes. That deeper work is hard to do when everyone is exhausted after a long school day.",
          "A good weekend program should leave students with something clearer than when they arrived. They should know the strategy they practiced, the mistake they corrected, and the next step. That clarity is what keeps weekend tutoring from becoming just another activity on the calendar.",
        ],
      },
    ],
  },
  {
    slug: "higher-learning-2025-fall-weekend-schedule",
    category: "Schedules",
    title: "Higher Learning Fall Weekend Schedule",
    excerpt: "A guide to using Higher Learning's weekend programs for stronger ELA, math, writing, and exam preparation.",
    imageSrc: "/images/higher-learning/476274718_590582123741411_8368425015554476117_n-768x576.jpg",
    sections: [
      {
        heading: "Build a schedule students can sustain",
        paragraphs: [
          "The right tutoring schedule should be challenging enough to create growth and realistic enough for a student to sustain. Weekend classes can be especially helpful because they give students time to slow down, ask questions, and practice skills that may be rushed during the school week.",
          "Higher Learning's weekend programs are built around the needs families ask about most often: ELA, mathematics, reading comprehension, writing, grammar, and exam preparation. For younger students, the priority is a strong foundation. For middle school students, the priority often becomes accuracy, organization, and readiness for more demanding tests.",
        ],
      },
      {
        heading: "Use the schedule as a system",
        paragraphs: [
          "A class schedule is only useful if it becomes a system. Students should know when they attend, what they are expected to complete, and how their mistakes will be reviewed. Parents should know whether the goal is school support, enrichment, state test prep, SHSAT prep, or a combination.",
          "The strongest results come when families and teachers stay aligned. If a student is struggling with fractions, reading inference, grammar, or essay structure, that should shape the work immediately. If a student is ready for more advanced material, the pace should rise. Weekend tutoring gives everyone a consistent checkpoint, and that consistency is often what turns effort into visible progress.",
        ],
      },
      {
        heading: "Choose the class by goal",
        paragraphs: [
          "Families should choose a weekend class based on the student's most important academic need. A student who reads slowly may need comprehension and vocabulary work before test strategy. A student who makes careless math errors may need organization and problem setup. A student preparing for selective admissions may need harder mixed practice and more frequent timed review.",
          "It is also worth thinking about the student's week. A child already overloaded after school may do better with a weekend block when they are rested. A student who needs accountability may benefit from having assignments due at the same time every week. The schedule should create momentum, not just fill a time slot.",
        ],
      },
      {
        heading: "Review progress every few weeks",
        paragraphs: [
          "A schedule should not stay fixed if the student's needs change. Every few weeks, families should ask what is improving and what still needs attention. A student may begin in general math support and later need more word-problem practice. Another may start with reading comprehension and then shift toward writing organization.",
          "That review does not need to be complicated. Teachers can look at classwork, homework patterns, quiz results, and the student's confidence during lessons. The point is to keep the program responsive. When the schedule and instruction evolve together, students are less likely to plateau.",
        ],
      },
      {
        heading: "Consistency beats intensity",
        paragraphs: [
          "Many families wait until a grade drops or an exam feels close, then try to solve everything at once. Weekend tutoring works better when it begins before the crisis. A steady class gives students time to absorb skills, make mistakes, correct them, and try again the next week.",
          "Consistency also helps families see progress more clearly. Instead of asking whether one session changed everything, the better question is whether the student is building better habits month by month. Strong academic growth usually looks like that: quieter, steadier, and more durable than a last-minute push.",
        ],
      },
    ],
  },
];

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#fffdf8]">
      <section className="relative isolate overflow-hidden bg-[#080f24] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,184,75,0.16),transparent_28%),linear-gradient(145deg,#080f24,#162a58)]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link href="/pages/blog" className="text-sm font-bold uppercase tracking-[0.14em] text-[#e8b84b]">
            Back to Blog
          </Link>
          <div className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#e8b84b]">{article.category}</div>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-normal md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">{article.excerpt}</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-14 sm:px-8 lg:px-12">
        {article.imageSrc && (
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-[8px] border border-[#0f2044]/15 shadow-[0_18px_48px_rgba(15,32,68,0.14)]">
            <Image src={article.imageSrc} alt={article.title} fill className="object-cover" sizes="(max-width: 900px) 100vw, 900px" />
          </div>
        )}

        <div className="rounded-[8px] border border-[#0f2044]/10 bg-white p-7 shadow-[0_12px_36px_rgba(15,32,68,0.08)] sm:p-10">
          <div className="mb-8 border-l-4 border-[#e8b84b] bg-[#fbf7ed] px-5 py-4 text-sm font-semibold leading-7 text-[#0f2044]">
            Practical guidance from Higher Learning teachers for students and families planning their next step.
          </div>

          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-3xl font-bold tracking-normal text-[#0f2044]">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[8px] border border-[#e8b84b]/30 bg-white p-6 shadow-[0_12px_36px_rgba(15,32,68,0.08)]">
          <h2 className="font-serif text-2xl font-bold tracking-normal text-[#0f2044]">Ready to talk?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Contact Higher Learning to review schedules, placement, and enrollment options.
          </p>
          <Link
            href="/pages/contact"
            className="mt-5 inline-flex rounded-full bg-gradient-to-r from-[#c8922a] to-[#e8b84b] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#081126]"
          >
            Visit Us In Person
          </Link>
        </div>
      </article>
    </main>
  );
}
