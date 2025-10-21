'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Image from 'next/image';

export default function GeneratorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [fontSize, setFontSize] = useState(48);

  const templates = [
    { id: 1, name: 'Template 1', image: '/generated/meme-avatar-1.png' },
    { id: 2, name: 'Template 2', image: '/generated/meme-avatar-2.png' },
    { id: 3, name: 'Template 3', image: '/generated/meme-avatar-3.png' },
    { id: 4, name: 'Template 4', image: '/generated/meme-avatar-4.png' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 gradient-text">
              MEME GENERATOR STUDIO
            </h1>
            <p className="text-lg">Create viral content in seconds! 🔥</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Preview */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 card-border">
                <h2 className="text-2xl font-black mb-4">PREVIEW</h2>

                <div className="relative aspect-square bg-background rounded-lg overflow-hidden">
                  <Image
                    src={templates.find(t => t.id === selectedTemplate)?.image || templates[0].image}
                    alt="Meme template"
                    fill
                    className="object-cover"
                  />

                  {/* Top text overlay */}
                  {topText && (
                    <div className="absolute top-4 left-0 right-0 text-center">
                      <p
                        className="font-black uppercase px-4"
                        style={{
                          fontSize: `${fontSize}px`,
                          color: 'white',
                          textShadow: '3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black',
                          lineHeight: 1.2,
                        }}
                      >
                        {topText}
                      </p>
                    </div>
                  )}

                  {/* Bottom text overlay */}
                  {bottomText && (
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p
                        className="font-black uppercase px-4"
                        style={{
                          fontSize: `${fontSize}px`,
                          color: 'white',
                          textShadow: '3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black',
                          lineHeight: 1.2,
                        }}
                      >
                        {bottomText}
                      </p>
                    </div>
                  )}
                </div>

                {/* Export buttons */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <button className="bg-primary hover:bg-primary/90">
                    DOWNLOAD PNG
                  </button>
                  <button className="bg-secondary hover:bg-secondary/90">
                    SAVE GIF
                  </button>
                  <button className="bg-accent hover:bg-accent/90">
                    SHARE
                  </button>
                </div>
              </div>

              {/* Templates */}
              <div className="bg-card rounded-xl p-6 card-border">
                <h3 className="text-xl font-black mb-4">CHOOSE TEMPLATE</h3>
                <div className="grid grid-cols-4 gap-4">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedTemplate === template.id
                          ? 'border-primary scale-105'
                          : 'border-transparent hover:border-accent'
                      }`}
                    >
                      <Image
                        src={template.image}
                        alt={template.name}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Controls */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 card-border">
                <h2 className="text-2xl font-black mb-6">TEXT EDITOR</h2>

                <div className="space-y-6">
                  {/* Top text */}
                  <div>
                    <label className="block text-sm font-bold mb-2">TOP TEXT</label>
                    <input
                      type="text"
                      value={topText}
                      onChange={(e) => setTopText(e.target.value)}
                      placeholder="Enter top text..."
                      className="w-full"
                      maxLength={50}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {topText.length}/50 characters
                    </p>
                  </div>

                  {/* Bottom text */}
                  <div>
                    <label className="block text-sm font-bold mb-2">BOTTOM TEXT</label>
                    <input
                      type="text"
                      value={bottomText}
                      onChange={(e) => setBottomText(e.target.value)}
                      placeholder="Enter bottom text..."
                      className="w-full"
                      maxLength={50}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {bottomText.length}/50 characters
                    </p>
                  </div>

                  {/* Font size */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      FONT SIZE: {fontSize}px
                    </label>
                    <input
                      type="range"
                      min="24"
                      max="72"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>

                  {/* Quick phrases */}
                  <div>
                    <label className="block text-sm font-bold mb-2">QUICK PHRASES</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setTopText('CHUPAPI MUNAYNO')}
                        className="bg-accent/20 hover:bg-accent/40 text-sm py-2 px-3 rounded-lg transition-colors"
                      >
                        Chupapi Munayno
                      </button>
                      <button
                        onClick={() => setBottomText('UNLEASH THE CHAOS')}
                        className="bg-primary/20 hover:bg-primary/40 text-sm py-2 px-3 rounded-lg transition-colors"
                      >
                        Unleash Chaos
                      </button>
                      <button
                        onClick={() => setTopText('WHEN YOUR')}
                        className="bg-secondary/20 hover:bg-secondary/40 text-sm py-2 px-3 rounded-lg transition-colors"
                      >
                        When Your
                      </button>
                      <button
                        onClick={() => setBottomText('GO VIRAL')}
                        className="bg-accent/20 hover:bg-accent/40 text-sm py-2 px-3 rounded-lg transition-colors"
                      >
                        Go Viral
                      </button>
                    </div>
                  </div>

                  {/* Clear button */}
                  <button
                    onClick={() => {
                      setTopText('');
                      setBottomText('');
                    }}
                    className="w-full bg-destructive hover:bg-destructive/90"
                  >
                    CLEAR ALL TEXT
                  </button>
                </div>
              </div>

              {/* Audio mixer */}
              <div className="bg-card rounded-xl p-6 card-border">
                <h3 className="text-xl font-black mb-4">AUDIO MIXER</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">SELECT SOUND</label>
                    <select className="w-full">
                      <option>Original Chupapi Sound</option>
                      <option>Remix Version 1</option>
                      <option>Remix Version 2</option>
                      <option>Bass Boosted</option>
                      <option>Ear Rape Edition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">VOLUME</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="80"
                      className="w-full accent-secondary"
                    />
                  </div>

                  <button className="w-full bg-secondary hover:bg-secondary/90">
                    🔊 PREVIEW SOUND
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tips section */}
          <div className="mt-12 bg-accent/10 rounded-xl p-8 border-2 border-accent/30">
            <h3 className="text-2xl font-black mb-4 text-center">💡 PRO TIPS FOR VIRAL MEMES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-bold mb-2">KEEP IT SHORT</h4>
                <p className="text-sm text-muted-foreground">
                  Less text = more impact! Short phrases are easier to read and share.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h4 className="font-bold mb-2">TIMING IS KEY</h4>
                <p className="text-sm text-muted-foreground">
                  Post during peak hours (12pm-3pm, 7pm-10pm) for maximum engagement!
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔥</div>
                <h4 className="font-bold mb-2">USE HASHTAGS</h4>
                <p className="text-sm text-muted-foreground">
                  #ChupapiVibes #MunaynoChallenge #ViralMemes for better reach!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
