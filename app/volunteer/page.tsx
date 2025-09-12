"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Scale,
  Heart,
  Shield,
  Palette,
  Home,
  DollarSign,
  Laptop,
  Stethoscope,
  Globe,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const volunteerTypes = [
  { id: "organization", label: "Organization & Movement Building", icon: Users, color: "orange" },
  { id: "governance", label: "Governance & Political Process", icon: Scale, color: "blue" },
  { id: "social-change", label: "Social Change & Inclusivity", icon: Heart, color: "pink" },
  { id: "rights-freedom", label: "Rights & Freedoms", icon: Shield, color: "blue" },
  { id: "humanities", label: "Humanities & Culture", icon: Palette, color: "purple" },
  { id: "community", label: "Community Development", icon: Home, color: "green" },
  { id: "finance", label: "Finance & Economy", icon: DollarSign, color: "yellow" },
  { id: "technology", label: "Technology & Innovation", icon: Laptop, color: "indigo" },
  { id: "health", label: "Health & Well-being", icon: Stethoscope, color: "emerald" },
  { id: "international", label: "International & Diplomatic Support", icon: Globe, color: "sky" },
  { id: "entrepreneurship", label: "Entrepreneurship & Innovation", icon: TrendingUp, color: "orange" },
  { id: "leadership", label: "Leadership Development", icon: Users, color: "purple" },
  { id: "communications", label: "Communications & Media", icon: MessageSquare, color: "blue" },
  { id: "other", label: "Other / General Support", icon: Heart, color: "gray" },
]

export default function VolunteerPage() {
  const searchParams = useSearchParams()
  const preselectedType = searchParams.get("type")
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    volunteerType: preselectedType || "",
    notes: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const selectedVolunteerType = volunteerTypes.find(type => type.id === formData.volunteerType)

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="py-4 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-teal-600 transition-colors">
                Home
              </Link>
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              <span className="text-slate-900 font-medium">Volunteer</span>
            </div>
          </div>
        </div>

        <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h1>
              <p className="text-slate-600">
                Your volunteer application has been submitted successfully. We'll be in touch soon!
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-slate-900 mb-2">What happens next?</h3>
              <ul className="text-sm text-slate-600 space-y-1 text-left">
                <li>• We'll review your application within 3-5 days</li>
                <li>• You'll receive an email with next steps</li>
                <li>• We'll match you with relevant opportunities</li>
                <li>• You'll be invited to join our volunteer community</li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/support">
                  Explore Support Areas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            <span className="text-slate-900 font-medium">Volunteer</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
            Volunteer with Us
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Support Gen Z leadership in Nepal. Choose your area of expertise and help build a movement for democratic change and youth empowerment.
          </p>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Volunteer Application</CardTitle>
              <p className="text-slate-600">
                Tell us about yourself and how you'd like to contribute to the movement.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-10"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Volunteer Type Field */}
                <div className="space-y-2">
                  <Label htmlFor="volunteerType">Area of Interest *</Label>
                  <Select
                    value={formData.volunteerType}
                    onValueChange={(value: string) => handleInputChange("volunteerType", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your area of expertise or interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {volunteerTypes.map((type) => {
                        const IconComponent = type.icon
                        return (
                          <SelectItem key={type.id} value={type.id}>
                            <div className="flex items-center gap-2">
                              <IconComponent className="h-4 w-4" />
                              {type.label}
                            </div>
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                  
                  {/* Show selected type with icon */}
                  {selectedVolunteerType && (
                    <div className="mt-2">
                      <Badge 
                        className={`bg-${selectedVolunteerType.color}-100 text-${selectedVolunteerType.color}-700 hover:bg-${selectedVolunteerType.color}-200`}
                      >
                        <selectedVolunteerType.icon className="w-4 h-4 mr-2" />
                        {selectedVolunteerType.label}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Notes Field */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Textarea
                      id="notes"
                      placeholder="Tell us about your experience, skills, availability, or any specific ways you'd like to help..."
                      className="pl-10 min-h-[100px]"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-slate-900">
            Why Volunteer with Millennials4GenZ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle className="text-lg">Support Youth Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Help amplify Gen Z voices and ensure youth remain at the center of Nepal's democratic movements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle className="text-lg">Make Real Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Contribute your skills and experience to building sustainable systems for social change.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle className="text-lg">Build Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Join a community of committed volunteers working together for Nepal's democratic future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
