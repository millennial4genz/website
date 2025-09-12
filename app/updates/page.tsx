import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, Bell } from "lucide-react"
import Link from "next/link"

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Space for updates illustration */}
          <div className="mb-12 h-64 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Bell className="w-16 h-16 mx-auto mb-4 text-teal-500" />
              <p className="text-sm">Space for updates and announcements illustration</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">Movement Updates</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
            Stay informed about the latest developments, announcements, and progress in our youth-led movement for
            Nepal.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center py-12">
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-teal-100">
                  <Clock className="h-12 w-12 text-teal-600" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-900 mb-4">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We're building a comprehensive updates system to keep you informed about movement progress, upcoming
                events, policy developments, and community achievements.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-medium text-slate-900 mb-2">Event Updates</h3>
                  <p className="text-sm text-slate-600">Upcoming rallies, meetings, and community events</p>
                </div>
                <div className="text-center">
                  <Bell className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-medium text-slate-900 mb-2">Movement News</h3>
                  <p className="text-sm text-slate-600">Latest developments and achievements</p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-medium text-slate-900 mb-2">Progress Reports</h3>
                  <p className="text-sm text-slate-600">Transparent updates on our initiatives</p>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-sm text-slate-500 mb-6">Want to be notified when updates go live?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href="/get-involved">Get Involved Now</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
