import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  MessageCircle,
  DollarSign,
  Globe,
  Megaphone,
  Shield,
  Heart,
  ArrowRight,
  Hand as Hands,
} from "lucide-react"

export default function GetInvolvedPage() {
  const engagementSections = [
    {
      icon: Users,
      title: "Volunteer Your Skills",
      description: "Millennials have experience — let's put it to use behind the scenes.",
      actions: [
        "Governance & Policy: Help draft policy papers, run workshops on democratic processes, and share global case studies.",
        "Technology & Innovation: Build secure communication tools, data dashboards, and transparency portals.",
        "Finance & Transparency: Maintain open ledgers, design participatory budgeting models, and teach cooperative finance.",
        "Health & Well-being: Join volunteer medical teams, organize mental health support, or set up first-aid training.",
        "Arts & Humanities: Document stories, translate materials, and support Gen Z creatives in spreading their vision.",
      ],
      cta: "Sign Up to Volunteer",
      link: "/volunteer?type=other",
    },
    {
      icon: MessageCircle,
      title: "Join Conversations & Assemblies",
      description: "Democracy is strongest when everyone's voice is heard.",
      actions: [
        "Attend youth-led assemblies, both offline and online.",
        "Help set up deliberative spaces in rural and urban communities.",
        "Participate in citizen feedback loops (surveys, SMS polls, online forums).",
      ],
      cta: "See Upcoming Assemblies",
      link: "/updates",
    },
    {
      icon: DollarSign,
      title: "Contribute Resources",
      description: "Movements need infrastructure — food, transport, tools, and funds.",
      actions: [
        "Financial Support: Contribute through transparent donation systems (all spending published in real time).",
        "Material Aid: Offer safe meeting spaces, printing services, sound systems, or internet access.",
        "Professional Services: Legal aid, design support, translation, or mentoring when requested.",
      ],
      cta: "Donate or Offer Resources",
      link: "/volunteer?type=finance",
      note: "Every rupee and resource is openly tracked on our Transparency page.",
    },
    {
      icon: Globe,
      title: "Build Inclusivity",
      description: "Help make the movement accessible for everyone.",
      actions: [
        "Translate documents into regional languages (Maithili, Tamang, Bhojpuri, etc.).",
        "Create spaces for women, Dalits, Janajatis, Madhesis, and LGBTQ+ youth to lead.",
        "Design inclusive events with ramps, sign language interpreters, and online access.",
      ],
      cta: "Join Inclusivity Efforts",
      link: "/volunteer?type=social-change",
    },
    {
      icon: Megaphone,
      title: "Amplify & Advocate",
      description: "Spread the word, protect the truth.",
      actions: [
        "Share Gen Z voices on social media and in your networks.",
        "Write op-eds or blog posts highlighting their leadership.",
        "Counter misinformation by fact-checking and reporting abuses.",
        "Connect Gen Z to international allies, but let youth speak for themselves.",
      ],
      cta: "Get Media Kit",
      link: "/resources",
    },
    {
      icon: Shield,
      title: "Protect Rights & Freedoms",
      description: "Be the shield against repression.",
      actions: [
        "Join legal defense networks to represent arrested or harassed youth.",
        "Document protests, police brutality, or human rights violations.",
        "Support digital rights: teach secure communications, encryption, and online safety.",
      ],
      cta: "Join Legal & Rights Support",
      link: "/areas",
    },
    {
      icon: Heart,
      title: "Support Communities",
      description: "Change must reach villages, towns, and families.",
      actions: [
        "Volunteer in rural outreach programs.",
        "Help run kitchens, shelters, or local aid distributions.",
        "Support conflict mediation and community resilience building.",
      ],
      cta: "Volunteer Locally",
      link: "/areas",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 h-64 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Hands className="w-16 h-16 mx-auto mb-4 text-teal-500" />
              <p className="text-sm">Space for unity illustration</p>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Join the Movement — Support Without Overshadowing
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
            The Gen Z–led movement is reshaping Nepal. Millennials and allies have a unique role: to provide skills,
            resources, and solidarity while keeping youth in the driver's seat. Here are the many ways you can
            contribute.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {engagementSections.map((section, index) => {
              const IconComponent = section.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:grid-flow-col-dense"}`}
                >
                  {/* Icon/Visual Column */}
                  <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
                    <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-8 text-center">
                      <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      {/* Space for section-specific illustration */}
                      <div className="w-full h-32 bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200">
                        <p className="text-slate-400 text-sm">Section Illustration Placeholder</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{section.title}</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">{section.description}</p>

                        <ul className="space-y-3 mb-6">
                          {section.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-slate-600 text-sm leading-relaxed">{action}</span>
                            </li>
                          ))}
                        </ul>

                        {section.note && (
                          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                            <p className="text-sm text-teal-800 font-medium">
                              <strong>Transparency Note:</strong> {section.note}
                            </p>
                          </div>
                        )}

                        <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                          <Link href={section.link}>
                            {section.cta} <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-white text-balance mb-6">
            "This is Gen Z's movement. Our role is not to lead, but to build the scaffolding so they can."
          </blockquote>
          {/* Space for quote illustration */}
          <div className="h-24 bg-white/10 rounded-md flex items-center justify-center text-sm text-teal-100 border-2 border-dashed border-white/20 max-w-md mx-auto">
            Illustration: Scaffolding metaphor diagram
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Ready to get involved? Choose a role and take the first step today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="/volunteer?type=other">
                Volunteer <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about/principles">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
