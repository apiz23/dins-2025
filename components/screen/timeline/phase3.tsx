import { BlurFade } from "@/components/magicui/blur-fade";
import {
  ArrowUpRight,
  CalendarCheck,
  Clock,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Phase3() {
  return (
    <>
      <BlurFade delay={0.65} inView>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          {/* Main Event Card */}
          <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm shadow-xl mb-8 transform transition-all hover:scale-[1.01]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="bg-indigo-500/20 p-4 rounded-xl border border-indigo-500/30 flex-shrink-0">
                <CalendarCheck className="h-8 w-8 text-indigo-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Symposium Day @ UTHM
                </h3>
                <p className="text-lg text-gray-300 mb-4">3 Nov 2025</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <div className="flex items-center text-sm text-purple-200">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="h-4 w-4 mr-2 text-rose-300" />
                    <span>
                      Main Campus, Universiti Tun Hussein Onn Malaysia
                    </span>
                  </div>
                  <span className="text-xs bg-purple-900/40 text-purple-200 px-3 py-1 rounded-full border border-purple-700/50">
                    All Day Event
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Section */}
          <div className="grid grid-cols-1 gap-8">
            {/* Luma Embed Card */}
            <div className="group relative bg-gradient-to-br from-gray-800/80 via-gray-900/60 to-gray-800/80 rounded-3xl border border-gray-600/50 overflow-hidden backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-2xl shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                      <CalendarCheck className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-blue-500/30 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Event Details
                    </h3>
                    <p className="text-gray-300 font-medium">
                      Complete event information
                    </p>
                  </div>
                </div>

                {/* Luma Embed */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-gray-600/50 shadow-lg group-hover:border-blue-400/50 group-hover:shadow-xl transition-all duration-500">
                  {/* Embed shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                  <iframe
                    src="https://luma.com/embed/event/evt-JDk6DkDNHKpNwOW/simple"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{
                      border: "none",
                      borderRadius: "12px",
                      background: "transparent",
                    }}
                    allow="fullscreen; payment"
                    aria-hidden="false"
                    tabIndex={0}
                    className="absolute inset-0"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent pointer-events-none" />

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/20 rounded-2xl transition-all duration-500 pointer-events-none" />
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-gray-300 text-sm text-center font-medium">
                    Explore event schedule, speakers, and venue details
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-gray-700/80 overflow-hidden backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-rose-500/20 p-2 rounded-lg border border-rose-500/30">
                  <MapPin className="h-5 w-5 text-rose-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Venue Location
                </h3>
              </div>

              {/* Interactive Map */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-gray-700 shadow-lg hover:border-purple-500 transition-all duration-300 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.160378290877!2d103.0852!3d1.8554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da72f8a7a8b2c5%3A0x9f7cf7e6b9a05a!2sUniversiti%20Tun%20Hussein%20Onn%20Malaysia!5e1!3m2!1sen!2smy!4v1691505630664!5m2!1sen!2smy"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Link
                  href="https://maps.app.goo.gl/D21WZe5Uz8kDCM3L9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-purple-500/30"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Luma Checkout Script */}
        <script
          id="luma-checkout"
          src="https://embed.lu.ma/checkout-button.js"
          async
          defer
        />
      </BlurFade>
    </>
  );
}
