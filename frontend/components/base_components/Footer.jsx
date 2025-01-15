import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">About Us</h3>
            <p className="text-sm text-blue-200">
              Welcome to our e-commerce platform! We offer the best products to make your life easier and better. Quality and customer satisfaction are our top priorities.
            </p>
            <div className="flex gap-4 mt-4">
              <Image
                src="/logo-facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <Image
                src="/logo-twitter.jpg"
                alt="Twitter"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <Image
                src="/logo-instagram.jpg"
                alt="Instagram"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <Image
                src="/logo-linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Customer Support</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <Link href="/shipping-info">Shipping Information</Link>
              </li>
              <li>
                <Link href="/returns">Returns & Refunds</Link>
              </li>
              <li>
                <Link href="/order-tracking">Order Tracking</Link>
              </li>
              <li>
                <Link href="/size-guide">Size Guide</Link>
              </li>
              <li>
                <Link href="/payment-methods">Payment Methods</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-blue-200">
              Get the latest updates, exclusive offers, and news directly in your inbox.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-blue-900"
              />
              <button
                type="submit"
                className="mt-2 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-700 mt-8 pt-4 text-sm text-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Your E-Commerce. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Image src="/esewa.png" alt="Esewa" width={40} height={20} />
              <Image src="/cod.png" alt="Cash on Delivery" width={40} height={20} />
              <Image src="/ime-pay.png" alt="IME Pay" width={40} height={20} />
              <Image src="/visa.png" alt="VISA" width={40} height={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
