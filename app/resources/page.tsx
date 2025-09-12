import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Video, BookOpen, Globe, Download, ExternalLink, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Resources & Toolkits | Nepal Youth Movement",
  description:
    "Training materials, legal documents, manuals & inspiration to support Gen Z activism, governance, and civic engagement in Nepal.",
}

const resources = {
  legal: [
    {
      title: "Constitution of Nepal (2015, English PDF)",
      description:
        "Official English translation of Nepal's constitution defining rights, governance structure, and federal system.",
      type: "PDF",
      url: "https://ag.gov.np/files/Constitution-of-Nepal_2072_Eng_www.moljpa.gov_.npDate-72_11_16.pdf",
      tags: ["Constitution", "Legal", "Government"],
    },
    {
      title: "Constitution of Nepal (ADB Translation)",
      description: "Alternative translation by Asian Development Bank and Constituent Assembly Secretariat.",
      type: "PDF",
      url: "https://lpr.adb.org/sites/default/files/resource/629/nepal-constitution.pdf.pdf",
      tags: ["Constitution", "Legal", "Government"],
    },
    {
      title: "Nepal Law Commission Constitution Page",
      description: "Official Law Commission page with current constitution version and amendments.",
      type: "Website",
      url: "https://lawcommission.gov.np/content/13437/nepal-s-constitution/",
      tags: ["Constitution", "Legal", "Official"],
    },
  ],
  training: [
    {
      title: "Civic Engagement Training Manual",
      description:
        "Comprehensive manual focusing on youth and women leadership, conflict resolution, and practical civic tools.",
      type: "PDF",
      url: "https://hedayah.com/app/uploads/2022/01/Civic-engagement-manual-final-CLWG-Training-Manual-.pdf",
      tags: ["Training", "Youth", "Leadership"],
    },
    {
      title: "Civics in Nepal – Training Material",
      description: "NDI training material covering social history, democracy, and human rights education.",
      type: "PDF",
      url: "https://www.ndi.org/sites/default/files/1238_civicsnepal_train_0.pdf",
      tags: ["Training", "Democracy", "Education"],
    },
    {
      title: "Strengthening Civic Engagement Course",
      description: "Nepal Leadership Academy course building skills in civic activism and community engagement.",
      type: "Course",
      url: "https://nepalleadershipacademy.org/course-offerings/strengthening-civic-engagement/",
      tags: ["Training", "Leadership", "Course"],
    },
  ],
  toolkits: [
    {
      title: "Civic Engagement Resource Materials",
      description:
        "CSC Nepal resources including law-making processes, fundamental rights, and local government powers.",
      type: "Toolkit",
      url: "https://socialchange.org.np/past-projects/civic-engagement-resources/",
      tags: ["Toolkit", "Local", "Government"],
    },
    {
      title: "Shaasan: Democracy Through Technology",
      description: "Case study of transforming Nepal's democracy through civic engagement and technology solutions.",
      type: "Case Study",
      url: "https://youthdemocracycohort.com/stories/shaasan-transforming-nepals-democracy-through-civic-engagement-and-technology/",
      tags: ["Technology", "Democracy", "Case Study"],
    },
  ],
  global: [
    {
      title: "UNICEF Engaged and Heard! Training",
      description: "Online course building capacity in meaningful adolescent participation and civic engagement.",
      type: "Course",
      url: "https://agora.unicef.org/c/Engaged%2Band%2BHeard",
      tags: ["Training", "Youth", "Global"],
    },
    {
      title: "CommunityClick Research Paper",
      description:
        "Research on inclusive town hall participation and community feedback tools for marginalized voices.",
      type: "Research",
      url: "https://arxiv.org/abs/2009.09053",
      tags: ["Research", "Inclusion", "Technology"],
    },
    {
      title: "Peace Education Campaign – Nepal Lessons",
      description: "Lessons on integrating peace, human rights, and civic education in social studies curricula.",
      type: "Case Study",
      url: "https://www.peace-ed-campaign.org/nepal-lessons-integrating-peace-human-rights-civic-education-social-studies-curricula-textbooks/",
      tags: ["Education", "Peace", "Curriculum"],
    },
  ],
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "PDF":
      return <FileText className="h-5 w-5" />
    case "Video":
      return <Video className="h-5 w-5" />
    case "Course":
      return <BookOpen className="h-5 w-5" />
    case "Website":
      return <Globe className="h-5 w-5" />
    default:
      return <FileText className="h-5 w-5" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "PDF":
      return "bg-red-100 text-red-800"
    case "Video":
      return "bg-purple-100 text-purple-800"
    case "Course":
      return "bg-blue-100 text-blue-800"
    case "Website":
      return "bg-green-100 text-green-800"
    case "Toolkit":
      return "bg-orange-100 text-orange-800"
    case "Research":
      return "bg-indigo-100 text-indigo-800"
    case "Case Study":
      return "bg-teal-100 text-teal-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Resources & Toolkits</h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto text-pretty">
              Training materials, legal documents, manuals & inspiration to support Gen Z activism, governance, and
              civic engagement in Nepal.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search resources by topic, type, or keyword..."
                  className="pl-10 pr-4 py-3 text-lg bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 hover:bg-gray-100"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Resource</h2>
            <p className="text-lg text-slate-600">Essential reading for understanding Nepal's governance framework</p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-teal-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <FileText className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900">Constitution of Nepal (2015)</CardTitle>
                    <Badge className="mt-2 bg-red-100 text-red-800">PDF Document</Badge>
                  </div>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-600">300+</div>
                  <div className="text-sm text-teal-700">Articles</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg mb-6">
                The foundational legal document that defines Nepal's federal democratic republic structure, fundamental
                rights, and the powers of federal, provincial, and local governments. Essential for understanding how
                Nepal's governance system works and the rights of citizens.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Constitution", "Legal Framework", "Federal System", "Rights", "Governance"].map((tag) => (
                  <Badge key={tag} variant="outline" className="text-teal-700 border-teal-300">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <a
                    href="https://ag.gov.np/files/Constitution-of-Nepal_2072_Eng_www.moljpa.gov_.npDate-72_11_16.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://lawcommission.gov.np/content/13437/nepal-s-constitution/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Official Page
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Legal & Constitutional Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Legal & Constitutional Documents</h2>
            <p className="text-lg text-slate-600">Major Nepal legal texts that define rights and governance systems</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.legal.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(resource.type)}
                      <Badge className={getTypeColor(resource.type)}>{resource.type}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-900 line-clamp-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">{resource.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Resource
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Manuals & Tutorials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Training Manuals & Tutorials</h2>
            <p className="text-lg text-slate-600">
              How-to guides and training modules for civic participation and leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.training.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(resource.type)}
                      <Badge className={getTypeColor(resource.type)}>{resource.type}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-900 line-clamp-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">{resource.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Resource
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nepal-Specific Toolkits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nepal-Specific Toolkits & Case Studies</h2>
            <p className="text-lg text-slate-600">Local toolkits and examples of civic tech interventions in Nepal</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.toolkits.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(resource.type)}
                      <Badge className={getTypeColor(resource.type)}>{resource.type}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900 line-clamp-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">{resource.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Resource
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global & Inspirational Resources */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Global & Inspirational Resources</h2>
            <p className="text-lg text-slate-600">Examples and research from around the world to spark ideas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.global.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(resource.type)}
                      <Badge className={getTypeColor(resource.type)}>{resource.type}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-900 line-clamp-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">{resource.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Resource
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Contribute a Resource</h2>
          <p className="text-xl text-teal-100 mb-8">
            Know of a valuable resource that should be included? Help us build a comprehensive library for Nepal's youth
            movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/contact">Suggest a Resource</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
