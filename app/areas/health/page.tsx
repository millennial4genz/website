import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Users, 
  Heart, 
  Brain, 
  Shield, 
  Globe2, 
  Activity, 
  Smartphone, 
  MessageCircle, 
  Dumbbell, 
  Map, 
  BarChart3,
  UserCheck,
  Network,
  GraduationCap,
  Building,
  Stethoscope,
  BookOpen,
  Zap,
  HeartHandshake,
  Eye,
  Scale,
  Target,
  Smile
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Health & Well-being: Comprehensive Care for Gen Z Leaders | Millennials4GenZ",
  description: "Ensuring that the health of youth leaders is protected, nurtured, and prioritized for sustainable activism and social change in Nepal.",
  keywords: [
    "health Nepal",
    "mental health Nepal", 
    "Gen Z wellness",
    "healthcare access",
    "youth health",
    "telemedicine Nepal",
    "mental health advocacy",
    "holistic health"
  ],
  openGraph: {
    title: "Health & Well-being: Comprehensive Care for Gen Z Leaders",
    description: "Ensuring that the health of youth leaders is protected, nurtured, and prioritized.",
  },
}

const corePrinciples = [
  {
    title: "Holistic Health Approach",
    icon: Heart,
    description: "Health is not just physical: It encompasses mental health, emotional well-being, and social connectedness.",
    points: [
      "Gen Z movements need to prioritize holistic health in their activism, focusing on the body, mind, and soul of the participants."
    ],
    example: "In Nepal, youth activism has often been physically taxing; creating well-being support systems ensures that these movements can continue with strength and resilience."
  },
  {
    title: "Mental Health as a Priority",
    icon: Brain,
    description: "Mental health is just as important as physical health. The stress of protests, activism, and personal challenges can weigh heavily on youth.",
    points: [
      "Gen Z should actively address mental health within their communities, reducing stigma and fostering open dialogues about anxiety, depression, and burnout."
    ],
    example: "After the 2015 earthquake in Nepal, many young people experienced trauma, but there were insufficient resources to support them."
  },
  {
    title: "Accessibility and Equity",
    icon: Scale,
    description: "Health services must be accessible to all, especially marginalized groups, rural communities, women, and LGBTQ+ individuals.",
    points: [
      "Gen Z can help advocate for inclusive healthcare systems and digital solutions that reach the most vulnerable."
    ],
    example: "Telemedicine has enabled people in rural areas to access healthcare services that were previously out of reach."
  },
  {
    title: "Prevention and Education",
    icon: Target,
    description: "Prevention is better than cure: Health education, nutritional awareness, and vaccination programs are critical in keeping communities healthy.",
    points: [
      "Gen Z can lead health education campaigns in schools, workplaces, and online platforms."
    ],
    example: "Youth-led campaigns in India on HIV prevention have seen great success by directly involving youth in awareness and outreach."
  }
]

const millennialSupport = [
  {
    title: "Mental Health Support & Counseling",
    icon: Brain,
    description: "Millennials can train and provide mental health support, helping to create safe spaces for Gen Z activists to share their experiences, decompress, and access resources.",
    details: [
      "Organize mental health workshops, peer-counseling programs, and online resources for youth activists."
    ],
    example: "Many international organizations (like WHO and UNICEF) have developed mental health programs that Millennials can use as models for local youth movements."
  },
  {
    title: "Healthcare Access and Mobile Solutions",
    icon: Smartphone,
    description: "Support the development of mobile health platforms, telemedicine solutions, and health apps that provide affordable and accessible healthcare to rural communities.",
    details: [
      "Help Gen Z build collaborations with healthcare NGOs, local clinics, and international health organizations."
    ],
    example: "Apps like DocTalk allow people to access medical consultations through smartphones, breaking down geographic barriers to health services."
  },
  {
    title: "Policy Advocacy for Health Reforms",
    icon: UserCheck,
    description: "Millennials can help Gen Z by drafting health policy proposals that focus on equity in healthcare access, mental health support, and universal health coverage.",
    details: [
      "Work with global institutions, NGOs, and local governments to advocate for youth-friendly health policies."
    ],
    example: "Global youth movements like Fridays for Future have succeeded by advocating for climate change policies and could model similar youth-led health campaigns."
  },
  {
    title: "Health Education and Outreach",
    icon: BookOpen,
    description: "Develop educational programs around basic health, nutrition, sexual health, and mental well-being.",
    details: [
      "Millennials can create online platforms or social media campaigns to share health information that resonates with Gen Z."
    ],
    example: "Organizations like Teen Health Education in the U.S. use social media platforms to spread awareness about sexual and reproductive health."
  },
  {
    title: "Empowerment through Fitness and Wellness",
    icon: Dumbbell,
    description: "Promote physical health by creating fitness programs and wellness workshops for Gen Z youth.",
    details: [
      "Organize youth fitness challenges, provide sports equipment, and build community wellness programs."
    ],
    example: "Fitness challenges like #PushUpChallenge have become viral globally, promoting physical health among youth while fostering solidarity."
  }
]

const globalInspirations = [
  {
    country: "Sweden",
    title: "Mental Health Initiatives",
    description: "Sweden's youth mental health programs focus on integrating mental well-being into school curricula and community centers.",
    icon: Brain
  },
  {
    country: "Kenya",
    title: "Mobile Health Solutions",
    description: "Kenya's mobile health platforms, like M-TIBA, provide access to healthcare services via mobile phones, especially in remote areas.",
    icon: Smartphone
  },
  {
    country: "New Zealand",
    title: "Holistic Healthcare",
    description: "New Zealand has successfully integrated well-being into national policy, ensuring that health is viewed holistically (mental, physical, social).",
    icon: Heart
  },
  {
    country: "India",
    title: "Youth-led Health Campaigns",
    description: "India's youth movements have led the charge in spreading awareness of sexual and reproductive health, breaking cultural taboos.",
    icon: Users
  },
  {
    country: "Finland",
    title: "Comprehensive Well-being System",
    description: "Finland's approach to health is integrated into its education system, with a focus on holistic health: physical, mental, and emotional.",
    icon: Shield
  }
]

const modernTools = [
  {
    title: "Telemedicine Apps",
    icon: Smartphone,
    description: "Platforms like DoctorOnCall, mHealth, and HealthifyMe provide remote consultations, fitness tracking, and mental health support for youth across Nepal."
  },
  {
    title: "Mental Health Chatbots",
    icon: MessageCircle,
    description: "Apps like Woebot and Youper provide mental health support using AI-powered chat systems that guide users through cognitive behavioral therapy (CBT) exercises."
  },
  {
    title: "Fitness Apps",
    icon: Dumbbell,
    description: "Platforms like MyFitnessPal, Fitbit, and Headspace promote physical fitness and mental well-being through daily reminders and interactive features."
  },
  {
    title: "Crowdsourced Health Data",
    icon: Map,
    description: "Platforms like Ushahidi and OpenStreetMap allow communities to map health resources and track the spread of diseases in real-time."
  },
  {
    title: "Well-being Dashboards",
    icon: BarChart3,
    description: "Personal dashboards for tracking physical health, mental well-being, and sleep patterns to promote a balanced lifestyle."
  }
]

const millennialRoles = [
  { title: "Mental Health Advocates", description: "Use your experience to mentor and guide youth through difficult emotional and psychological challenges.", icon: Brain },
  { title: "Healthcare Professionals", description: "Volunteer your time as a doctor, nurse, or medical volunteer during protests or crises.", icon: Stethoscope },
  { title: "Policy Advisors", description: "Advocate for youth-focused healthcare policies that prioritize mental health and universal health access.", icon: UserCheck },
  { title: "Fitness Trainers & Wellness Coaches", description: "Help develop fitness and wellness programs that address both physical and mental well-being.", icon: Dumbbell },
  { title: "Community Organizers", description: "Create community spaces where youth can gather, discuss well-being, and access health resources.", icon: Building }
]

const participationSteps = [
  "Volunteer as Mental Health Advocates: Offer your time as a counselor, peer-support mentor, or fitness coach for youth-led movements.",
  "Provide Safe Spaces: Host health and wellness programs in community spaces, ensuring accessibility for youth across the country.",
  "Support Health Awareness Campaigns: Participate in or donate to campaigns that promote mental health and physical well-being for Gen Z.",
  "Engage in Active Health Discussions: Promote open conversations around mental health, self-care, and stress management in your community."
]

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-emerald-50/90 to-green-100/95"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-200 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              🏥 Health & Well-being
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-slate-900 via-emerald-900 to-green-900 bg-clip-text text-transparent">
                Comprehensive Care
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                for Gen Z Leaders
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Ensuring that the health of youth leaders is protected, nurtured, and prioritized.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Health as the Foundation of Strong Movements</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                In Nepal, health and well-being are often neglected during moments of political change and social unrest. As movements for social justice, democracy, and human rights unfold, the health of the activists at the forefront is crucial. Gen Z, with its energy and drive, is leading these movements, but their mental and physical health must be prioritized to ensure they can continue their work.
              </p>
              <p>
                Nepal's healthcare system faces many challenges, from limited access in rural areas to inequities in the quality of services. Marginalized communities, especially in remote areas, face significant barriers to basic health services. The youth, particularly Gen Z, are often ignored when it comes to health policies, and this gap must be closed.
              </p>
              <p>
                Millennials, with their experience and access to global resources, can help Gen Z by providing mental health support, medical care, health education, and safe spaces for recovery. In this page, we explore how Gen Z can lead the charge for better health outcomes, while Millennials provide the tools, support, and infrastructure to make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Principles of Health & Well-being</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building comprehensive, accessible, and holistic health systems for Gen Z leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
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
                            <span className="text-emerald-500 mt-1">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="text-sm text-emerald-700 font-medium">Example:</p>
                      <p className="text-sm text-emerald-600 mt-1">{principle.example}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Millennials Can Help in Health & Well-being</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Millennials, with their knowledge of healthcare systems, digital tools, and policy frameworks, can provide essential support to Gen Z-led movements focused on health and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {millennialSupport.map((support, index) => {
              const IconComponent = support.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
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
                            <span className="text-green-500 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-xs text-green-700 font-medium">Example:</p>
                      <p className="text-xs text-green-600 mt-1">{support.example}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Society Can Participate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Society Can Participate in Health & Well-being</h2>
          </div>

          <div className="space-y-6">
            {participationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Inspirations for Health & Well-being</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Learning from successful health and wellness initiatives around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalInspirations.map((inspiration, index) => {
              const IconComponent = inspiration.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 w-fit mx-auto mb-2">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Modern Tools & Technology for Health & Well-being</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernTools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-green-100 to-teal-100 text-green-700 flex items-center justify-center mb-4">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Roles for Millennials in Supporting Health & Well-being</h2>
          </div>

          <div className="space-y-4">
            {millennialRoles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "Health is the foundation of activism. A healthy movement cannot be broken."
            </blockquote>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Health and well-being are the foundation of any successful social movement. For Gen Z to lead effectively, physical, mental, and social health must be prioritized. Millennials can support Gen Z activists by providing the tools, resources, and infrastructure needed to ensure they remain healthy and resilient in their fight for change. Together, we can create a healthier, more inclusive future where well-being is not just a privilege, but a right for all.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-50 shadow-lg" asChild>
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-emerald-600 hover:bg-white/10" asChild>
              <Link href="/volunteer?type=health">Volunteer for Health</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
