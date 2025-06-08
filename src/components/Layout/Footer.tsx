import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import dayjs from 'dayjs'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div> */}
              <div className="w-8 h-8 bg-gradient-to-br bg-validus-blue  rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-white">Credvora</span>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs">
              Empowering financial growth through innovative investment solutions and asset management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Investment Platform</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Portfolio Management</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Risk Analytics</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Compliance Tools</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-sm text-neutral-400 hover:text-white transition-colors">For Investors</Link></li>
              <li><Link to="/login" className="text-sm text-neutral-400 hover:text-white transition-colors">For AMCs</Link></li>
              <li><Link to="/login" className="text-sm text-neutral-400 hover:text-white transition-colors">For Distributors</Link></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400">
              © {dayjs().year()} Credvora Financial. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer