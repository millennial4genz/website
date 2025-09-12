"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">Get in Touch</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
            Connect with our movement. Whether you're a Gen Z leader, millennial supporter, or ally, we want to hear
            from you.
          </p>
        </div>
      </section>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Send us a message</CardTitle>
                  <p className="text-slate-600">
                    We'll get back to you within 24 hours. All communications are secure and confidential.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry, ideas, or how you'd like to get involved..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Address</h3>
                      <p className="text-slate-600">
                        Kathmandu, Nepal
                        <br />
                        (Specific address available to verified members)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Email</h3>
                      <p className="text-slate-600">contact@millennial4genz.org</p>
                      <p className="text-sm text-slate-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Phone</h3>
                      <p className="text-slate-600">+977-XXX-XXXX</p>
                      <p className="text-sm text-slate-500">Available for verified partners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Response Time</h3>
                      <p className="text-slate-600">
                        General inquiries: 24 hours
                        <br />
                        Urgent matters: 4-6 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-teal-200">
                    <div className="text-center text-slate-600">
                      <MapPin className="w-12 h-12 mx-auto mb-3 text-teal-500" />
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-4">
                    Our movement operates across Nepal with coordination hubs in major cities. Exact locations shared
                    with verified members for security.
                  </p>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <Card className="bg-teal-50 border-teal-200">
                <CardContent className="pt-6">
                  <h3 className="font-medium text-teal-900 mb-2">Security & Privacy</h3>
                  <p className="text-sm text-teal-700">
                    We take security seriously. All communications are encrypted, and personal information is protected.
                    We never share contact details without explicit consent.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
