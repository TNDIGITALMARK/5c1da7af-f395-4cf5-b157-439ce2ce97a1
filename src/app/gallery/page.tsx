'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ThumbsUp, MessageCircle, Share2, TrendingUp } from 'lucide-react';

// Mock gallery data
const galleryItems = [
  {
    id: 1,
    title: 'Epic Chupapi Moment',
    author: 'MemeLord420',
    image: '/generated/meme-avatar-1.png',
    likes: 1523,
    comments: 89,
    trending: true,
  },
  {
    id: 2,
    title: 'When Free Pizza',
    author: 'DankMemeKing',
    image: '/generated/meme-avatar-2.png',
    likes: 2341,
    comments: 156,
    trending: true,
  },
  {
    id: 3,
    title: 'Choose Your Fighter',
    author: 'ViralVortex',
    image: '/generated/meme-avatar-3.png',
    likes: 3892,
    comments: 234,
    trending: true,
  },
  {
    id: 4,
    title: 'My Jaw Dropped',
    author: 'ReactGuru',
    image: '/generated/meme-avatar-4.png',
    likes: 987,
    comments: 67,
    trending: false,
  },
  {
    id: 5,
    title: 'Munayno Madness',
    author: 'ChaosCreator',
    image: '/generated/meme-avatar-1.png',
    likes: 1654,
    comments: 92,
    trending: false,
  },
  {
    id: 6,
    title: 'Brain at 3AM',
    author: 'NightOwlMemes',
    image: '/generated/meme-avatar-3.png',
    likes: 2103,
    comments: 143,
    trending: false,
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 gradient-text">
              COMMUNITY GALLERY
            </h1>
            <p className="text-lg mb-6">
              The best memes from the Chupapi Munayno community! 🔥
            </p>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              <button className="bg-primary hover:bg-primary/90 px-6 py-2">
                🔥 TRENDING
              </button>
              <button className="bg-card hover:bg-card/80 border-2 border-accent px-6 py-2">
                ⭐ TOP RATED
              </button>
              <button className="bg-card hover:bg-card/80 border-2 border-accent px-6 py-2">
                🆕 NEWEST
              </button>
              <button className="bg-card hover:bg-card/80 border-2 border-accent px-6 py-2">
                😂 FUNNIEST
              </button>
            </div>
          </div>

          {/* Stats banner */}
          <div className="bg-accent/10 rounded-xl p-6 mb-12 border-2 border-accent/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-black text-primary">1,247</p>
                <p className="text-sm font-bold text-muted-foreground">SUBMISSIONS THIS WEEK</p>
              </div>
              <div>
                <p className="text-3xl font-black text-accent">52.3K</p>
                <p className="text-sm font-bold text-muted-foreground">TOTAL UPVOTES</p>
              </div>
              <div>
                <p className="text-3xl font-black text-secondary">8,934</p>
                <p className="text-sm font-bold text-muted-foreground">ACTIVE CREATORS</p>
              </div>
              <div>
                <p className="text-3xl font-black" style={{ color: 'hsl(var(--neon-green))' }}>
                  #3
                </p>
                <p className="text-sm font-bold text-muted-foreground">TRENDING HASHTAG</p>
              </div>
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-card rounded-xl overflow-hidden card-border group">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.trending && (
                    <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-bold">TRENDING</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-black text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">by @{item.author}</p>
                  </div>

                  {/* Engagement stats */}
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 hover:text-primary transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span className="font-bold">{item.likes.toLocaleString()}</span>
                    </button>

                    <button className="flex items-center gap-2 hover:text-secondary transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-bold">{item.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="font-bold">Share</span>
                    </button>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button className="bg-primary/20 hover:bg-primary/40 py-2 text-sm font-bold rounded-lg transition-colors">
                      VIEW
                    </button>
                    <button className="bg-accent/20 hover:bg-accent/40 py-2 text-sm font-bold rounded-lg transition-colors">
                      REMIX
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mb-12">
            <button className="bg-secondary hover:bg-secondary/90 text-xl px-12 py-4">
              LOAD MORE MEMES
            </button>
          </div>

          {/* Trending hashtags */}
          <div className="bg-card rounded-xl p-8 card-border">
            <h2 className="text-2xl font-black mb-6 text-center">🔥 TRENDING HASHTAGS</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                '#ChupapiVibes',
                '#MunaynoChallenge',
                '#ViralMemes',
                '#DankContent',
                '#MemeLord',
                '#GoViral',
                '#InternetCulture',
                '#GenZHumor',
              ].map((tag) => (
                <button
                  key={tag}
                  className="bg-accent/20 hover:bg-accent/40 px-4 py-2 rounded-full font-bold text-sm transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Creator spotlight */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 border-2 border-primary text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden card-border">
                <Image
                  src="/generated/meme-avatar-1.png"
                  alt="Top creator"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-black text-xl mb-1">@MemeLord420</h3>
              <p className="text-sm text-muted-foreground mb-3">TOP CREATOR THIS WEEK</p>
              <div className="flex justify-center gap-4 text-sm font-bold">
                <div>
                  <span className="text-primary">523</span> Posts
                </div>
                <div>
                  <span className="text-primary">12.4K</span> Likes
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-6 border-2 border-accent text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden card-border">
                <Image
                  src="/generated/meme-avatar-2.png"
                  alt="Rising star"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-black text-xl mb-1">@DankMemeKing</h3>
              <p className="text-sm text-muted-foreground mb-3">RISING STAR ⭐</p>
              <div className="flex justify-center gap-4 text-sm font-bold">
                <div>
                  <span className="text-accent">234</span> Posts
                </div>
                <div>
                  <span className="text-accent">8.9K</span> Likes
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl p-6 border-2 border-secondary text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden card-border">
                <Image
                  src="/generated/meme-avatar-3.png"
                  alt="Most viral"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-black text-xl mb-1">@ViralVortex</h3>
              <p className="text-sm text-muted-foreground mb-3">MOST VIRAL POST 🔥</p>
              <div className="flex justify-center gap-4 text-sm font-bold">
                <div>
                  <span className="text-secondary">156</span> Posts
                </div>
                <div>
                  <span className="text-secondary">45.2K</span> Likes
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
