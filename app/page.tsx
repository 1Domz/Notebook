export default function OurStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-slate-700/90"></div>
        <div
          className="h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dtezugusc/image/upload/v1750315078/img1_dn18ej.jpg?height=800&width=1200')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center max-w-2xl px-6">
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
                Every love story is beautiful, but ours is my favorite
              </p>
              <div className="w-24 h-px bg-white/50 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Met Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://res.cloudinary.com/dtezugusc/image/upload/v1750315078/img2_bwuscv.jpg?height=400&width=500"
                  alt="The place where we first met"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
                  The Day Everything Changed
                </h2>
                <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                  <p>
                    It was a quiet Monday evening when a simple notification lit
                    up my screen a message from you, asking if I was free next
                    Friday to watch the MPL live.
                  </p>
                  <p>
                    I remember smiling without even realizing it. It caught me
                    off guard, that small rush of excitement. We had already
                    become a solid duo in Mobile Legends, but this felt
                    different like something was about to begin.
                  </p>
                  <p>
                    Funny how it all started, really. A friend of mine had
                    invited a girl, and it turned out she was your friend. Just
                    like that, one connection led to another, and soon we were
                    laughing, playing, and chatting like we’d known each other
                    for years.
                  </p>
                  <p className="italic text-slate-500">
                    "Sometimes the smallest moments lead to the biggest changes
                    — and suddenly, your world feels a little brighter just
                    because they’re in it."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Moments Gallery */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Our Beautiful Moments
            </h2>
            <p className="text-slate-600 text-lg">
              Every picture tells a story, every moment a memory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photo 1 */}
            <div className="group">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/dtezugusc/image/upload/v1750315078/img6_azvcjs.jpg?height=400&width=400"
                  alt="Our first date"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-medium text-slate-800">Our First Date</h3>
                <p className="text-slate-500 text-sm">
                  The beginning of forever
                </p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/dtezugusc/image/upload/v1750315078/img4_foueg6.jpg?height=400&width=400"
                  alt="Weekend getaway"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-medium text-slate-800">MPL Arena</h3>
                <p className="text-slate-500 text-sm">Our First Live Match</p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/dtezugusc/image/upload/v1750315079/img5_bd8dqw.jpg?height=400&width=400"
                  alt="Cozy evening"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-medium text-slate-800">MPL Playground</h3>
                <p className="text-slate-500 text-sm">
                  Not Just a Game Anymore
                </p>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/dtezugusc/image/upload/v1750315079/img7_v3pmfk.jpg?height=400&width=400"
                  alt="Special celebration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-medium text-slate-800">
                  Special Celebration
                </h3>
                <p className="text-slate-500 text-sm">Milestones together</p>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="group">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/dtezugusc/image/upload/v1750315079/img8_rbmpgg.jpg?height=400&width=400"
                  alt="Sunset together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-medium text-slate-800">Golden Hour</h3>
                <p className="text-slate-500 text-sm">Perfect moments</p>
              </div>
            </div>

            {/* Photo 6 */}
            <div className="group">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://res.cloudinary.com/dtezugusc/image/upload/v1750315079/img9_gdllyu.jpg?height=400&width=400"
                  alt="Laughing together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-medium text-slate-800">Tastiest Moment</h3>
                <p className="text-slate-500 text-sm">Shared With You</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Love Letter Section */}
<div className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 md:p-16 shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
          A Letter to You
        </h2>
        <div className="w-16 h-px bg-slate-300 mx-auto"></div>
      </div>

      <div className="prose prose-lg prose-slate max-w-none text-center">
        <p className="text-xl leading-relaxed mb-8">My 🐝,</p>

        <p className="leading-relaxed mb-6">
          We started with games and late-night calls, just voices and laughter shared through a screen. What felt like something casual slowly became something meaningful — playing together, opening up, and unknowingly choosing each other, one small moment at a time.
        </p>

        <p className="leading-relaxed mb-6">
          Then came the unexpected. A real-life meeting at Starbucks, your handmade strawberry treat, and that bracelet — simple gestures that left me speechless. That day hasn’t left my mind since.
        </p>

        <p className="leading-relaxed mb-6">
          Our first live MPL match, the one we kept talking about, finally happened. Cheering for our team side by side made everything feel even more real — not just as fans, but as something more than friends. It brought us closer.
        </p>

        <p className="leading-relaxed mb-6">
          Now, even just weeks in, we’re learning what it means to grow with each other. Not perfectly, but honestly. We’re seeing each other's highs and lows, and still, we stay. I never expected this — but now, I can’t help but treasure what we’re building.
        </p>

        <p className="text-xl italic text-slate-600">
          This is only the beginning.  
          <br />
          And I’m so glad it’s with you ♡
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Timeline Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Our Journey Together
            </h2>
            <p className="text-slate-600 text-lg">
              The milestones that made us who we are
            </p>
          </div>

          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-lg font-medium text-slate-800">
                      Where It All Started
                    </h3>
                    <span className="text-sm text-slate-500">May 2025</span>
                  </div>
                  <p className="text-slate-600">
                    We started as Discord friends, usually playing games with
                    our group. Over time, it naturally became just the two of
                    us. I wasn’t trying to take you away from anyone, but I just
                    wanted more time with you. Our conversations slowly became
                    deeper. We began sharing how our days were, what we were up
                    to, and everything in between. It all felt easy, genuine,
                    and real.
                    <br />
                    <br />
                    Then came that unexpected day at Starbucks. You surprised me
                    with the sweetest gift — your homemade strawberry treat and
                    a lucky charm bracelet. I was completely speechless. You
                    felt like someone unforgettable, and that moment stayed with
                    me.
                    <br />
                    <br />
                    The MPL match we had been talking about for weeks finally
                    happened. Experiencing it together made everything even more
                    meaningful. That day brought us closer, and something deeper
                    quietly began to grow between us.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-lg font-medium text-slate-800">
                      I Didn't Expect This
                    </h3>
                    <span className="text-sm text-slate-500">June 2025</span>
                  </div>
                  <p className="text-slate-600">
                    It’s only been a few weeks, but something about us feels
                    natural — like we’ve known each other longer. We’ve started
                    learning the small things: how we speak, how we fall quiet,
                    how we show care.
                    <br />
                    <br />
                    We’re growing, gently. We’ve seen strengths, flaws, even
                    uncertainties — and still, we stay. I didn’t expect this
                    kind of connection. I didn’t expect someone like you.
                    <br />
                    <br />
                    But now that you're here, I want to keep discovering
                    everything this could become.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 bg-slate-800 text-white text-center">
        <p className="text-lg font-light opacity-90">
          "I hope you like my little appreciation gift for you."
        </p>
               <p className="text-lg font-light opacity-90">
          "Looking forward to creating more memories with you."
        </p>
      </div>
    </div>
  );
}
