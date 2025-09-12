import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  Palette, 
  Music, 
  Camera, 
  Globe2, 
  Mic, 
  Monitor, 
  Shield, 
  Zap, 
  BookOpen, 
  Image, 
  Video,
  UserCheck,
  Network,
  GraduationCap,
  Building,
  TrendingUp,
  Archive,
  Smartphone,
  Eye,
  Database,
  Coins,
  Heart,
  Lightbulb,
  Target
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arts, Culture, and Humanities: Creativity, Identity, and Change | Millennials4GenZ",
  description: "Empowering Gen Z to use art and culture for social transformation and preserving Nepal's rich heritage through creative expression.",
  keywords: [
    "arts culture Nepal",
    "Gen Z artists", 
    "cultural preservation",
    "Nepali heritage",
    "social change art",
    "digital art Nepal",
    "street art activism",
    "cultural identity"
  ],
  openGraph: {
    title: "Arts, Culture, and Humanities: Creativity, Identity, and Change",
    description: "Empowering Gen Z to use art and culture for social transformation and preserving Nepal's rich heritage.",
  },
}

const corePrinciples = [
  {
    title: "Cultural Identity and Preservation",
    icon: Archive,
    description: "Cultural preservation is about maintaining and promoting Nepal's rich heritage — from indigenous languages to rituals, traditions, and folk art.",
    points: [
      "Gen Z can be the custodians of Nepali culture, embracing it as part of a globalized world while also adapting it for modern-day relevance."
    ],
    example: "The preservation of Nepali New Year celebrations and traditional dances can serve as powerful symbols of resistance to the homogenizing effects of globalization."
  },
  {
    title: "Arts as Resistance and Empowerment",
    icon: Zap,
    description: "Art has always been a form of resistance, from political cartoons to songs of protest. Art empowers marginalized groups by giving them a voice and a platform to challenge power structures.",
    points: [
      "For Gen Z, art can serve as both a creative outlet and a political tool that questions authority, advocates for change, and brings attention to human rights issues."
    ],
    example: "During the Nepali Revolution of 2006, songs, poetry, and street theater became powerful tools for mobilizing people."
  },
  {
    title: "Inclusivity and Social Change",
    icon: Users,
    description: "Art and culture must be inclusive, reflecting diverse identities, stories, and experiences.",
    points: [
      "It is important that Gen Z integrates voices from marginalized communities in art projects, ensuring that cultural narratives are not monopolized by the elite but represent the rich diversity of Nepal."
    ],
    example: "Inclusive art can address topics like gender inequality, Dalit rights, and LGBTQ+ struggles, using mediums like graphic novels, performance art, and spoken word poetry."
  },
  {
    title: "Technology and Innovation in Arts",
    icon: Monitor,
    description: "Technology can enhance art, enabling digital art, graphic design, virtual reality (VR) installations, and interactive platforms that push the boundaries of traditional art forms.",
    points: [
      "The fusion of technology and creativity allows Gen Z to reach global audiences, share stories, and preserve culture in ways that were previously unimaginable."
    ],
    example: "Digital platforms like Instagram or YouTube can elevate local Nepali musicians, dancers, and artists to international fame, while also preserving traditional art forms like Thangka painting and Madhubani art."
  }
]

const millennialSupport = [
  {
    title: "Mentorship in Creative Arts",
    icon: GraduationCap,
    description: "Millennials can mentor Gen Z artists, helping them refine their craft, explore new mediums, and harness digital tools to tell powerful stories.",
    details: [
      "Provide guidance on portfolio development, creative writing, art exhibitions, and funding opportunities for youth-led art projects."
    ],
    example: "Organize art mentorship programs where young visual artists, performers, and writers can meet established artists and receive guidance on art creation, branding, and marketing."
  },
  {
    title: "Cultural Preservation and Documentation",
    icon: Archive,
    description: "Millennials can help document and digitize Nepali folklore, songs, and oral traditions to ensure they are preserved for future generations.",
    details: [
      "Help Gen Z create online archives or digital museums that share Nepal's cultural wealth with a global audience."
    ],
    example: "Start a crowdsourced digital archive of Nepali folk music or oral storytelling from different regions, preserving these traditions digitally and making them accessible to a wider audience."
  },
  {
    title: "Tech-Enabled Art Platforms",
    icon: Monitor,
    description: "Help Gen Z set up digital platforms for Nepali art, film, and performance that can be showcased globally.",
    details: [
      "Create online galleries, virtual art exhibitions, and digital workshops that bring Nepali artists into the international fold."
    ],
    example: "Platforms like Behance and DeviantArt can serve as digital portfolios for Gen Z artists to gain exposure and network with international creators."
  },
  {
    title: "Global Networking for Nepali Artists",
    icon: Network,
    description: "Connect Nepali artists to global art movements, film festivals, and international organizations that can amplify their work.",
    details: [
      "Millennials can act as intermediaries, organizing cultural exchanges and collaborations that promote Nepali art and culture on the world stage."
    ],
    example: "Artists from Nepal can participate in art residencies, international film festivals, and cultural conferences to showcase their work globally and engage in cross-cultural dialogues."
  },
  {
    title: "Social Change through Art",
    icon: Heart,
    description: "Support Gen Z's efforts to create artistic content that advocates for social justice — such as songs, documentaries, art installations, and public murals.",
    details: [
      "Millennials can help Gen Z connect with organizations, NGOs, and government programs that focus on empowering marginalized communities through art."
    ],
    example: "A youth-led art exhibition that showcases gender equality, youth empowerment, and climate change issues could gain national attention and spark conversations about the role of art in societal transformation."
  }
]

const globalInspirations = [
  {
    country: "South Africa",
    title: "Anti-Apartheid Art",
    description: "Art played a key role in the fight against apartheid, with artists using theater, music, and visual art to raise awareness and mobilize resistance.",
    icon: Zap
  },
  {
    country: "India",
    title: "Bollywood and Cultural Movements",
    description: "Indian cinema has long been a tool for cultural expression and social change, with films tackling issues like gender equality, caste discrimination, and economic inequality.",
    icon: Video
  },
  {
    country: "Brazil",
    title: "Street Art Movement",
    description: "In Brazil, street art has become a global movement that tackles issues like poverty, race, and political oppression, turning public spaces into powerful canvases for social change.",
    icon: Palette
  },
  {
    country: "Germany",
    title: "Cultural Heritage Protection",
    description: "Germany has invested heavily in cultural preservation, from classical music to historic sites, ensuring that cultural heritage is passed on to future generations.",
    icon: Shield
  },
  {
    country: "France",
    title: "Cultural Diplomacy",
    description: "French culture is integrated into global diplomacy, using art, film, and literature as a means to promote national identity and international relations.",
    icon: Globe2
  }
]

const modernTools = [
  {
    title: "Digital Platforms",
    icon: Smartphone,
    description: "Use tools like Instagram, TikTok, YouTube, and DeviantArt to share and promote local art and cultural heritage."
  },
  {
    title: "Online Galleries and VR Exhibitions",
    icon: Eye,
    description: "Platforms like Google Arts & Culture allow artists to display their work globally in virtual museums and online exhibitions."
  },
  {
    title: "Music Streaming Platforms",
    icon: Music,
    description: "Platforms like Spotify, SoundCloud, and YouTube offer Nepali musicians an opportunity to reach global audiences."
  },
  {
    title: "Blockchain for Art Authentication",
    icon: Coins,
    description: "NFTs (Non-Fungible Tokens) and blockchain-based platforms can help authenticate and monetize digital art, ensuring artists maintain control over their work."
  },
  {
    title: "Cultural Databases",
    icon: Database,
    description: "Digital archives like Wikidata and Cultural Heritage Institutions can be used to preserve and share Nepali folklore, traditional music, and art forms for future generations."
  }
]

const millennialRoles = [
  { title: "Mentors and Curators", description: "Guide Gen Z artists on art creation, branding, and marketing.", icon: GraduationCap },
  { title: "Fundraisers", description: "Help raise funding for youth art projects, exhibitions, and cultural preservation efforts.", icon: TrendingUp },
  { title: "Advisors", description: "Support Gen Z artists in policy advocacy, cultural diplomacy, and funding strategies.", icon: UserCheck },
  { title: "Community Builders", description: "Set up creative hubs, community art spaces, and digital platforms that amplify youth-led art and culture initiatives.", icon: Building },
  { title: "Cultural Advocates", description: "Promote local art and traditional culture through international cultural exchanges, festivals, and collaborations.", icon: Globe2 }
]

const participationSteps = [
  "Support Local Artists: Buy local art, music, and crafts to support youth creators and preserve Nepali cultural heritage.",
  "Promote Cultural Events: Attend and promote youth-led cultural events, such as art exhibitions, performances, and film screenings.",
  "Encourage Dialogue: Engage in conversations about the social impact of art — attend forums, participate in debates, and support discussions around how art can lead to social transformation.",
  "Volunteer as Mentors: Veteran artists, curators, and performers can mentor youth and provide guidance on creating art and navigating the art world."
]

export default function ArtsCulturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-purple-50/90 to-pink-100/95"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-violet-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200 mb-6">
              <Palette className="w-4 h-4 mr-2" />
              🎭 Arts, Culture, and Humanities
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                Creativity, Identity,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                and Change
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Empowering Gen Z to use art and culture for social transformation and preserving Nepal's rich heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Art as a Vehicle for Change</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                In Nepal, art, culture, and humanities have always played a crucial role in shaping national identity and social movements. From the Bhanu Jayanti celebrations to folk songs and street theater, the arts have been used to resist oppression, mobilize communities, and amplify marginalized voices. For Gen Z, the arts are not just about creativity; they are about social transformation and creating cultural narratives that reflect the diverse experiences of youth, women, Dalits, indigenous groups, and LGBTQ+ individuals.
              </p>
              <p>
                As social movements grow in size and influence, Gen Z is using TikTok, Instagram, YouTube, digital art, graphic novels, street art, and music to bring attention to social justice and human rights issues. Millennials, who have experience navigating both traditional and digital media, can help Gen Z amplify their voices, preserve Nepali heritage, and create art that challenges the status quo.
              </p>
              <p>
                This page explores how art and culture can be used to drive social change, how Gen Z can lead this charge, and how Millennials can support and guide these creative endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Principles of Art, Culture, and Humanities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building inclusive, innovative, and empowering creative systems for Gen Z leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{principle.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                    {principle.points && (
                      <ul className="space-y-2">
                        {principle.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-purple-500 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-purple-700 font-medium">Example:</p>
                      <p className="text-sm text-purple-600 mt-1">{principle.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Millennials Can Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Millennials Can Help in Arts, Culture, and Humanities</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Millennials, with their experience in both traditional and digital media, can offer essential support to Gen Z artists, helping them navigate the complex intersection of cultural preservation and digital innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialSupport.map((support, index) => {
              const IconComponent = support.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{support.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-600 text-sm leading-relaxed">{support.description}</p>
                    {support.details && support.details.length > 0 && (
                      <ul className="space-y-1">
                        {support.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                            <span className="text-pink-500 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <p className="text-xs text-pink-700 font-medium">Example:</p>
                      <p className="text-xs text-pink-600 mt-1">{support.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Society Can Participate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Society Can Participate in Arts, Culture, and Humanities</h2>
          </div>

          <div className="space-y-6">
            {participationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-slate-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Inspirations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Inspirations for Arts, Culture, and Humanities</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Learning from successful cultural movements and artistic initiatives around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalInspirations.map((inspiration, index) => {
              const IconComponent = inspiration.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-200 w-fit mx-auto mb-2">
                      {inspiration.country}
                    </Badge>
                    <CardTitle className="text-lg">{inspiration.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed">{inspiration.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modern Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Modern Tools & Technologies for Arts, Culture, and Humanities</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-pink-100 to-violet-100 text-pink-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed">{tool.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roles for Millennials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Roles for Millennials in Supporting Arts, Culture, and Humanities</h2>
          </div>

          <div className="space-y-4">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{role.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{role.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Palette className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "Culture is the heartbeat of any movement — it is where change begins."
            </blockquote>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Art and culture are not just expressions of creativity; they are powerful tools for social change. For Gen Z, art can be a way to shape identity, amplify voices, and resist oppression. Millennials can support Gen Z by helping them preserve Nepali heritage, use digital platforms to share their work, and create art that drives societal transformation. Together, we can build a future where culture and creativity fuel movements for social justice, human rights, and community empowerment.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 shadow-lg" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-purple-600 hover:bg-white/10" asChild>
              <Link href="/volunteer?type=arts-culture">Volunteer for Arts & Culture</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
