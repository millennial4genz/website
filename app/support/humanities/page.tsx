import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  FileText,
  Music,
  Globe,
  BookOpen,
  Camera,
  Mic,
  Archive,
  Users,
  ArrowRight,
  ChevronDown,
  Theater,
  Paintbrush,
  Video,
  Headphones,
  Share2,
  Brain,
  DollarSign,
  GraduationCap,
  Heart,
  Megaphone,
  Languages,
} from "lucide-react"
import Link from "next/link"

export default function HumanitiesPage() {
  const howMillennialsCanHelp = [
    {
      title: "Storytelling & Documentation",
      description: "Record oral histories of youth activists, especially from marginalized groups. Publish bilingual (Nepali + English) blogs, zines, or anthologies of Gen Z voices.",
      icon: FileText,
      example: "Nepal Memory Project during conflict years documented missing persons — similar projects could preserve protest narratives.",
    },
    {
      title: "Art & Creative Expression", 
      description: "Provide resources (paint, space, digital tools) for Gen Z artists to create murals, theatre, and visual art. Connect young creators with global movements.",
      icon: Paintbrush,
      example: "Organize exhibitions, street art festivals, or online galleries showcasing Gen Z's vision.",
    },
    {
      title: "Music, Literature & Performance",
      description: "Support young poets, musicians, and playwrights with recording, publishing, or live performance spaces. Create cultural residencies for youth.",
      icon: Music,
      example: "Dohori and folk songs during protests kept rural voices central — millennials can help reimagine this with digital platforms.",
    },
    {
      title: "Digital Humanities & Media",
      description: "Build online archives of movement culture: protest posters, slogans, comics, memes. Train youth in digital storytelling tools.",
      icon: Camera,
      example: "Hong Kong's 'Be Water' protest memes created a global digital culture of resistance.",
    },
    {
      title: "Education & Cultural Literacy",
      description: "Create open-source toolkits on using art for social change. Introduce 'critical humanities' workshops on resistance literature.",
      icon: GraduationCap,
      example: "Translate global cultural manifestos into Nepali contexts.",
    },
  ]

  const corePrinciples = [
    {
      title: "Youth voices lead storytelling",
      description: "Millennials amplify, not replace",
      icon: Megaphone,
    },
    {
      title: "Culture is resistance", 
      description: "Art, music, and literature should challenge injustice",
      icon: Heart,
    },
    {
      title: "Memory is power",
      description: "Documentation ensures future generations know the truth",
      icon: Archive,
    },
    {
      title: "Accessibility of culture",
      description: "Diverse languages, forms, and traditions must be included",
      icon: Languages,
    },
  ]

  const globalInspirations = [
    { 
      country: "Chile",
      movement: "Nueva Canción Movement",
      achievement: "Music as resistance against dictatorship",
    },
    { 
      country: "South Africa",
      movement: "Apartheid Struggle",
      achievement: "Theatre and poetry mobilized international solidarity",
    },
    { 
      country: "Palestine",
      movement: "Cultural Resistance",
      achievement: "Murals and poems as a way to preserve identity and struggle",
    },
    { 
      country: "Hong Kong",
      movement: "2019 Protests",
      achievement: "Protest art and memes as globalized cultural symbols of resistance",
    },
  ]

  const modernTools = [
    {
      category: "Digital Archives",
      tools: "Use GitHub, IPFS, or Wikimedia to store protest art securely",
      icon: Archive,
    },
    {
      category: "Crowdfunding Platforms", 
      tools: "Fund youth art collectives",
      icon: DollarSign,
    },
    {
      category: "Creative Commons Licensing",
      tools: "Ensure open sharing while protecting youth creators",
      icon: Share2,
    },
    {
      category: "AI Tools",
      tools: "Auto-translate poems, caption videos, or digitize handwritten notes",
      icon: Brain,
    },
    {
      category: "Podcasts & Online Radio",
      tools: "Platforms for youth storytelling in multiple Nepali languages",
      icon: Headphones,
    },
  ]

  const millennialRoles = [
    {
      title: "Archivists",
      description: "Curate and digitize protest art, songs, and stories",
      icon: Archive,
    },
    {
      title: "Editors & Translators",
      description: "Make youth literature accessible locally and internationally",
      icon: Languages,
    },
    {
      title: "Producers",
      description: "Provide technical support for music, theatre, and film projects",
      icon: Video,
    },
    {
      title: "Educators", 
      description: "Run workshops on history of resistance arts and critical humanities",
      icon: GraduationCap,
    },
    {
      title: "Fundraisers",
      description: "Secure grants, donations, or spaces for youth artists",
      icon: DollarSign,
    },
  ]

  const societyParticipation = [
    {
      title: "Community Art Spaces",
      description: "Libraries, community halls, or schools as centers for youth art",
    },
    {
      title: "Cultural Exchange",
      description: "Linking rural and urban youth through art residencies or traveling exhibitions",
    },
    {
      title: "Public Festivals",
      description: "Inclusive festivals blending traditional cultural forms with youth activism",
    },
    {
      title: "Crowdsourced Archives",
      description: "Citizens submit songs, art, and writings to shared platforms",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/support" className="hover:text-teal-600 transition-colors">
              Support
            </Link>
            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">Humanities & Cultural Faculties</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Space for hero image */}
          <div className="mb-12 h-64 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Palette className="w-16 h-16 mx-auto mb-4 text-purple-500" />
              <p className="text-sm">Illustration or photo collage of murals, music, and theatre</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
              <Palette className="w-4 h-4 mr-2" />
              Humanities & Cultural Faculties
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Humanities & Cultural Faculties
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty">
            How culture, art, and humanities amplify Gen Z's leadership in shaping a new Nepal — Millennials as Storytellers, Documentarians, and Cultural Guardians.
          </p>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Culture as a Force for Change</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Nepali Cultural History in Movements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Poetry & Songs</h4>
                    <p className="text-sm text-slate-600">Fueled anti-Rana uprisings (e.g., Gopal Prasad Rimal, Dharma Raj Thapa)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Street Theatre and Dohori</h4>
                    <p className="text-sm text-slate-600">Spread political messages during Panchayat suppression</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Art & Literature</h4>
                    <p className="text-sm text-slate-600">Sustained the 2006 Jana Andolan, keeping resistance alive when voices were censored</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Gen Z's Cultural Expression</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-900">Digital Platforms</h4>
                    <p className="text-sm text-slate-600">
                      TikTok, YouTube, memes, graffiti, podcasts, and digital art
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Cultural Heritage</h4>
                    <p className="text-sm text-slate-600">Inherits tradition while creating new forms of expression</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">Millennial Role</h4>
                    <p className="text-sm text-slate-600">Build platforms, document stories, and connect cultural expressions across generations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Core Principles of Cultural Support</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Millennials Can Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">How Millennials Can Help</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {howMillennialsCanHelp.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.description}</p>
                    <div className="p-3 bg-slate-50 rounded-md">
                      <p className="text-xs text-slate-500 font-medium">Example:</p>
                      <p className="text-sm text-slate-600">{item.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Society Can Participate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">How Society Can Participate</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {societyParticipation.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Inspirations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Global Inspirations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {globalInspirations.map((inspiration, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-6 w-6 text-purple-600" />
                    <h3 className="font-bold text-slate-900">{inspiration.country}</h3>
                    <Badge variant="outline" className="text-xs">{inspiration.movement}</Badge>
                  </div>
                  <p className="text-sm text-slate-600">{inspiration.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-dashed border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              Nepal can adapt these lessons by embedding art and humanities into activism, ensuring movements are not only political but also cultural revolutions.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Tools & Technology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Modern Tools & Technology</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-purple-100">
                        <IconComponent className="h-5 w-5 text-purple-600" />
                      </div>
                      <CardTitle className="text-base text-slate-900">{tool.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{tool.tools}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roles for Millennials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">Roles for Millennials</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-slate-900">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{role.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Highlight Quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "Movements may win in the streets, but they endure in stories, songs, and memories. Gen Z is creating a new cultural language for Nepal — Millennials can help preserve, amplify, and globalize these cultural expressions."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-purple-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Cultural preservation and memory
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Culture ensures movements speak to generations</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Through music, memes, theatre, and digital archives, Gen Z creates lasting change. Millennials help preserve these cultural expressions, ensuring the movement speaks not just to today but to generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/volunteer?type=humanities">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/support">Back to Support Areas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
