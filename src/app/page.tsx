"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  Heart,
  Award,
  Users,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function IceCreamLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const flavors = [
    {
      name: "Strawberry Bliss",
      price: "$4.99",
      image: "",
      color: "from-pink-400 to-red-400",
    },
    {
      name: "Chocolate Dream",
      price: "$4.99",
      image: "",
      color: "from-amber-600 to-orange-600",
    },
    {
      name: "Vanilla Cloud",
      price: "$4.49",
      image: "",
      color: "from-yellow-300 to-amber-300",
    },
    {
      name: "Mint Chip",
      price: "$5.49",
      image: "",
      color: "from-green-400 to-emerald-400",
    },
    {
      name: "Blueberry Burst",
      price: "$5.99",
      image: "",
      color: "from-blue-400 to-purple-400",
    },
    {
      name: "Caramel Swirl",
      price: "$5.49",
      image: "",
      color: "from-orange-400 to-red-400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The best ice cream in town! My kids absolutely love coming here every weekend.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "Amazing flavors and the staff is so friendly. The mint chip is to die for!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "Perfect spot for a date night dessert. The atmosphere is cozy and the ice cream is incredible.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Replace the emoji logo with an actual logo image */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/file.svg"
                  alt="SweetScoop Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                SweetScoop
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#home"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#flavors"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Flavors
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
              Order Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="/file.svg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 text-sm">
                  🎉 New Flavors Available!
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Sweet Dreams
                  </span>
                  <br />
                  <span className="text-gray-800">Come True</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Indulge in our handcrafted ice cream made with the finest
                  ingredients. Every scoop is a journey to happiness!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg"
                >
                  Explore Flavors
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg"
                >
                  Find Location
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 animate-float">
                <Image
                  src="/file.svg?height=600&width=600"
                  alt="Delicious Ice Cream"
                  width={600}
                  height={600}
                  className="w-full max-w-lg mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-pink-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 z-0 overflow-hidden rounded-bl-full">
          <Image
            src="/file.svg"
            alt="Decorative element"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Our Sweet Story
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 1985, we&apos;ve been crafting the most delicious ice cream
              using traditional recipes and the freshest ingredients. Every
              scoop tells a story of passion and perfection.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                  <p className="text-gray-600">
                    Every batch is crafted with care using family recipes passed
                    down through generations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                  <p className="text-gray-600">
                    Recognized as the &quot;Best Ice Cream Shop&quot; for 5
                    consecutive years by the local community.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Community Favorite
                  </h3>
                  <p className="text-gray-600">
                    Proudly serving over 50,000 happy customers and creating
                    sweet memories every day.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/file.svg?height=500&width=500"
                alt="Our Ice Cream Shop"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">38+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flavors */}
      <section
        id="flavors"
        className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 relative"
      >
        <div className="absolute inset-0 opacity-5 z-0">
          <Image
            src="/"
            alt="Ice cream pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Signature Flavors
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handcrafted flavors made with premium ingredients and
              endless creativity
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavors.map((flavor, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <Image
                      src={flavor.image || "/file.svg"}
                      alt={flavor.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${flavor.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    ></div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {flavor.name}
                    </h3>
                    <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      {flavor.price}
                    </p>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Why Choose SweetScoop?
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-gray-600">
                Made fresh every morning with the finest ingredients
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Only the best ingredients make it into our ice cream
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick delivery to keep your ice cream perfectly frozen
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Friendly</h3>
              <p className="text-gray-600">
                A welcoming space for families and friends to enjoy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative">
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="/file.svg"
            alt="Testimonial background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                What Our Customers Say
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic">
                    &quot;{testimonials[activeTestimonial].text}&quot;
                  </blockquote>
                  <div className="text-lg font-semibold text-gray-800">
                    {testimonials[activeTestimonial].name}
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? "bg-pink-500" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Visit Our Store
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Sweet Street, Ice Cream City, IC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-gray-600">Mon-Sun: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">(555) 123-SCOOP)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">hello@sweetscoop.com</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/file.svg?height=400&width=600"
                alt="Our Store"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 relative">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="/file.svg"
            alt="Newsletter background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Stay Sweet with Us!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive flavors, special offers,
              and sweet surprises delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                />
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🍦</span>
                </div>
                <span className="text-2xl font-bold">SweetScoop</span>
              </div>
              <p className="text-gray-400">
                Creating sweet memories one scoop at a time since 1985.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Catering
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} SweetScoop. All rights reserved.
              Made with ❤️ and lots of ice cream.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
