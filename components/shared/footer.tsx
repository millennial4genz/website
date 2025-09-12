import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-slate-900">#millennials4genz</h3>
            <p className="text-sm text-slate-600">Centering Gen Z leadership for a new Nepal.</p>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-slate-900">Movement</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-slate-600 hover:text-teal-600 transition-colors">
                About
              </Link>
              <Link href="/about/principles" className="block text-slate-600 hover:text-teal-600 transition-colors">
                Principles
              </Link>
              <Link href="/about/values" className="block text-slate-600 hover:text-teal-600 transition-colors">
                Values
              </Link>
              <Link href="/about/faq" className="block text-slate-600 hover:text-teal-600 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-slate-900">Get Involved</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/get-involved/volunteer"
                className="block text-slate-600 hover:text-teal-600 transition-colors"
              >
                Volunteer
              </Link>
              <Link href="/get-involved/partner" className="block text-slate-600 hover:text-teal-600 transition-colors">
                Partner
              </Link>
              <Link href="/support" className="block text-slate-600 hover:text-teal-600 transition-colors">
                Support Areas
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-slate-900">Resources</h4>
            <div className="space-y-2 text-sm">
              <Link href="/resources/toolkits" className="block text-slate-600 hover:text-teal-600 transition-colors">
                Toolkits
              </Link>
              <Link href="/updates" className="block text-slate-600 hover:text-teal-600 transition-colors">
                Updates
              </Link>
              <Link href="/contact" className="block text-slate-600 hover:text-teal-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>© 2024 #millennials4genz. Open source movement.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-teal-600 transition-colors">
              Privacy
            </Link>
            <Link href="/accessibility" className="hover:text-teal-600 transition-colors">
              Accessibility
            </Link>
            <Button variant="ghost" size="sm">
              EN / नेपाली
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
