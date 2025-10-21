'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import YouTubeVideo from '@/components/YouTubeVideo';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with collage */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/generated/hero-collage.png"
              alt="Chupapi Munayno meme collage"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h2 className="text-5xl md:text-7xl font-black gradient-text text-center px-4 drop-shadow-2xl">
              UNLEASH THE CHAOS
            </h2>
          </div>

          {/* Visitor counter - bottom left */}
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg card-border">
            <p className="text-sm font-bold">
              🔥 <span className="text-primary">47,382</span> VISITORS TODAY
            </p>
          </div>
        </section>

        {/* Original CHUPAPI MUNAYNO Video Section */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">
              THE LEGENDARY ORIGINAL
            </h2>
            <p className="text-lg font-bold text-muted-foreground uppercase tracking-wide">
              🔥 Where it all began 🔥
            </p>
          </div>

          <YouTubeVideo
            videoId="I8i8tNZTAfc"
            title="CHUPAPI MUNAYNO - THE ORIGINAL"
          />

          <div className="mt-6 text-center">
            <p className="text-sm font-bold text-primary">
              👑 THE ONE THAT STARTED IT ALL 👑
            </p>
          </div>
        </section>

        {/* Three column section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Meme Masters */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-center mb-6">MEME MASTERS</h3>

              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <Link
                    key={i}
                    href="/gallery"
                    className="block relative aspect-square rounded-xl overflow-hidden card-border hover:scale-105 transition-transform"
                  >
                    <Image
                      src={`/generated/meme-avatar-${((i - 1) % 4) + 1}.png`}
                      alt={`Meme ${i}`}
                      fill
                      className="object-cover"
                    />
                  </Link>
                ))}
              </div>

              <p className="text-sm font-bold text-center text-muted-foreground pt-2">
                NEW & TRENDING
              </p>
            </div>

            {/* Sound Arena - Center */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-center mb-6">SOUND ARENA</h3>

              <div className="bg-card rounded-xl p-8 card-border">
                <div className="flex justify-center gap-4 mb-6">
                  <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform neon-glow">
                    <span className="text-3xl">🔊</span>
                  </button>
                  <button className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-3xl">🎵</span>
                  </button>
                  <button className="w-20 h-20 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-3xl">🎧</span>
                  </button>
                </div>

                {/* Upload form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">TITLE</label>
                    <input
                      type="text"
                      placeholder="Epic sound..."
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">CATEGORY</label>
                    <select className="w-full">
                      <option>Audio/Lorem ewheret</option>
                      <option>Video</option>
                      <option>GIF</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">UPLOAD FILE</label>
                    <div className="border-2 border-dashed border-accent rounded-lg p-8 text-center hover:bg-card/50 transition-colors cursor-pointer">
                      <p className="text-sm font-bold">Drop files or click to upload</p>
                    </div>
                  </div>
                  <button className="w-full bg-accent hover:bg-accent/90">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>

            {/* Viral Vortex - Right */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-center mb-6">VIRAL VORTEX</h3>

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Link
                    key={i}
                    href="/gallery"
                    className="block relative aspect-video rounded-xl overflow-hidden card-border hover:scale-105 transition-transform"
                  >
                    <Image
                      src={`/generated/meme-avatar-${i}.png`}
                      alt={`Viral content ${i}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                      <p className="font-bold text-sm">CHUPAPI DANCE CHALLENGE</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to action banner */}
        <section className="bg-accent/20 py-12 border-y-2 border-accent">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
              SUBMIT YOUR SWAG
            </h2>
            <Link href="/generator">
              <button className="bg-accent hover:bg-accent/90 text-xl px-8 py-4">
                CREATE NOW
              </button>
            </Link>
            <p className="mt-6 text-sm font-bold">
              🔥 GET FAMOUS! 😎😎😎 GET FAMOUS! GO VIRAL 🔥
            </p>
          </div>
        </section>

        {/* Stats section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-card rounded-xl p-6 card-border">
              <p className="text-4xl font-black text-primary mb-2">15,892</p>
              <p className="text-sm font-bold text-muted-foreground">MEMES DOWNLOADED TODAY</p>
            </div>
            <div className="bg-card rounded-xl p-6 card-border">
              <p className="text-4xl font-black text-accent mb-2">1,247</p>
              <p className="text-sm font-bold text-muted-foreground">COMMUNITY CREATIONS THIS WEEK</p>
            </div>
            <div className="bg-card rounded-xl p-6 card-border">
              <p className="text-4xl font-black text-secondary mb-2">25</p>
              <p className="text-sm font-bold text-muted-foreground">POPULAR MEME TEMPLATES</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}